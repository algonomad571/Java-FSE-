package com.cognizant.springlearn.dao;

import com.cognizant.springlearn.model.Country;
import org.springframework.stereotype.Repository;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Hands on 4: Simple in-memory store backing the CRUD operations
 * (GET / POST / PUT / DELETE) for the Country resource.
 */
@Repository
public class CountryDao {

    private final Map<String, Country> countries = new ConcurrentHashMap<>();

    public CountryDao() {
        countries.put("US", new Country("US", "United States"));
        countries.put("DE", new Country("DE", "Germany"));
        countries.put("IN", new Country("IN", "India"));
        countries.put("JP", new Country("JP", "Japan"));
    }

    public List<Country> getAllCountries() {
        return new java.util.ArrayList<>(new LinkedHashMap<>(countries).values());
    }

    public Optional<Country> getCountry(String code) {
        return Optional.ofNullable(countries.get(code));
    }

    public Country addCountry(Country country) {
        countries.put(country.getCode(), country);
        return country;
    }

    public Optional<Country> updateCountry(Country country) {
        if (!countries.containsKey(country.getCode())) {
            return Optional.empty();
        }
        countries.put(country.getCode(), country);
        return Optional.of(country);
    }

    public boolean deleteCountry(String code) {
        return countries.remove(code) != null;
    }
}
