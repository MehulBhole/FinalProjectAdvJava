package com.cdac.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.entity.PropertyDetails;
import com.cdac.entity.PropertyOwner;
import com.cdac.repository.PropertyDetailsRepository;

@Service
public class PropertyDetailsService {

	@Autowired
	private PropertyDetailsRepository propertyDetailsRepository;
	
	public void addpropertyDetails(PropertyDetails propertyDetails) {
		propertyDetailsRepository.save(propertyDetails);
	}
	public PropertyDetails findById(int id) {
		return propertyDetailsRepository.findById(id).get();
		}
	public List<PropertyDetails> findByOwnerId(int id){
		return propertyDetailsRepository.findByOwnerOriginalId(id);
	}
	
//	public List<PropertyDetails> findByOwner(PropertyOwner property){
//		return propertyDetailsRepository.findByOwnerObject(property);
//	}
	
}
