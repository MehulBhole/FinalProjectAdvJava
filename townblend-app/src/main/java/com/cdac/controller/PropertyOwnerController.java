package com.cdac.controller;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cdac.dto.LoginStatus;
import com.cdac.dto.PropertyDetailsDto;
import com.cdac.dto.RegistrationStatus;
import com.cdac.dto.Status;
import com.cdac.dto.UserInfo;
import com.cdac.entity.PropertyDetails;
import com.cdac.entity.PropertyOwner;
import com.cdac.exception.ServiceException;
import com.cdac.service.PropertyDetailsService;
import com.cdac.service.PropertyOwnerService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.annotation.JsonInclude;


@RestController
@CrossOrigin
public class PropertyOwnerController {
	@Autowired
	private PropertyOwnerService propertyOwnerService;
	@Autowired
	private PropertyDetailsService propertyDetailsService;
	
	@PostMapping("/ownerregister")
	public RegistrationStatus register(@RequestBody PropertyOwner propertyOwner, Map map) {
		
		try {
			int id = propertyOwnerService.register(propertyOwner);
			
			RegistrationStatus status = new RegistrationStatus();
			
			status.setStatus(true);
			status.setStatusMessage("Owner registered successfully");
			status.setId(id);
			return status;
			
		}catch(ServiceException e) {
			
			RegistrationStatus status = new RegistrationStatus();
			
			status.setStatus(false);
			status.setStatusMessage(e.getMessage());
			
			return status;
		}
		
	}
	
	@PostMapping("/owner-login")
	public LoginStatus login(@RequestBody Map<String, String> loginData) {
		try {
			String email = loginData.get("email");
			String password = loginData.get("password");
			
			PropertyOwner propertyOwner = propertyOwnerService.login(email, password);
			
			LoginStatus status = new LoginStatus();
			status.setId(propertyOwner.getId());
			status.setStatus(true);
			status.setStatusMessage("Login successful");
			
			return status;
			
		}catch(ServiceException e) {
			
			LoginStatus status = new LoginStatus();
			
			status.setStatus(false);
			status.setStatusMessage(e.getMessage());
			
			return status;
		}
	}
		
	 @PostMapping("/addProperty/{id}")
    public ResponseEntity<Status> addDetails(@PathVariable int id , @RequestBody PropertyDetailsDto propertyDto) {
//        try {
//            PropertyDetails propertyDetails = new PropertyDetails();
//            
//        	BeanUtils.copyProperties(propertyDto, propertyDetails);
//            
//        	try {
//    			String fileName = propertyDto.getImage1().getOriginalFilename();
//    			
////    			String fileName2 = propertyDto.getImage2().getOriginalFilename();
////    			String fileName3 = propertyDto.getImage3().getOriginalFilename();
////    			String fileName4= propertyDto.getVideo().getOriginalFilename();
//    			//TODO:here should be the code to generate a unique name for the file before proceeding further
//    		//replace this later
//    			
//    			propertyDetails.setImage1(fileName);
//    			
////    			propertyDetails.setImage2(fileName2);
////    			propertyDetails.setImage3(fileName3);
////    			propertyDetails.setVideo(fileName4);
//    			
//    			
//    			InputStream is1 = propertyDto.getImage1().getInputStream();
////    			
//
//    			FileOutputStream os1 = new FileOutputStream("c:/uploads/" + fileName);
//    			
////    			FileOutputStream os2 = new FileOutputStream("c:/uploads/" + fileName2);
////    			FileOutputStream os3 = new FileOutputStream("c:/uploads/" + fileName3);
////    			FileOutputStream os4 = new FileOutputStream("c:/uploads/" + fileName4);
//    			
//    			FileCopyUtils.copy(is1, os1);
////    			FileCopyUtils.copy(is2, os2);
////    			FileCopyUtils.copy(is3, os3);
////    			FileCopyUtils.copy(is4, os4);
//    		}
//    		catch (IOException e) {
//    			e.printStackTrace();
//    		
//    			
//    		}
		 try {
		   PropertyDetails propertyDetails = new PropertyDetails();
           System.out.println(propertyDto.getRent());
    	BeanUtils.copyProperties(propertyDto, propertyDetails);
        	PropertyOwner propertyOwner = propertyOwnerService.getOwner(id);
        	  propertyDetails.setOwner(propertyOwner);
        	 propertyDetails.setOwnerOriginalId(id);
              propertyDetailsService.addpropertyDetails(propertyDetails);
            
            Status status = new Status();
            status.setStatus(true);
            status.setMessageIfAny("Property details added successfully");
            return new ResponseEntity<>(status, HttpStatus.OK);
            
        } catch (ServiceException e) {
        	
            Status status = new Status();
            status.setStatus(false);
            status.setMessageIfAny(e.getMessage());
            return new ResponseEntity<>(status, HttpStatus.BAD_REQUEST);
        }
    }
	
//	 @GetMapping("/propertyDetails/{propertyDetailsId}")
//	 public ResponseEntity<PropertyDetailsDto> getPropertyDetails(@PathVariable int propertyDetailsId) {
//	     try {
//	         PropertyDetails propertyDetails = propertyOwnerService.getPropertyDetails(propertyDetailsId);
//
//	         // Creating a DTO to avoid exposing entity-specific details
//	         PropertyDetailsDto propertyDetailsDto = new PropertyDetailsDto();
//	         BeanUtils.copyProperties(propertyDetails, propertyDetailsDto);
//
//	         return new ResponseEntity<>(propertyDetailsDto, HttpStatus.OK);
//	     } catch (ServiceException e) {
//	         return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
//	     }
//	 }
//	 @GetMapping("/getownerallpropertydetails/{id}")
//		public List<PropertyDetails> getPropertyById(@PathVariable int id){
//		 System.out.println(id);
//		  PropertyOwner owner = propertyOwnerService.getOwner(id);
//		  List<PropertyDetails> list = propertyDetailsService.findByOwnerId(owner.getId());
////		 List<PropertyDetails> list = propertyDetailsService.findByOwner(owner);
//		 for(PropertyDetails p : list) {
//			 System.out.println(p.getRent());
//		 }
//		 return list;
//	 }
	 
	 
	 
