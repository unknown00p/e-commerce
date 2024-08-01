import axios from "axios";

async function createCategory() {
    try {
        const url = "http://localhost:8080/api/v1/ecommerce/categories"
        return await axios.post(url,
            {
                "name": "BACKPACK",
            }, {
            headers: {
                "Content-Type": "application/json",
            }, withCredentials: true
        }
        )
    } catch (error) {
        console.log(error);
    }
}

async function getCategories() {
    try {
        const url = "http://localhost:8080/api/v1/ecommerce/categories?page=1&limit=5"
        return await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
            }, withCredentials: true
        }
        )
    } catch (error) {
        console.log(error);
    }
}

export {  createCategory, getCategories }