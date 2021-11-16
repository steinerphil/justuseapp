import {useEffect, useState} from 'react'
import {deleteProduct, getProducts, postProduct} from "../service/productApiService";
import Sidebar from "../components/sidebar";
import BottomNavi from "../components/BottomNavi";

export default function useProducts() {

    const [products, setProducts] = useState([])

    const getAllProducts = () => {
        getProducts()
            .then(data => {
                setProducts(data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => getAllProducts(), [])

    const saveProduct = (formData, headerConfig) => {
        postProduct(formData, headerConfig)
            .then((response) => response.data)
            .catch(console.error)
    }

    const removeProducts = (requestBody) => {
        deleteProduct(requestBody)
    }

    function renderNavigation() {
        if (window.innerWidth > 500) {
            return <Sidebar/>
        } else {
            return <BottomNavi/>
        }
    }


    return {getAllProducts, products, saveProduct, renderNavigation, removeProducts}
}