	 //mehul
	 
//	 @GetMapping("/getdetailsbyid/{id}")
//  	public List<PropertyDetails> getPropertyById(@PathVariable int id){
//		System.out.println(id);
//		List<PropertyDetails> list= propertyDetailsService.findByOwnerId(id);
//		  
//		 return list;
//	 }
	 
	 
	 //chatgpt 
	 
	 @GetMapping("/getdetailsbyid/{id}")
	 public ResponseEntity<List<PropertyDetails>> getPropertyById(@PathVariable int id) {
	     System.out.println(id);
	     List<PropertyDetails> list = propertyDetailsService.findByOwnerId(id);
	     return new ResponseEntity<>(list, HttpStatus.OK);
	 }

	 
	 
	 
//	 @GetMapping("/getownerallpropertydetails/{id}")
//	 public ResponseEntity<List<PropertyDetails>> getPropertyById(@PathVariable int id) {
//	     System.out.println(id);
//	     PropertyOwner owner = propertyOwnerService.getOwner(id);
//	     List<PropertyDetails> list = propertyDetailsService.findByOwnerId(owner.getId());
//
//	     // Custom serializer for PropertyDetails
//	     ObjectMapper objectMapper = new ObjectMapper();
//	     objectMapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
//
//	     try {
//	         String json = objectMapper.writeValueAsString(list);
//	         System.out.println(json);
//	     } catch (JsonProcessingException e) {
//	         e.printStackTrace();
//	     }
//
//	     return new ResponseEntity<>(list, HttpStatus.OK);
//	 }

	 
	 
//	 @GetMapping(path = "/getPropertyById/{id}", produces = MediaType.IMAGE_JPEG_VALUE)
//		public byte[] getProfilePic(@PathVariable int id) throws IOException {
//			PropertyDetails pd = propertyDetailsService.findById(id);
//		    return Files.readAllBytes(Paths.get("c:/uploads/" + pd.getImage1()));
//	}
	 
