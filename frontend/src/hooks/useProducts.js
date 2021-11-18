import {useEffect, useState} from 'react'
import {deleteProduct, getProductById, getProducts, postProduct, editProduct} from "../service/productApiService";
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

    const getById = (id) => {
        return getProductById(id).then(res => res.data)
    }

    useEffect(() => getAllProducts(), [])

    const saveProduct = (formData, headerConfig) => {
        postProduct(formData, headerConfig)
            .then((response) => response.data)
            .catch(err => console.log(err))
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

    const editProductService = (formData, id, headerConfig) => {
        editProduct(formData, id, headerConfig)
            .then(res => res.data)
            .catch(err => console.log(err))
    }


    return {getAllProducts, products, saveProduct, renderNavigation, removeProducts, getById, editProductService}
}