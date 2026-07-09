package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.service.CountryService;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Hands on 4 (Spring REST session): RESTful Web Service using GET/POST/PUT/DELETE
 * with input validation, following the resource naming conventions covered in the
 * hands-on material (plural resource names, {id} path variables).
 */
@RestController
@RequestMapping("/countries")
public class CountryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

    private final CountryService countryService;

    @Autowired
    public CountryController(CountryService countryService) {
        this.countryService = countryService;
    }

    @GetMapping
    public List<Country> getAllCountries() {
        LOGGER.info("Start - getAllCountries()");
        return countryService.getAllCountries();
    }

    @GetMapping("/{code}")
    public Country getCountry(@PathVariable String code) {
        LOGGER.info("Start - getCountry() code={}", code);
        return countryService.getCountry(code);
    }

    @PostMapping
    public ResponseEntity<Country> addCountry(@Valid @RequestBody Country country) {
        LOGGER.info("Start - addCountry() {}", country.getCode());
        Country created = countryService.addCountry(country);
        LOGGER.info("End - addCountry()");
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @PutMapping
    public Country updateCountry(@Valid @RequestBody Country country) {
        LOGGER.info("Start - updateCountry() {}", country.getCode());
        return countryService.updateCountry(country);
    }

    @DeleteMapping("/{code}")
    public ResponseEntity<Void> deleteCountry(@PathVariable String code) {
        LOGGER.info("Start - deleteCountry() code={}", code);
        countryService.deleteCountry(code);
        return ResponseEntity.noContent().build();
    }
}
