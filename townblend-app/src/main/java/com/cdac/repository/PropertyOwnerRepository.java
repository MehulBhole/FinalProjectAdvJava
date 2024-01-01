package com.cdac.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.entity.PropertyOwner;
import com.cdac.entity.PropertyOwner.ApprovalStatus;

public interface PropertyOwnerRepository extends JpaRepository<PropertyOwner, Integer> {
	public Optional<PropertyOwner> findByEmail(String email);
	public Optional<PropertyOwner> findByEmailAndPassword(String email, String password);
	 public List<PropertyOwner> findByApprovalStatus(ApprovalStatus approvalStatus);
}
