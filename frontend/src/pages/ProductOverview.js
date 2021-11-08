import useProducts from "../hooks/useProducts";
import {useEffect, useState} from "react";
import Sidebar from "../components/sidebar";
import BottomNavi from "../components/BottomNavi";
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import styled from "styled-components/macro";
import ProductGallery from "../components/ProductGallery";


export default function ProductOverview() {

    const {products, getAllProducts} = useProducts()
    const [searchString, setSearchString] = useState("")

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

    const search = (action) => {
        let string = action.target.value;
        setSearchString(string)
    }

    const handleProducts = products.filter((element) => {
        return element.title.toLowerCase().includes(searchString.toLowerCase())
    })

    return (
        <Box sx={{display: 'flex'}}>
            <style>{'body {background-color:#DDDDDD; position:fixed; width:100%'}</style>
            {renderNavigation()}
            <Wrapper>
                <StyledTextField id="outlined-search" label="Suchen..." type="search" onInput={search}/>
                <ProductGallery products={handleProducts}/>
            </Wrapper>
        </Box>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledTextField = styled(TextField)`
    &&{
      margin: 10px 10%;
    }
`