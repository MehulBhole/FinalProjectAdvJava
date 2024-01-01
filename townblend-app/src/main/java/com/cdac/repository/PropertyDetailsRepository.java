package com.cdac.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.entity.PropertyDetails;
import com.cdac.entity.PropertyOwner;

public interface PropertyDetailsRepository extends JpaRepository<PropertyDetails, Integer> {
     public List<PropertyDetails> findByOwnerOriginalId(int id);
     
//     public List<PropertyDetails> findByOwnefindrObject(PropertyOwner property);
}
