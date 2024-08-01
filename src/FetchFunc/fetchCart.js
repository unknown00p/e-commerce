import axios from "axios";

async function addToCart(productId,quantity) {
    try {
        const api = `http://localhost:8080/api/v1/ecommerce/cart/item/${productId}`
        return await axios.post(api,{
            quantity: quantity
        },{
            headers: {
                "Content-Type": "application/json",
            },withCredentials:true
        })
    } catch (error) {
        console.log(error);
    }
}

async function getUserCart(params) {
    try {
        const api = "http://localhost:8080/api/v1/ecommerce/cart"
        return await axios.get(api,{
            headers: {
                "Content-Type": "application/json",
            },withCredentials:true
        })
    } catch (error) {
        
    }
}

export { addToCart,getUserCart }