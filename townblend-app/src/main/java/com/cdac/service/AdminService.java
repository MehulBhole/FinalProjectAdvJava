package com.cdac.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.entity.Admin;
import com.cdac.entity.PropertyOwner;
import com.cdac.entity.PropertyOwner.ApprovalStatus;
import com.cdac.repository.AdminRepository;
import com.cdac.repository.PropertyOwnerRepository;

@Service
public class AdminService {
	
	@Autowired
	private AdminRepository adminRepository;
	@Autowired 
	private PropertyOwnerRepository propertyOwnerRepository;
	
	public Admin registerAdmin(Admin admin) {
		return adminRepository.save(admin);
	}
	
	public boolean isAdminExists() {
		return adminRepository.count() > 0;
	}
	
	public boolean validateAdminCredentials(String email, String password) {
		Optional<Admin> adminCheck = adminRepository.findByEmail(email);
		return adminCheck.isPresent() && adminCheck.get().getPassword().equals(password);
	}
	
	public List<PropertyOwner> propertyOwnerForValidation(){
		PropertyOwner pr = new PropertyOwner();
		pr.setApprovalStatus(ApprovalStatus.PENDING);
		List<PropertyOwner> list = propertyOwnerRepository.findByApprovalStatus(pr.getApprovalStatus());
		return list;
	}
	public PropertyOwner validationApproved(int id) {
		return propertyOwnerRepository.findById(id).get();
	}
	public PropertyOwner validationRejected(int id) {
		return propertyOwnerRepository.findById(id).get();
	}
}
