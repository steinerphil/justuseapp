import axios from 'axios';

// const getHeader = (token) => {
//     return {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     }
// }

export function getProducts() {
    return axios.get("/api/products").then(response => response.data)
}

export function postProduct(formData, headerConfig) {
    return axios.post("/administration/product/new", formData, headerConfig)

}


