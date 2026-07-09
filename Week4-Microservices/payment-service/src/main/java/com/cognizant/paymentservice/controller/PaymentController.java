package com.cognizant.paymentservice.controller;

import com.cognizant.paymentservice.service.PaymentService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.CompletableFuture;

@RestController
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping("/payments")
    public CompletableFuture<String> pay(@RequestParam String orderId, @RequestParam double amount) {
        return paymentService.chargePayment(orderId, amount);
    }
}
