package com.login.application.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.login.application.model.Credential;
import com.login.application.service.LoginService;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {
	
	@Autowired
	private LoginService loginService;

	@PostMapping("login")
	public ResponseEntity<Map<String, String>> login(@RequestBody Credential credentials) {
	    Map<String, String> response = new HashMap<>();
	    boolean success = loginService.login(credentials);

	    response.put("message", success ? "Logged In" : "Login Failed");

	    return new ResponseEntity<>(response, success ? HttpStatus.OK : HttpStatus.UNAUTHORIZED);
	}

}
