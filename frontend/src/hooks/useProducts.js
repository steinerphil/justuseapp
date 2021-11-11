import {useState} from 'react'
import {getProducts, postProduct} from "../service/productApiService";

export default function useProducts() {

    const [products, setProducts] = useState([])

    const getAllProducts = () => {
        getProducts()
            .then(data => {
                setProducts(data)
            })
            .catch(err => console.log(err))
    }

    const saveProduct = (formData, token, config) => {
        postProduct(formData, token, config)
            .then((response) => response.data)
            .then((data) => {
                console.log(data.id)
                console.log(data.image.url)
            })
            .catch(console.error)
    }


    return {getAllProducts, products, saveProduct}
}