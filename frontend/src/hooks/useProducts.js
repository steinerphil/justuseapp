import {useContext, useState} from 'react'
import {AuthContext} from '../context/AuthProvider'
import {getProducts} from "../service/productApiService";

export default function useProducts() {

    const [products, setProducts] = useState([])
    const {token} = useContext(AuthContext)

    const getAllProducts = () => {
        getProducts()
            .then(data => {
                console.log(data)
                console.log(token)
                setProducts(data)
            })
            .catch(err => console.log(err))
    }


    return {getAllProducts, products}
}