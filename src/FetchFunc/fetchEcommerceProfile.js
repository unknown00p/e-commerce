import axios from "axios";

async function getUserProfile(params) {
    try {
        const url = "http://localhost:8080/api/v1/ecommerce/profile"

        return await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
            }, withCredentials: true
        })
    } catch (error) {
        console.log(error);
    }
}

async function eCommerceProfile(params) {
    try {
        const api = "http://localhost:8080/api/v1/ecommerce/profile"
        return await axios.get(api,{
            headers:{
                "Content-Type": "application/json",
            },withCredentials:true
        })
    } catch (error) {
        console.log(error);        
    }
}

export { eCommerceProfile, getUserProfile }