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

export function deleteProduct(urlParams){
    return axios.delete("/administration/product/delete" + urlParams, getHeader())
}


