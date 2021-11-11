import axios from 'axios';

// const getHeader = (token) => {
//     return {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     }
// }

//do no need token because route is not protected
export function getProducts() {
    return axios.get("/api/products").then(response => response.data)
}

export function postProduct(formData, token, config) {
    return axios.post("/administration/product/new", formData, config)

}


