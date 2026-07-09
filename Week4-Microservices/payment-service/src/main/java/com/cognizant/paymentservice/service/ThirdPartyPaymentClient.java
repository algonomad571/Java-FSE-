package com.cognizant.paymentservice.service;

import org.springframework.stereotype.Component;

/**
 * Simulates a slow / unreliable third-party payment gateway API.
 * In a real system this would be a RestTemplate/WebClient call to an external host;
 * here it's simulated so the exercise is self-contained and runnable without external
 * dependencies.
 */
@Component
public class ThirdPartyPaymentClient {

    public String charge(String orderId, double amount) {
        try {
            // Simulate high latency from the third-party API
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        return "CHARGED:" + orderId + ":" + amount;
    }
}
