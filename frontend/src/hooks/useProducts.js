import {useState} from 'react'

import {getProducts} from "../service/productApiService";

export default function useProducts() {

    const [products, setProducts] = useState([])

    const getAllProducts = () => {
        getProducts()
            .then(data => {
                setProducts(data)
            })
            .catch(err => console.log(err))
    }


    return {getAllProducts, products}
}