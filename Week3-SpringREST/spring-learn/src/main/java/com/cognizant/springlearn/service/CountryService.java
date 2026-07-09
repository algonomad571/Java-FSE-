package com.cognizant.springlearn.service;

import com.cognizant.springlearn.dao.CountryDao;
import com.cognizant.springlearn.exception.ResourceNotFoundException;
import com.cognizant.springlearn.model.Country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryService.class);

    private final CountryDao countryDao;

    @Autowired
    public CountryService(CountryDao countryDao) {
        this.countryDao = countryDao;
    }

    public List<Country> getAllCountries() {
        LOGGER.info("Start - getAllCountries()");
        return countryDao.getAllCountries();
    }

    public Country getCountry(String code) {
        LOGGER.info("Start - getCountry() code={}", code);
        return countryDao.getCountry(code)
                .orElseThrow(() -> new ResourceNotFoundException("Country not found for code: " + code));
    }

    public Country addCountry(Country country) {
        LOGGER.info("Start - addCountry() {}", country.getCode());
        return countryDao.addCountry(country);
    }

    public Country updateCountry(Country country) {
        LOGGER.info("Start - updateCountry() {}", country.getCode());
        return countryDao.updateCountry(country)
                .orElseThrow(() -> new ResourceNotFoundException("Country not found for code: " + country.getCode()));
    }

    public void deleteCountry(String code) {
        LOGGER.info("Start - deleteCountry() {}", code);
        if (!countryDao.deleteCountry(code)) {
            throw new ResourceNotFoundException("Country not found for code: " + code);
        }
    }
}
