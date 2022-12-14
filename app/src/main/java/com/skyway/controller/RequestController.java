package com.skyway.controller;

import java.util.Optional;

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
	
	@GetMapping(path="/allpending")
	public @ResponseBody Iterable<Request> getAllPendingRequests() {
		return requestRepository.findByStatus(2);
	}
	
	@GetMapping(path="/pending")
	public @ResponseBody Iterable<Request> getPendingRequests(@RequestParam String teamId) {
		return requestRepository.findByStatusAndResolvedBy(2, teamId);
	}
	
	@PostMapping(path="/update")
	public @ResponseBody Request updateRequest(@RequestParam Long reqId, @RequestParam String teamId, @RequestParam Integer status, @RequestParam String comments) {
		Optional<Request> requestOpt = requestRepository.findById(reqId);
		if (requestOpt.isPresent()) {
			Request request = requestOpt.get();
			request.setCommentByTeam(comments);
			request.setStatus(status);
			request.setResolvedBy(teamId);
			requestRepository.save(request);
			return request;
		}
		return null;
	}
}
