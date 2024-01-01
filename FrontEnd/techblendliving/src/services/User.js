import axios from "axios";

export async function sendUserData(formData)
{        
    try {
        const response = axios.post("http://localhost:9090/register",formData);
        return response; 
    }catch(error){
            console.log(error);
    }
                
}
export async function sendLoginData(userLogin){
    try {
        const response  = axios.post("http://localhost:9090/login",userLogin);
        return response;
    } catch (error) {
        console.log(error);
    }
}
export async function fetchById(userId){
    try {
        const response  = axios.get(`http://localhost:9090/userdetails/${userId}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}