package com.login.application.service;

import org.springframework.stereotype.Service;

import com.login.application.model.Credential;

@Service
public class LoginService {

	public boolean login(Credential credential) {
		
		return credential.getUsername().equals("aditi") && credential.getPassword().equals("user@123");
	}
}
