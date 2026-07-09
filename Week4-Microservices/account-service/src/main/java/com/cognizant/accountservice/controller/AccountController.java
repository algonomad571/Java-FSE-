package com.cognizant.accountservice.controller;

import com.cognizant.accountservice.model.Account;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 * Account Microservice - GET /accounts/{number}
 * Standalone service without backend connectivity, per the hands-on spec:
 * { number, type, balance }
 */
@RestController
public class AccountController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AccountController.class);

    @Value("${server.port}")
    private String port;

    @GetMapping("/accounts/{number}")
    public Account getAccount(@PathVariable String number) {
        LOGGER.info("Start - getAccount() number={} servedBy=port:{}", number, port);
        return new Account(number, "savings", 234343);
    }
}