	 @GetMapping("/ownerdata/{id}")
	 public UserInfo getById(@PathVariable int id) {
		 PropertyOwner owner = propertyOwnerService.getOwner(id);
		 UserInfo realOwner = new UserInfo();
		 realOwner.setId(owner.getId());
		 realOwner.setEmail(owner.getEmail());
		 realOwner.setName(owner.getName());
		 realOwner.setCity(owner.getAddress());
		 realOwner.setPhoneNo(owner.getPhoneNo());
		 return realOwner;
	 }
	
	
//	 @PostMapping("/addProperty/{id}")
//	    public ResponseEntity<Status> addDetails(@PathVariable int id, PropertyDetailsDto propertyDto) {
//	        try {
//	            PropertyDetails propertyDetails = new PropertyDetails();
//	            BeanUtils.copyProperties(propertyDto, propertyDetails);
//
//	            try {
//	                // Generate unique names for files
//	                String fileName1 = "image1_" + System.currentTimeMillis() + ".jpg";
//	                String fileName2 = "image2_" + System.currentTimeMillis() + ".jpg";
//	                String fileName3 = "image3_" + System.currentTimeMillis() + ".jpg";
//	                String fileName4 = "video_" + System.currentTimeMillis() + ".mp4";
//
//	                propertyDetails.setImage1(fileName1);
//	                propertyDetails.setImage2(fileName2);
//	                propertyDetails.setImage3(fileName3);
//	                propertyDetails.setVideo(fileName4);
//
//	                // Save files to the specified location
//	                saveFile(propertyDto.getImage1(), fileName1);
//	                saveFile(propertyDto.getImage2(), fileName2);
//	                saveFile(propertyDto.getImage3(), fileName3);
//	                saveFile(propertyDto.getVideo(), fileName4);
//	            } catch (IOException e) {
//	                e.printStackTrace();
//	                throw new ServiceException("Failed to save files.");
//	            }
//
//	            PropertyOwner propertyOwner = propertyOwnerService.getOwner(id);
//	            propertyDetails.setOwner(propertyOwner);
//	            propertyDetailsService.addpropertyDetails(propertyDetails);
//
//	            Status status = new Status();
//	            status.setStatus(true);
//	            status.setMessageIfAny("Property details added successfully");
//	            return new ResponseEntity<>(status, HttpStatus.OK);
//	        } catch (ServiceException e) {
//	            Status status = new Status();
//	            status.setStatus(false);
//	            status.setMessageIfAny(e.getMessage());
//	            return new ResponseEntity<>(status, HttpStatus.BAD_REQUEST);
//	        }
//	    }

//	    @GetMapping("/getFile/{fileName}")
//	    public ResponseEntity<byte[]> getFile(@PathVariable String fileName) throws IOException {
//	        byte[] fileContent = Files.readAllBytes(Paths.get("c:/uploads/" + fileName));
//
//	        HttpHeaders headers = new HttpHeaders();
//	        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
//	        headers.setContentDispositionFormData("attachment", fileName);
//
//	        return new ResponseEntity<>(fileContent, headers, HttpStatus.OK);
//	    }
//
//	    // Helper method to save file
//	    private void saveFile(MultipartFile file, String fileName) throws IOException {
//	        InputStream is = file.getInputStream();
//	        FileOutputStream os = new FileOutputStream("c:/uploads/" + fileName);
//	        FileCopyUtils.copy(is, os);
//	    }
	
	@DeleteMapping("/propertyDetails/{propertyDetailsId}/{ownerId}")
	public ResponseEntity<Status> deletePropertyDetails(@PathVariable int propertyDetailsId, @PathVariable int ownerId) {
	    try {
	        propertyOwnerService.deletePropertyDetails(propertyDetailsId, ownerId);
	        Status status = new Status();
	        status.setStatus(true);
	        status.setMessageIfAny("Details deleted successfully");
	        return new ResponseEntity<>(status, HttpStatus.OK);
	    } catch (ServiceException e) {
	        Status status = new Status();
	        status.setStatus(false);
	        status.setMessageIfAny("Details do not exist!!!");
	        return new ResponseEntity<>(status, HttpStatus.BAD_REQUEST);
	    }
	}
	
	@PostMapping("/{ownerId}/approve")
	public ResponseEntity<Status> approveOwner(@PathVariable int ownerId) {
	    try {
	        propertyOwnerService.approveOwner(ownerId);
	        Status status = new Status();
	        status.setStatus(true);
	        status.setMessageIfAny("Owner approved successfully");
	        return new ResponseEntity<>(status, HttpStatus.OK);
	    } catch (ServiceException e) {
	        Status status = new Status();
	        status.setStatus(false);
	        status.setMessageIfAny(e.getMessage());
	        return new ResponseEntity<>(status, HttpStatus.BAD_REQUEST);
	    }
	}
}
