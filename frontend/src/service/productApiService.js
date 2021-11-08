import axios from 'axios';


//do no need token because route is not protected
export function getProducts() {
    return axios.get("/api/products").then(response => response.data)
}



