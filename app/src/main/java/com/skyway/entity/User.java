package com.skyway.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

/*
user table: name, role, username, password
tenant table: first name, last name, ssn,phone no,email, apartment unit, 
manager table: first name, last name, phone number, email
maintenance team: first name, last name, phone number, email
request: req id,req owner name,req title, location,status,img, req assigned to, start date and time, end date and time,*/

@Entity
public class User {

	@Id
	@Column(name = "user_id", unique = true)
    private String userId;
	
	private String firstName;
	
	private String lastName;
	
	private String ssn;
	
	private String phoneNumber;
	
	private String email;
	
	private String aptUnit;
	
	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Login login;
	
	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getSsn() {
		return ssn;
	}

	public void setSsn(String ssn) {
		this.ssn = ssn;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAptUnit() {
		return aptUnit;
	}

	public void setAptUnit(String aptUnit) {
		this.aptUnit = aptUnit;
	}

	public Login getLogin() {
		return login;
	}

	public void setLogin(Login login) {
		this.login = login;
	}
	
}
