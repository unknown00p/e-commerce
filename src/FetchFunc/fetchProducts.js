import axios from "axios";

async function createProducts(data) {

    try {
        const url = "http://localhost:8080/api/v1/ecommerce/products"

        const formData = new FormData()
        formData.append('name', data.productName)
        formData.append('description', data.desc)
        formData.append('price', data.price)
        formData.append('category', data.category)
        formData.append('mainImage', data.mainImage)
        formData.append("stock", data.quantity)
        data.subImages.map((subImage) => {
            formData.append('subImages', subImage)
        })

        return await axios.post(url, formData, {
            headers: {
                "content-type": "multipart/form-data"
            }, withCredentials: true
        })
    } catch (error) {
        console.log(error)
    }
}

async function getAllProducts(params) {
    try {
        const api = "http://localhost:8080/api/v1/ecommerce/products?page=1&limit=10"
        return await axios.get(api, {
            headers: {
                "Content-Type": "application/json",
            }, withCredentials: true
        })
    } catch (error) {
        console.log(error);
    }
}

async function getProduct(productId) {
    // console.log(productId);
    try {
        const api = `http://localhost:8080/api/v1/ecommerce/products/${productId}`

        return await axios.get(api,
            {
                headers: {
                    "Content-Type": "application/json",
                }, withCredentials: true
            }
        )
    } catch (error) {
        console.log(error);
    }
}

async function getProductsByCategory(categoryId) {
    console.log(categoryId);
    try {
        const api = `http://localhost:8080/api/v1/ecommerce/products/category/${categoryId}?page=1&limit=10`
    
        return await axios.get(api,
            {
                headers: {
                    "Content-Type": "application/json",
                },withCredentials:true
            }
        )
    } catch (error) {
        console.log(error);
    }
}

export { createProducts, getAllProducts, getProduct,getProductsByCategory }