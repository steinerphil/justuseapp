import useProducts from "../hooks/useProducts";
import {useEffect} from "react";
import ProductCard from "../components/ProductCard";
import styled from "styled-components/macro";
import Sidebar from "../components/sidebar";
import BottomNavi from "../components/BottomNavi";

export default function ProductOverview() {

    const {products, getAllProducts} = useProducts()

    useEffect(() => {
        getAllProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function renderNavigation() {
        if (window.innerWidth > 500) {
            return <Sidebar/>
        } else {
            return <BottomNavi/>
        }
    }

    return (
        <>
            <Wrapper>
                <style>{'body {background-color:#DDDDDD;'}</style>
                {renderNavigation()}
                <CardContainer>
                    {products.map(product => (
                        <ProductCard product={product} key={product.id}/>
                    ))}
                </CardContainer>
            </Wrapper>
        </>
    )

}

const Wrapper = styled.div`
  display: flex;
`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;

  @media (max-width: 685px) {
    justify-content: center;
  }
`