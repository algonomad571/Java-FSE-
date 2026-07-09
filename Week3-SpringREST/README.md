# Week 3 — Spring REST using Spring Boot (Deepskilling)

This folder contains a completed, buildable solution for the **"Spring REST using Spring Boot"**
hands-on assessments (files `1.` through `5.` in `Deepskilling/Spring REST using Spring Boot/`).

Project: **`spring-learn`** — a single Spring Boot 3 (Java 17) Maven project, `com.cognizant:spring-learn`.

## What's implemented, mapped to each hands-on document

### 1. spring-rest-handson.docx — Spring Boot basics
- `SpringLearnApplication` — `@SpringBootApplication`, `SpringApplication.run()`, start/end logging in `main()`.
- `date-format.xml` — Spring XML bean configuration defining a `SimpleDateFormat` bean (`dd/MM/yyyy`),
  loaded via `ClassPathXmlApplicationContext` in `displayDate()` — demonstrates the classic Spring IoC container
  alongside Boot's annotation-based configuration.
- Logging incorporated via SLF4J + `application.properties` (`logging.level.*`, `logging.pattern.console`).

### 2. spring-rest-handson.docx — Hello World REST service + MockMvc
- `HelloController` — `GET /hello` returns `"Hello World!!"`, with start/end log lines.
- `HelloControllerTest` — end-to-end test using `@AutoConfigureMockMvc` / `MockMvc`, asserting `status().isOk()`
  and the response body, matching the pattern from the hands-on (`andExpect`, `jsonPath`, etc.).

### 3. spring-rest-handson.docx — Employee & Department REST services
- `employee.xml` — static Employee/Department data defined via Spring XML configuration (`<util:list>`),
  as specified in the hands-on ("reuse existing skills instead of creating new ones").
- `EmployeeDao` / `DepartmentDao` — static lists loaded from XML config in a static initializer.
- `EmployeeService` (`@Service`, `@Transactional`) / `DepartmentService` — call through to the DAOs.
- `EmployeeController` (`GET /employees`) / `DepartmentController` (`GET /departments`).

### 4. spring-rest-handson.docx — POST/PUT/DELETE with validation
- `Country` model — `@NotBlank`, `@Size` validation annotations (jakarta.validation / Hibernate Validator).
- `CountryController` — full CRUD following the naming convention from the hands-on
  (`@RequestMapping("/countries")`, plural resource name, `{code}` path variable):
  - `GET /countries` — all countries
  - `GET /countries/{code}` — single country (404 via `ResourceNotFoundException` if missing)
  - `POST /countries` — create, `@Valid @RequestBody`
  - `PUT /countries` — update
  - `DELETE /countries/{code}` — delete
- `GlobalExceptionHandler` (`@RestControllerAdvice`) — handles `MethodArgumentNotValidException` (bean validation
  failures), `MethodArgumentTypeMismatchException` (number formatting errors), malformed JSON, and 404s, returning
  a consistent `ApiError` JSON body.
- `CountryControllerTest` — covers the happy path, validation failure (blank name → 400), and not-found (404).

### 5. JWT-handson.docx — Spring Security + JWT
- `spring-boot-starter-security` + `jjwt` (`io.jsonwebtoken`) dependencies in `pom.xml`.
- `SecurityConfig` — modern `SecurityFilterChain` bean-based configuration (the hands-on's
  `WebSecurityConfigurerAdapter` API was removed in Spring Security 6, so this uses the current equivalent):
  stateless sessions, CSRF disabled for the REST API, `/auth/login` and `/hello` public,
  `/countries/**` requires role `USER` or `ADMIN`.
- `AuthController` — `POST /auth/login` with in-memory `admin` / `user` accounts (password `pwd`, as in the
  hands-on), returns a signed JWT plus the resolved role.
- `JwtUtil` — creates/parses HS256 JWTs with a subject, `role` claim, and expiry (`jwt.expiration-ms`).
- `JwtAuthFilter` — a `OncePerRequestFilter` that reads the `Authorization: Bearer <token>` header, validates the
  token, and populates the `SecurityContext` with a `ROLE_<role>` authority.

## Running the project

```bash
cd spring-learn
mvn clean package
mvn spring-boot:run
```

The app starts on **port 8090**.

## Trying it out

```bash
# Public endpoints
curl http://localhost:8090/hello
curl http://localhost:8090/employees
curl http://localhost:8090/departments

# Log in to get a JWT
curl -s -X POST http://localhost:8090/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"user","password":"pwd"}'
# => {"token":"<JWT>","role":"USER"}

# Use the token to call the secured Country service
TOKEN=<paste JWT here>
curl -H "Authorization: Bearer $TOKEN" http://localhost:8090/countries

curl -i -X POST http://localhost:8090/countries \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"code":"FR","name":"France"}'

# Validation error example (blank name)
curl -i -X POST http://localhost:8090/countries \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"code":"FR","name":""}'
```

## Running the tests

```bash
mvn test
```

`HelloControllerTest` and `CountryControllerTest` exercise the REST layer end-to-end with `MockMvc`,
covering the success, validation-failure, and not-found scenarios described in the hands-on documents.

## Project layout

```
spring-learn/
├── pom.xml
└── src
    ├── main
    │   ├── java/com/cognizant/springlearn
    │   │   ├── SpringLearnApplication.java
    │   │   ├── config/SecurityConfig.java
    │   │   ├── controller/ (Hello, Employee, Department, Country, Auth)
    │   │   ├── dao/ (Employee, Department, Country)
    │   │   ├── exception/ (ApiError, GlobalExceptionHandler, ResourceNotFoundException)
    │   │   ├── model/ (Employee, Department, Country)
    │   │   ├── security/ (JwtUtil, JwtAuthFilter)
    │   │   └── service/ (Employee, Department, Country)
    │   └── resources
    │       ├── application.properties
    │       ├── date-format.xml
    │       └── employee.xml
    └── test/java/com/cognizant/springlearn/controller
        ├── HelloControllerTest.java
        └── CountryControllerTest.java
```
