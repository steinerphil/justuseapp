import axios from 'axios';

const getHeader = () => {
    return {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    }
}

export function getProducts() {
    return axios.get("/api/products").then(response => response.data)
}

export function postProduct(formData, headerConfig) {
    return axios.post("/administration/product/new", formData, headerConfig)
}

export function deleteProduct(requestBody){
    return axios.delete("/administration/product/delete", requestBody)
}

export function getProductById(id){
    return axios.get(`/api/products/${id}`, getHeader())
}

export function editProduct(formData, id, headerConfig){
    return axios.post(`/administration/product/edit/${id}`, formData, headerConfig)
}


