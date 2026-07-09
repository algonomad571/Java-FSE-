# Week 4 — Microservices (Deepskilling)

Completed solutions for the **Microservices** hands-on assessments in
`Deepskilling/Microservices/` (files `0.` through `3.`), built as 5 independent
Spring Boot 3 / Spring Cloud 2023.0.1 Maven projects.

| Module | Port | Purpose |
|---|---|---|
| `eureka-server` | 8761 | Service discovery registry |
| `account-service` | 8081 | Bank account microservice, registers with Eureka |
| `loan-service` | 8082 | Bank loan microservice, registers with Eureka |
| `api-gateway` | 8080 | Spring Cloud Gateway: routing, logging filter, load balancing |
| `payment-service` | 8083 | Circuit breaker / resilience demo (Resilience4j) |

## Mapping to the hands-on documents

### `3. Microservices composite handson.docx` — Account & Loan microservices + Eureka
- **`account-service`** — `GET /accounts/{number}` returns a dummy account
  (`{ "number": "...", "type": "savings", "balance": 234343 }`), exactly as specified.
- **`loan-service`** — `GET /loans/{number}` returns a dummy loan
  (`{ "number": "...", "type": "car", "loan": 400000, "emi": 3258, "tenure": 18 }`).
- Both services run on different ports (`8081`, `8082`) to avoid the "bind address already
  in use" conflict called out in the hands-on.
- **`eureka-server`** — `@EnableEurekaServer`, port `8761`, `register-with-eureka=false` /
  `fetch-registry=false` (it only hosts the registry, it doesn't register itself).
- Both `account-service` and `loan-service` use `@EnableDiscoveryClient` and
  `spring.application.name` so they show up in the Eureka dashboard at
  `http://localhost:8761` once started.

### `1. Microservices using Spring Boot 3 exercises.pdf` — API Gateway + Circuit Breaker
- **`api-gateway`** implements Exercise 3 (API Gateway routing) using Spring Cloud Gateway:
  routes `/api/accounts/**` → `lb://account-service` and `/api/loans/**` → `lb://loan-service`,
  rewriting the path before forwarding. `spring.cloud.gateway.discovery.locator.enabled=true`
  also exposes every registered service directly (e.g. `/account-service/accounts/1`).
- **`payment-service`** implements Exercise 4 (Resilient Microservices): `PaymentService` calls
  a simulated slow third-party payment API (`ThirdPartyPaymentClient`, 4s latency) wrapped in a
  Resilience4j `@CircuitBreaker` + `@TimeLimiter` (2s timeout), with a `fallbackCharge()` method
  that logs the fallback event and returns a graceful "pending" response instead of failing the
  caller.

### `0. Sample Microservices Load balancing exercises.pdf` — Edge services / Gateway filtering & load balancing
- **Exercise 1 (routing & filtering):** `LoggingFilter` (`GlobalFilter`, `Ordered`) in
  `api-gateway` logs every incoming request and its outcome/latency — the "custom filter for
  logging requests" from the hands-on.
- **Exercise 2 (load balancing):** routes use the `lb://` URI scheme
  (`lb://account-service`, `lb://loan-service`), so `spring-cloud-starter-loadbalancer`
  automatically load-balances across every instance of that service name registered in Eureka
  — run a second instance of `account-service` on a different port (`--server.port=8091`) to see
  requests distributed between the two.
- **Exercise 3 (resilience in the gateway):** the same Resilience4j circuit-breaker pattern is
  demonstrated at the service level in `payment-service` (a gateway-level circuit breaker filter
  can be layered on top the same way, using `spring-cloud-starter-circuitbreaker-reactor-resilience4j`).

### `2. Microservices with API gateway.pdf` — Theory (Monolith vs. Microservices, Enterprise Applications)
This document is conceptual (bank enterprise application case study, monolith failure scenario,
advantages/challenges of microservices). No standalone code exercise is defined beyond what's
covered by hands-on `3.` above (Account/Loan microservices) — this repo's `account-service` /
`loan-service` / `eureka-server` trio *is* that hands-on's deliverable.

## Running everything locally

Start in this order (each in its own terminal), from each module's folder:

```bash
# 1. Discovery server
cd eureka-server && mvn spring-boot:run

# 2 & 3. Business microservices (wait for eureka-server to be up first)
cd account-service && mvn spring-boot:run
cd loan-service && mvn spring-boot:run

# 4. Gateway
cd api-gateway && mvn spring-boot:run

# 5. Resilience demo (standalone, no Eureka needed)
cd payment-service && mvn spring-boot:run
```

Check the registry: http://localhost:8761 — `account-service` and `loan-service` should be listed
once they're up.

## Trying it out

```bash
# Direct calls
curl http://localhost:8081/accounts/00987987973432
curl http://localhost:8082/loans/H00987987972342

# Through the gateway (routing + logging filter + load balancing)
curl http://localhost:8080/api/accounts/00987987973432
curl http://localhost:8080/api/loans/H00987987972342

# Via the discovery-locator route (service-id based)
curl http://localhost:8080/account-service/accounts/00987987973432

# Circuit breaker / fallback demo (times out after 2s, logs + returns a pending response)
curl -X POST "http://localhost:8083/payments?orderId=ORD-1&amount=500"
curl http://localhost:8083/actuator/health   # shows circuitbreakers component once open
```

To see load balancing in action, start a second `account-service` instance on another port:

```bash
cd account-service && mvn spring-boot:run -Dspring-boot.run.arguments=--server.port=8091
```

Both instances register under the name `account-service`; repeated calls to
`http://localhost:8080/api/accounts/{number}` will be distributed across them.

## Project layout

```
Week4-Microservices/
├── eureka-server/        (port 8761, @EnableEurekaServer)
├── account-service/       (port 8081, @EnableDiscoveryClient)
├── loan-service/          (port 8082, @EnableDiscoveryClient)
├── api-gateway/           (port 8080, Spring Cloud Gateway + LoadBalancer)
└── payment-service/       (port 8083, Resilience4j Circuit Breaker + Time Limiter)
```

Each module is a standalone Maven project (its own `pom.xml`) — there is no parent/aggregator
POM, matching the hands-on's instruction to create independent projects via start.spring.io.
