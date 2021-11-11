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

    const saveProduct = (product, token, file) => {
        postProduct(product, token, file).then(response => response.data)
    }


    return {getAllProducts, products, saveProduct}
}