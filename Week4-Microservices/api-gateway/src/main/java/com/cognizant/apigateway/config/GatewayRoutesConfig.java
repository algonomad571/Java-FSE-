package com.cognizant.apigateway.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Exercise 2/3: routes to account-service and loan-service using the "lb://"
 * scheme so Spring Cloud LoadBalancer distributes requests across all instances
 * registered with Eureka under that service name, plus a path-rewrite example.
 */
@Configuration
public class GatewayRoutesConfig {

    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
                .route("account-service-route", r -> r.path("/api/accounts/**")
                        .filters(f -> f.rewritePath("/api/accounts/(?<segment>.*)", "/accounts/${segment}"))
                        .uri("lb://account-service"))
                .route("loan-service-route", r -> r.path("/api/loans/**")
                        .filters(f -> f.rewritePath("/api/loans/(?<segment>.*)", "/loans/${segment}"))
                        .uri("lb://loan-service"))
                .build();
    }
}
