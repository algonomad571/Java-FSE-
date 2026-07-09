package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Hands on 1 - Create a Spring Web Project using Maven / Spring Initializr.
 * Hands on 2 - Load SimpleDateFormat bean from Spring XML configuration (date-format.xml).
 * Hands on 3 - Incorporate logging using SLF4J + application.properties config.
 */
@SpringBootApplication
public class SpringLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        LOGGER.info("Start - SpringLearnApplication main()");
        SpringApplication.run(SpringLearnApplication.class, args);
        LOGGER.info("End - SpringLearnApplication main()");

        displayDate();
    }

    /**
     * Hands on 2: Load a SimpleDateFormat bean defined in date-format.xml
     * using ClassPathXmlApplicationContext and use it to parse a date string.
     */
    public static void displayDate() {
        LOGGER.debug("Start - displayDate()");
        try (ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml")) {
            SimpleDateFormat format = context.getBean("dateFormat", SimpleDateFormat.class);
            Date date = format.parse("31/12/2018");
            LOGGER.info("Parsed date from XML configured bean: {}", date);
            System.out.println("Parsed date: " + date);
        } catch (Exception e) {
            LOGGER.error("Error parsing date", e);
        }
        LOGGER.debug("End - displayDate()");
    }
}
