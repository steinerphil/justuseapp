import useProducts from "../hooks/useProducts";
import {useEffect} from "react";
import ProductCard from "../components/ProductCard";

export default function ProductOverview(){

    const {products, getAllProducts} = useProducts()

    useEffect(() =>{
        getAllProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(

        <>
            {products.map(product => (
                <ProductCard product={product} key={product.id}/>
            ))}
        </>

    )

}