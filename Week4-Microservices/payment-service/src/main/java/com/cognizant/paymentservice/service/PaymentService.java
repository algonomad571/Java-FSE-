package com.cognizant.paymentservice.service;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.timelimiter.annotation.TimeLimiter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.Executors;

/**
 * Exercise 4 (Resilient Microservices): a Payment Service that calls a slow
 * third-party API, wrapped in a Resilience4j Circuit Breaker + Time Limiter with
 * a fallback method. Fallback events are logged for monitoring.
 */
@Service
public class PaymentService {

    private static final Logger LOGGER = LoggerFactory.getLogger(PaymentService.class);

    private final ThirdPartyPaymentClient client;

    public PaymentService(ThirdPartyPaymentClient client) {
        this.client = client;
    }

    @CircuitBreaker(name = "paymentService", fallbackMethod = "fallbackCharge")
    @TimeLimiter(name = "paymentService")
    public CompletableFuture<String> chargePayment(String orderId, double amount) {
        return CompletableFuture.supplyAsync(() -> client.charge(orderId, amount),
                Executors.newCachedThreadPool());
    }

    /**
     * Fallback invoked when the circuit is open or the call times out / fails.
     * Signature must match the original method + a Throwable parameter.
     */
    public CompletableFuture<String> fallbackCharge(String orderId, double amount, Throwable throwable) {
        LOGGER.warn("Fallback triggered for order {} amount {} - reason: {}",
                orderId, amount, throwable.toString());
        return CompletableFuture.completedFuture(
                "PENDING:" + orderId + " - payment gateway unavailable, will retry later");
    }
}
