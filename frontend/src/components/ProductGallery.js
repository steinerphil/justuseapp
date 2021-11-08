import ProductCard from "./ProductCard";
import ImageList from "@mui/material/ImageList";

export default function ProductGallery({products}) {

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

    //subtract header, searchbar and if mobile also footer from screenHeight
    function listHeight() {
        if (window.innerWidth > 500) {
            return window.innerHeight-80-66-10
        } else {
            return window.innerHeight-75-43-66
        }

    }

    return(<ImageList style={{
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
    </ImageList>)

}