package com.skyway.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.skyway.entity.Request;
import com.skyway.entity.Status;
import com.skyway.repository.RequestRepository;

@CrossOrigin
@Controller
@RequestMapping(path = "/request")
public class RequestController {
	
	@Autowired
	RequestRepository requestRepository;
	
	@PostMapping(path = "/create")
	public @ResponseBody Request addRequest(@RequestParam String userId, @RequestParam String title, @RequestParam Integer location, @RequestParam String desc) {
		Request request = new Request();
		request.setUserId(userId);
		request.setTitle(title);
		request.setStatus(Status.IN_PROGRESS.ordinal());
		request.setLocation(location);
		request.setStartMillis(System.currentTimeMillis());
		request.setDesc(desc);
		requestRepository.save(request);
		return request;
	}
	
	@GetMapping(path="/id")
	public  @ResponseBody Iterable<Request> getRequest(@RequestParam String userId) {
		return requestRepository.findByUserId(userId);
	}
	
	@GetMapping(path="/all")
	public  @ResponseBody Iterable<Request> getAllRequests() {
		return requestRepository.findAll();
	}
	
	@GetMapping(path="/pending")
	public @ResponseBody Iterable<Request> getPendingRequests() {
		return requestRepository.findByStatus(2);
	}
}
