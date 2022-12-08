package com.skyway.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.skyway.entity.Login;
import com.skyway.repository.LoginRepository;


@Controller
@RequestMapping(path = "/portal")
public class LoginController {
	
	private LoginRepository loginRepository;

	@GetMapping(path = "/login")
	public @ResponseBody String loginUser() {
		return "This is login page";
	}
}
