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

export function postProduct(product, token, file) {
    const formData = new FormData()
    formData.append("productDTO", new Blob([JSON.stringify(product)], {type: "application/json"}))
    formData.append("file", file)
    return axios.post("/administration/product/new", product, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
        }
    })
}


