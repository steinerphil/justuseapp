import useProducts from "../hooks/useProducts";
import TextField from "@mui/material/TextField";
import styled from "styled-components/macro";
import {useState} from "react";
import {Table} from "../components/Table";

export default function RemoveProducts() {

    const {products, removeProduct} = useProducts()
    const [productData, setProductData] = useState([])
    const [selectionModel, setSelectionModel] = useState([]);

    const handleChange = (event) => {
        setProductData(
            products.filter((element) => {
                return (element.title.toLowerCase().includes(event.target.value.toLowerCase()))
            })
        )
    };

    function handleDelete() {

        let requestBody = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            data: {productsToRemove: []}
        }

        for (let i = 0; i < selectionModel.length; i++) {
            requestBody.data.productsToRemove.push(selectionModel[i])
        }
        removeProduct(requestBody)
    }


    return (
        <Wrapper>
            <Headline>Produkt löschen</Headline>
            <Form>
                <TextField
                    label="Produktname"
                    id="outlined-multiline-static"
                    sx={{m: 1, width: '30ch'}}
                    onChange={handleChange}
                    required={true}
                />
            </Form>
            <Table tableData={productData} selectionModel={selectionModel} setSelectionModel={setSelectionModel}/>
            <button onClick={handleDelete}>delete selected product(s)</button>
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