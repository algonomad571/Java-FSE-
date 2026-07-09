package com.cognizant.springlearn.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

/**
 * Hands on 4: Input validation using jakarta.validation / hibernate validators.
 */
public class Country {

    @NotBlank(message = "Country code must not be blank")
    @Size(min = 2, max = 3, message = "Country code must be between 2 and 3 characters")
    private String code;

    @NotBlank(message = "Country name must not be blank")
    @Size(min = 2, max = 60, message = "Country name must be between 2 and 60 characters")
    private String name;

    public Country() {
    }

    public Country(String code, String name) {
        this.code = code;
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
