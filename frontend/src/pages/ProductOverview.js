import useProducts from "../hooks/useProducts";
import {useState} from "react";
import Sidebar from "../components/sidebar";
import BottomNavi from "../components/BottomNavi";
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import styled from "styled-components/macro";
import ProductGallery from "../components/ProductGallery";


export default function ProductOverview() {

    const {products} = useProducts()
    const [searchString, setSearchString] = useState("")

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
            <style>{'body {position:fixed; width:100%}'}</style>
            {renderNavigation()}
            <Wrapper>
                <StyledTextField id="outlined-search" label="Wonach suchst du?" type="search" onInput={search}/>
                <ProductGallery products={handleProducts}/>
            </Wrapper>
        </Box>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 75px;
  
  @media(max-width: 500px){
    margin-top: 47px;
  }
`
const StyledTextField = styled(TextField)`
    &&{
      margin: 10px 10%;
    }
`