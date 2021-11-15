import useProducts from "../hooks/useProducts";
import TextField from "@mui/material/TextField";
import styled from "styled-components/macro";
import {useEffect, useState} from "react";
import {Table} from "../components/Table";

export default function DeleteProducts() {

    const {products, getAllProducts} = useProducts()
    const [productData, setProductData] = useState([])

    useEffect(() => {
        getAllProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleChange = (event) => {
        setProductData(
            products.filter((element) => {
                return (element.title.toLowerCase().includes(event.target.value.toLowerCase()))})
        )
    };


    return (
        <Wrapper>
            <Headline>Produkt löschen</Headline>
            <Form>
                <TextField
                    label="Produktnummer"
                    id="outlined-multiline-static"
                    sx={{m: 1, width: '30ch'}}
                    onChange={handleChange}
                    required={true}
                />
            </Form>
            <Table tableData={productData}/>
        </Wrapper>

    )

}

const Headline = styled.p`
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: 400;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: fit-content;
`
const Wrapper = styled.div`

    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 75px;
`