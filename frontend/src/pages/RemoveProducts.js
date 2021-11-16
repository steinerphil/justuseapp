import useProducts from "../hooks/useProducts";
import TextField from "@mui/material/TextField";
import styled from "styled-components/macro";
import {useEffect, useState} from "react";
import {DataGrid} from "@mui/x-data-grid";

export default function RemoveProducts() {

    const {products, removeProducts} = useProducts()
    const [searchString, setSearchString] = useState("")
    const [selectionModel, setSelectionModel] = useState([]);
    const [tableData, setTableData] = useState([])

    const columns = [
        {field: 'id', headerName: 'ID', width: 200},
        {field: 'title', headerName: 'Produktname', width: 180},
        {field: 'price', headerName: 'Preis', type: 'number', width: 110},
    ];

    const search = (action) => {
        let string = action.target.value;
        setSearchString(string)
    }

    useEffect(() =>
            setTableData(handleProducts)
        // eslint-disable-next-line
        , [products, searchString])

    const handleProducts = products.filter((element) => {
        return element.title.toLowerCase().includes(searchString.toLowerCase())
    })

    const state = tableData.filter((element) => {
        return (!selectionModel.includes(element.id))
    })


    function handleDelete(event) {
        event.preventDefault();

        const requestBody = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            data: {productsToRemove: []}
        }

        for (let i = 0; i < selectionModel.length; i++) {
            const actualProduct = products.filter((element) => element.id.includes(selectionModel[i]))
            requestBody.data.productsToRemove.push({productId: actualProduct[0].id, imageId: actualProduct[0].image.id})
        }

        setTableData(state)

        removeProducts(requestBody)
    }

    return (
        <Wrapper>
            <Headline>Produkt löschen</Headline>
            <Form onSubmit={handleDelete}>
                <TextField
                    label="Produktname"
                    id="outlined-multiline-static"
                    sx={{m: 1, width: '30ch'}}
                    onChange={search}
                    required={false}
                />

                <div style={{height: 400, minWidth: 600, maxWidth: 680}}>
                    <DataGrid
                        rows={tableData}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        onSelectionModelChange={(newSelectionModel) => {
                            setSelectionModel(newSelectionModel);
                        }}
                        selectionModel={selectionModel}
                    />
                </div>
                <button type="submit">delete selected product(s)</button>
            </Form>
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