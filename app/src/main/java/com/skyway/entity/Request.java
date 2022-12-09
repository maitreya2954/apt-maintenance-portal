package com.skyway.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
// request: req id,req owner name,req title, location,status,img, req assigned to, start date and time, end date and time
@Entity
public class Request {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long requestId;
	
	private String userId;
	
	private int location;
	
	private int status;
	
	private long startMillis;
	
	private long endMillis;

	//TODO: Implement image storing
	
	public Long getRequestId() {
		return requestId;
	}

	public void setRequestId(Long requestId) {
		this.requestId = requestId;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public int getLocation() {
		return location;
	}

	public void setLocation(int location) {
		this.location = location;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public long getStartMillis() {
		return startMillis;
	}

	public void setStartMillis(long startMillis) {
		this.startMillis = startMillis;
	}

	public long getEndMillis() {
		return endMillis;
	}

	public void setEndMillis(long endMillis) {
		this.endMillis = endMillis;
	}
	
	
}
