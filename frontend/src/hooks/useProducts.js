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

    const saveProduct = (product, token) => {
        postProduct(product, token).then(response => response.data)
    }


    return {getAllProducts, products, saveProduct,}
}