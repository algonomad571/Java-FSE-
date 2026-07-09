package com.cognizant.springlearn.model;

public class Employee {

    private int id;
    private String name;
    private String skill;
    private Department department;

    public Employee() {
    }

    public Employee(int id, String name, String skill, Department department) {
        this.id = id;
        this.name = name;
        this.skill = skill;
        this.department = department;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }
}
