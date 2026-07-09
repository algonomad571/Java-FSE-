package com.cognizant.springlearn.dao;

import com.cognizant.springlearn.model.Department;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class DepartmentDao {

    private static final Logger LOGGER = LoggerFactory.getLogger(DepartmentDao.class);

    @SuppressWarnings("unchecked")
    private static final List<Department> DEPARTMENT_LIST;

    static {
        LOGGER.debug("Loading department list from employee.xml");
        try (ApplicationContext context = new ClassPathXmlApplicationContext("employee.xml")) {
            DEPARTMENT_LIST = new ArrayList<>((List<Department>) context.getBean("departmentList", List.class));
        }
    }

    public List<Department> getAllDepartments() {
        LOGGER.debug("getAllDepartments() - returning {} departments", DEPARTMENT_LIST.size());
        return DEPARTMENT_LIST;
    }
}
