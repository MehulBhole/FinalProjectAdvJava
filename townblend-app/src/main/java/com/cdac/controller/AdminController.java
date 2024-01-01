package com.cdac.controller;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.service.AdminService;
import com.cdac.service.PropertyOwnerService;
import com.cdac.dto.AdminRespone;
import com.cdac.dto.ApprovalUser;
import com.cdac.entity.Admin;
import com.cdac.entity.PropertyOwner;
import com.cdac.entity.PropertyOwner.ApprovalStatus;
@RestController

@CrossOrigin
public class AdminController {

 @Autowired
 private AdminService adminService;
 @Autowired
 private PropertyOwnerService propertyOwnerService;
 @GetMapping("/admin1")
 public String admin() {
	 return "kiran";
 }

 @PostMapping("/adminregister")
 public AdminRespone registerAdmin(@RequestBody Admin admin) {
     if (adminService.isAdminExists()) {
         return new AdminRespone("Admin already registered.");
     }
     adminService.registerAdmin(admin);
     return new AdminRespone("Admin registered successfully.");
 }

 @PostMapping("/hostlogin")
 public AdminRespone loginAdmin(@RequestBody Map<String, String> credentials) {
     String email = credentials.get("email");
     String password = credentials.get("password");

     if (adminService.validateAdminCredentials(email, password)) {
    
        	AdminRespone adminRespone = new AdminRespone("Admin login successful!");
        	adminRespone.setStatus(true);
         return adminRespone;
     } else {
    	 AdminRespone adminRespone = new AdminRespone("Invalid Credentials!");
     	adminRespone.setStatus(false);
      return adminRespone;
         
     }
 }
 @GetMapping("/hostapproval")
 public  List<PropertyOwner> pendingUser() {
	  List<PropertyOwner> list  =  adminService.propertyOwnerForValidation(); 
	  return list;
  }
 @GetMapping("/hostapprovalbyid/{id}")
 public  void pendingUser(@PathVariable int id) {
	  PropertyOwner propertyOwner =   adminService.validationApproved(id);
	  propertyOwnerService.approvalByHost(propertyOwner);
	 
  }
 @GetMapping("/hostrejectionbyid/{id}")
 public  void rejectedUser(@PathVariable int id) {
	  PropertyOwner propertyOwner =   adminService.validationRejected(id);
	  propertyOwnerService.rejectByHost(propertyOwner);
	 
  }
 
 }

