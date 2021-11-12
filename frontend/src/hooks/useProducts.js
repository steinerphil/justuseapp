import {useState} from 'react'
import {getProducts, postProduct} from "../service/productApiService";
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

    const saveProduct = (formData, headerConfig) => {
        postProduct(formData, headerConfig)
            .then((response) => response.data)
            .then((data) => {
                console.log(data.id)
                console.log(data.image.url)
            })
            .catch(console.error)
    }

    function renderNavigation() {
        if (window.innerWidth > 500) {
            return <Sidebar/>
        } else {
            return <BottomNavi/>
        }
    }


    return {getAllProducts, products, saveProduct, renderNavigation}
}