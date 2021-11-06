import useProducts from "../hooks/useProducts";
import {useEffect} from "react";
import ProductCard from "../components/ProductCard";
import styled from "styled-components/macro";

export default function ProductOverview(){

    const {products, getAllProducts} = useProducts()

    useEffect(() =>{
        getAllProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(

        <Wrapper>
            <style>{'body {background-color:#DDDDDD;'}</style>
            {products.map(product => (
                <ProductCard product={product} key={product.id}/>
            ))}
        </Wrapper>

    )

}

const Wrapper = styled.div`
  display: flex;
`