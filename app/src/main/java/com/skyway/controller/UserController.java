package com.skyway.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.skyway.entity.Login;
import com.skyway.entity.User;
import com.skyway.repository.LoginRepository;
import com.skyway.repository.UserRepository;

@Controller
@RequestMapping(path = "/user")
public class UserController {
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private LoginRepository loginRepository;
	
	@PostMapping(path = "/register")
	public @ResponseBody User registerUser(@RequestParam String fname, @RequestParam String lname, 
			@RequestParam String apt, @RequestParam String phone, @RequestParam String ssn, 
			@RequestParam String email, @RequestParam String userId, @RequestParam String pass, @RequestParam Integer role) {
		User user = new User();
		user.setUserId(userId);
		user.setFirstName(fname);
		user.setLastName(lname);
		user.setAptUnit(apt);
		user.setPhoneNumber(phone);
		user.setSsn(ssn);
		user.setEmail(email);
		user.setRole(role);
		user = userRepository.save(user);
		Login login = new Login(userId, pass);
		loginRepository.save(login);
		return user;
	}
	
	@GetMapping(path = "/fetch")
	public @ResponseBody Optional<User> fetchUser(@RequestParam String userId) {
		return userRepository.findById(userId);
	}
	
	
}
