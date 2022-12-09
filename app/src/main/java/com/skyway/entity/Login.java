package com.skyway.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class Login {
	
	@Id
	@Column(name = "user_id", unique = true)
	private String userId;
	
	private String password;
	
	public Login() {
		// TODO Auto-generated constructor stub
	}
	
	public Login(String userId, String pass) {
		this.userId = userId;
		this.password = pass;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
