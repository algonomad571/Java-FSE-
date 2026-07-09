package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.security.JwtUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.Set;

/**
 * Hands on 5: In-memory "admin"/"user" accounts (password "pwd" for both, as in the
 * hands-on material) that issue a signed JWT on successful login.
 */
@RestController
@RequestMapping("/auth")
public class AuthController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthController.class);
    private static final Set<String> VALID_USERS = Set.of("admin", "user");
    private static final String DEMO_PASSWORD = "pwd";

    private final JwtUtil jwtUtil;

    public AuthController(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    public record LoginRequest(String username, String password) {
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        LOGGER.info("Start - login() username={}", request.username());

        if (!VALID_USERS.contains(request.username()) || !DEMO_PASSWORD.equals(request.password())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message", "Invalid credentials"));
        }

        String role = "admin".equals(request.username()) ? "ADMIN" : "USER";
        String token = jwtUtil.generateToken(request.username(), role);

        LOGGER.info("End - login() issued token for {}", request.username());
        return ResponseEntity.ok(Map.of("token", token, "role", role));
    }
}
