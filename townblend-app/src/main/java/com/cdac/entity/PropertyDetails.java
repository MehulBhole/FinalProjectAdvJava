package com.cdac.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Id;


@Entity
@Table(name="PropertyDetails")
public class PropertyDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String rentalType; 
    private String furnished; 
    private long rent;
    private int ownerOriginalId;
    public int getOwnerOriginalId() {
		return ownerOriginalId;
	}

	public void setOwnerOriginalId(int ownerOriginalId) {
		this.ownerOriginalId = ownerOriginalId;
	}

	public long getRent() {
		return rent;
	}

	public void setRent(long rent) {
		this.rent = rent;
	}

	private String address;
//    private String image1;
//    private String image2;
//    private String image3;
//    private String video;
    
    public String getRentalType() {
		return rentalType;
	}

	public void setRentalType(String rentalType) {
		this.rentalType = rentalType;
	}

	public String getFurnished() {
		return furnished;
	}

	public void setFurnished(String furnished) {
		this.furnished = furnished;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

//	public String getImage1() {
//		return image1;
//	}
//
//	public void setImage1(String image1) {
//		this.image1 = image1;
//	}
//
//	public String getImage2() {
//		return image2;
//	}
//
//	public void setImage2(String image2) {
//		this.image2 = image2;
//	}
//
//	public String getImage3() {
//		return image3;
//	}
//
//	public void setImage3(String image3) {
//		this.image3 = image3;
//	}
//
//	public String getVideo() {
//		return video;
//	}
//
//	public void setVideo(String video) {
//		this.video = video;
//	}
	
	@ManyToOne
	@JoinColumn(name="propertyOwner_id")
	@JsonBackReference
	private PropertyOwner owner;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public PropertyOwner getOwner() {
		return owner;
	}

	public void setOwner(PropertyOwner owner) {
		this.owner = owner;
	}

}
