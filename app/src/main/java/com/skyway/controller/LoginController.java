package com.skyway.controller;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.HttpClientErrorException;

import com.skyway.entity.Login;
import com.skyway.entity.User;
import com.skyway.repository.LoginRepository;
import com.skyway.repository.UserRepository;

@CrossOrigin
@Controller
@RequestMapping(path = "/portal")
public class LoginController {
	
	@Autowired
	private LoginRepository loginRepository;
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping(path = "/login")
	public @ResponseBody User loginUser(@RequestParam String userid, @RequestParam String pass) {
		Optional<Login> loginEntry = loginRepository.findById(userid);
		if (loginEntry.isPresent()) {
			Login login = loginEntry.get();
			if (login.getPassword().equals(pass)) {
				Optional<User> userEntry = userRepository.findById(userid);
				if (userEntry.isPresent()) {
					return userEntry.get();
				}
			} else {
				throw new HttpClientErrorException(HttpStatusCode.valueOf(401));
			}
		}
		throw new HttpClientErrorException(HttpStatusCode.valueOf(404));
	}
}
