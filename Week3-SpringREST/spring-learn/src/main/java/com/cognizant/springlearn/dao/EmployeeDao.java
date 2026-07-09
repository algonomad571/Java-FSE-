package com.cognizant.springlearn.dao;

import com.cognizant.springlearn.model.Employee;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class EmployeeDao {

    private static final Logger LOGGER = LoggerFactory.getLogger(EmployeeDao.class);

    @SuppressWarnings("unchecked")
    private static final List<Employee> EMPLOYEE_LIST;

    static {
        LOGGER.debug("Loading employee list from employee.xml");
        try (ApplicationContext context = new ClassPathXmlApplicationContext("employee.xml")) {
            EMPLOYEE_LIST = new ArrayList<>((List<Employee>) context.getBean("employeeList", List.class));
        }
    }

    public List<Employee> getAllEmployees() {
        LOGGER.debug("getAllEmployees() - returning {} employees", EMPLOYEE_LIST.size());
        return EMPLOYEE_LIST;
    }
}
