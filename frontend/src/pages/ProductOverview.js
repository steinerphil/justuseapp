import useProducts from "../hooks/useProducts";
import {useEffect} from "react";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/sidebar";
import BottomNavi from "../components/BottomNavi";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";

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

    function renderImageList() {
        if (window.innerWidth < 679) {
            return ({
                "gridTemplateColumns": "repeat(1, 1fr)",
                "gap": "15px",
                "padding": "0 4%"
            })
        } else if (window.innerWidth > 979) {
            return ({
                "gridTemplateColumns": "repeat(3, 1fr)",
                "gap": "4px",
                "padding": "0"
            })
        } else {
            return ({
                "gridTemplateColumns": "repeat(2, 1fr)",
                "gap": "4px",
                "padding": "0"
            })
        }
    }

    //substract header and if mobile also footer from screenHeight
    function listHeight() {
        if (window.innerWidth > 500) {
            return window.innerHeight - 80
        } else {
            return window.innerHeight - 75 - 75
        }

    }

    return (
        <Box sx={{display: 'flex'}}>
            <style>{'body {background-color:#DDDDDD; position:fixed; width:100%'}</style>
            {renderNavigation()}
            <ImageList style={{
                gridTemplateColumns: renderImageList().gridTemplateColumns,
                gap: renderImageList().gap,
                padding: renderImageList().padding,
            }} sx={{
                width: "auto",
                height: listHeight(),
                margin: "3px",
            }}>
                {products.map(product => (
                    <ProductCard product={product} key={product.id}/>
                ))}
            </ImageList>
        </Box>
    )
}