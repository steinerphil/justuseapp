import useProducts from "../hooks/useProducts";
import {useEffect} from "react";
import ProductCard from "../components/ProductCard";
import styled from "styled-components/macro";
import Sidebar from "../components/sidebar";
import BottomNavi from "../components/BottomNavi";
import Box from "@mui/material/Box";
import {Toolbar} from "@mui/material";

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
        <Box sx={{display: 'flex'}}>
            <style>{'body {background-color:#DDDDDD;'}</style>
            {renderNavigation()}
                <Toolbar/>
                <CardContainer>
                    {products.map(product => (
                        <ProductCard product={product} key={product.id}/>
                    ))}
                </CardContainer>
        </Box>
    )

}

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;

  @media (max-width: 728px) {
    justify-content: center;
  }
`