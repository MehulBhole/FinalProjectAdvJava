package com.cdac.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cdac.dto.PropertyDetailsDto;
import com.cdac.entity.PropertyDetails;
import com.cdac.entity.PropertyOwner;
import com.cdac.entity.PropertyOwner.ApprovalStatus;
import com.cdac.exception.ServiceException;
import com.cdac.repository.PropertyDetailsRepository;
import com.cdac.repository.PropertyOwnerRepository;

@Service
public class PropertyOwnerService {
	@Autowired
	private PropertyOwnerRepository propertyOwnerRepository;
	
	@Autowired
	private PropertyDetailsRepository propertyDetailsRepository;
	
	@Autowired
	private PropertyDetailsDto dto;
	
	public int register(PropertyOwner propertyOwner) {
		Optional<PropertyOwner> ownerCheck = propertyOwnerRepository.findByEmail(propertyOwner.getEmail());
		if(!ownerCheck.isPresent()) {
			propertyOwner.setApprovalStatus(ApprovalStatus.PENDING);
			PropertyOwner savedOwner = propertyOwnerRepository.save(propertyOwner);
			return savedOwner.getId();
		}else {
			throw new ServiceException("User already registered");
		}
		
	}
	public PropertyOwner getOwner(int id) {
		return propertyOwnerRepository.findById(id).get();
	}
	public void approvalByHost(PropertyOwner propertyOwner) {
		
			propertyOwner.setApprovalStatus(ApprovalStatus.APPROVED);
			PropertyOwner savedOwner = propertyOwnerRepository.save(propertyOwner);
		
	}
	public void rejectByHost(PropertyOwner propertyOwner) {
		
		propertyOwner.setApprovalStatus(ApprovalStatus.REJECTED);
		PropertyOwner savedOwner = propertyOwnerRepository.save(propertyOwner);
	
}
	
	public PropertyOwner login(String email, String password) {
		Optional<PropertyOwner> ownerLoggedIn = propertyOwnerRepository.findByEmailAndPassword(email, password);
		if(ownerLoggedIn.isPresent()) {
			return ownerLoggedIn.get();
		}else {
			throw new ServiceException("Invalid credentails");
		}
	}

//	public void addPropertyDetails(int ownerId, PropertyDetails propertyDetails, MultipartFile image1, MultipartFile image2, MultipartFile image3, MultipartFile video) {
//        PropertyOwner owner = propertyOwnerRepository.findById(ownerId)
//                .orElseThrow(() -> new ServiceException("Owner not found"));
//
//        propertyDetails.setOwner(owner);
//
//        String image1Path = saveFile(image1);
//        String image2Path = saveFile(image2);
//        String image3Path = saveFile(image3);
//        String videoPath = saveFile(video);
//
//        propertyDetails.setImage1(image1Path);
//        propertyDetails.setImage2(image2Path);
//        propertyDetails.setImage3(image3Path);
//        propertyDetails.setVideo(videoPath);
//
//        propertyDetailsRepository.save(propertyDetails);
//    }
//	
	private String saveFile(MultipartFile file) {
        try {
            // Replace this logic with your actual file storage implementation
            byte[] bytes = file.getBytes();
            String path = "c:/uploads/" + file.getOriginalFilename();
            Files.write(Paths.get(path), bytes);
            return path;
        } catch (IOException e) {
            throw new ServiceException("Failed to save file: " + e.getMessage());
        }
    }
	
	public PropertyDetails getPropertyDetails(int propertyDetailsId, int ownerId) {
        Optional<PropertyDetails> optionalPropertyDetails = propertyDetailsRepository.findById(propertyDetailsId);

        if (optionalPropertyDetails.isPresent()) {
            PropertyDetails propertyDetails = optionalPropertyDetails.get();

            if (propertyDetails.getOwner().getId() == ownerId) {
                return propertyDetails;
            } else {
                throw new ServiceException("Unauthorized: You are not the owner of this property details.");
            }
        } else {
            throw new ServiceException("Property details not found.");
        }
    }
	
	public PropertyDetails getPropertyDetails(int propertyDetailsId) {
        return propertyDetailsRepository.findById(propertyDetailsId)
                .orElseThrow(() -> new ServiceException("Property details not found"));
    }

    public PropertyDetailsDto getPropertyDetailsDto(int propertyDetailsId) {
        PropertyDetails propertyDetails = getPropertyDetails(propertyDetailsId);

        PropertyDetailsDto propertyDetailsDto = new PropertyDetailsDto();
        BeanUtils.copyProperties(propertyDetails, propertyDetailsDto);

        return propertyDetailsDto;
    }
	
	public void deletePropertyDetails(int propertyDetailsId, int ownerId) {
 
        Optional<PropertyDetails> optionalPropertyDetails = propertyDetailsRepository.findById(propertyDetailsId);

        if (optionalPropertyDetails.isPresent()) {
            PropertyDetails propertyDetails = optionalPropertyDetails.get();

            if (propertyDetails.getOwner().getId() == ownerId) {
                propertyDetailsRepository.delete(propertyDetails);
            } else {
                throw new ServiceException("Unauthorized: You are not the owner of this property details.");
            }
        } else {
            throw new ServiceException("Property details not found.");
        }
    }
	
	public void approveOwner(int ownerId) {
        PropertyOwner owner = propertyOwnerRepository.findById(ownerId)
                .orElseThrow(() -> new RuntimeException("Owner not found"));

        if (owner.getApprovalStatus() == ApprovalStatus.PENDING) {
            // Approve the owner
            owner.setApprovalStatus(ApprovalStatus.APPROVED);
            propertyOwnerRepository.save(owner);
        } else {
            // Reject the owner (or handle accordingly)
            throw new ServiceException("Owner has already been approved or rejected.");
        }
    }
}
