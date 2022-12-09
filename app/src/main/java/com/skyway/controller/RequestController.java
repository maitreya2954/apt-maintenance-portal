package com.skyway.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.skyway.entity.Request;
import com.skyway.repository.RequestRepository;

@Controller
@RequestMapping(path = "/request")
public class RequestController {
	
	@Autowired
	RequestRepository requestRepository;
	
	@PostMapping(path = "/create")
	public @ResponseBody Request addRequest(@RequestParam String userId, @RequestParam Integer location, @RequestParam Integer status) {
		Request request = new Request();
		request.setUserId(userId);
		request.setStatus(status);
		request.setLocation(location);
		request.setStartMillis(System.currentTimeMillis());
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
}
