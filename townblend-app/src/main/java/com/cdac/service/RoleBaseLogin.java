package com.cdac.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.repository.PropertyOwnerRepository;
import com.cdac.repository.UserRepository;

@Service
public class RoleBaseLogin {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private PropertyOwnerRepository propertyOwnerRepository;
	
	public int roleBaseLogin(String email) {
		
		return 0;
	}
}
