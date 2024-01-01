import axios from "axios";

export async function sendOwnerData(formData)
{        
    try {
        const response = axios.post("http://localhost:9090/ownerregister",formData);
        return response; 
    }catch(error){
            console.log(error);
    }
                
}
export async function loginOwnerData(formData)
{        
    try {
        const response = axios.post("http://localhost:9090/owner-login",formData);
        return response; 
    }catch(error){
            console.log(error);
    }
                
}
export async function getOwnerById(id)
{        
    try {
        const response = axios.get(`http://localhost:9090/ownerdata/${id}`);
        return response; 
    }catch(error){
            console.log(error);
    }
                
}

export async function sendDataOwner(id,userdata)
{        
    try {
        const response = axios.post(`http://localhost:9090/addProperty/${id}`,userdata);
        return response; 
    }catch(error){
            console.log(error);
    }
                
}

export async function propertyDataFetch(id)
{        
    try {
        const response = axios.get(`http://localhost:9090/getdetailsbyid/${id}`);
        return response; 
    }catch(error){
            console.log(error);
    }
                
}
export async function OwnerDeleteById(propertyid,id)
{        
    try {
        const response = axios.delete(`http://localhost:9090/propertyDetails/${propertyid}/${id}`);
        return response; 
    }catch(error){
            console.log(error);
    }
                
}