import TextField from "@mui/material/TextField";
import styled from "styled-components/macro";
import useProducts from "../hooks/useProducts";
import {useEffect, useState} from "react";
import {DataGrid} from "@mui/x-data-grid";
import {useHistory} from "react-router-dom";

export default function EditProduct() {

    const {products, renderNavigation} = useProducts()
    const [searchString, setSearchString] = useState("")
    const [selectionModel, setSelectionModel] = useState([]);
    const [tableData, setTableData] = useState([])
    const history = useHistory();

    const columns = [
        {field: 'id', headerName: 'ID', width: 220},
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

    const handleSubmit = (event) => {
        event.preventDefault()
        selectionModel.length!==0 ? history.push(`/administration/edit/2?id=${selectionModel[0]}`) : alert("Bitte wähle ein Produkt aus.")
    }

    return (
        <Content>
            {renderNavigation()}
            <Wrapper>
                <Headline>Produkt bearbeiten</Headline>
                <Form onSubmit={handleSubmit}>
                    <TextField
                        label="Produktname"
                        id="outlined-multiline-static"
                        sx={{m: 1, width: '30ch'}}
                        onChange={search}
                        required={false}
                    />

                    <div style={{height: 400, maxWidth: 580}}>
                        <DataGrid
                            sx={{width: '100%', maxWidth: 580}}
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
                    <button type="submit">edit selected product</button>
                </Form>
            </Wrapper>
        </Content>
    )
}

const Headline = styled.p`
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: 400;
  align-self: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 580px;
`
const Wrapper = styled.div`
  font-family: 'Nunito', sans-serif;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  justify-content: center;
  margin: 75px 2.5% 0 2.5%;
  width: 100%;
`

const Content = styled.div`
  display: flex;
  justify-content: center;
`