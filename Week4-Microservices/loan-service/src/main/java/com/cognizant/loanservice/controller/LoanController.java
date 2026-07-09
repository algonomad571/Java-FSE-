package com.cognizant.loanservice.controller;

import com.cognizant.loanservice.model.Loan;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 * Loan Microservice - GET /loans/{number}
 * Standalone service without backend connectivity, per the hands-on spec:
 * { number, type, loan, emi, tenure }
 */
@RestController
public class LoanController {

    private static final Logger LOGGER = LoggerFactory.getLogger(LoanController.class);

    @Value("${server.port}")
    private String port;

    @GetMapping("/loans/{number}")
    public Loan getLoan(@PathVariable String number) {
        LOGGER.info("Start - getLoan() number={} servedBy=port:{}", number, port);
        return new Loan(number, "car", 400000, 3258, 18);
    }
}
