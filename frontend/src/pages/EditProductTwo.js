import {useLocation} from "react-router-dom";
import styled from "styled-components/macro";
import {useEffect, useRef, useState} from "react";
import useProducts from "../hooks/useProducts";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import {InputLabel, MenuItem, RadioGroup, Select} from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export default function EditProductTwo() {
    const [productData, setProductData] = useState({})
    const [newProductData, setNewProductData] = useState({
        title: '',
        description: '',
        amount: '',
        location: '',
        price: '',
        available: null,
        max_RENTAL_CYCLE: '',
    })
    const {getById, renderNavigation} = useProducts()
    const queryString = new URLSearchParams(useLocation().search);
    const currentId = queryString.get("id")
    const inputRef = useRef()

    useEffect(() => {
        getById(currentId).then(data => {
            setProductData(data);
            setNewProductData(data)
            console.log(data)
        })
        // eslint-disable-next-line
    }, [])

    const handleChange = (prop) => (event) => {
        setNewProductData({...newProductData, [prop]: event.target.value});
    };

    function submitProduct(event) {
        event.preventDefault()
        if (productData === newProductData) {
            alert("Es wurden keine Änderungen vorgenommen.")
        } else {
            console.log(newProductData)
        }
    }

    return (
        <Box sx={{display: 'flex'}}>
            {renderNavigation()}
            <Wrapper>
                <Headline>Produkt bearbeiten</Headline>
                <Form onSubmit={submitProduct}>

                    <TextField
                        label="Titel"
                        id="outlined-multiline-static"
                        sx={{m: 1, width: '30ch'}}
                        value={newProductData.title}
                        onChange={handleChange('title')}
                        required={true}
                    />

                    <TextField
                        id="outlined-multiline-static"
                        label="Produktbeschreibung"
                        multiline
                        rows={4}
                        sx={{margin: '8px'}}
                        value={newProductData.description}
                        onChange={handleChange('description')}
                        required={true}
                    />

                    <FormControl required={true} sx={{m: 1, width: '30ch'}} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment"
                            placeholder="Anzahl"
                            value={newProductData.amount}
                            onChange={handleChange('amount')}
                            endAdornment={<InputAdornment position="end">Stück</InputAdornment>}
                        />
                    </FormControl>

                    <FormControl required={true} sx={{m: 1, width: '30ch'}} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment"
                            placeholder="max. Mietdauer"
                            value={newProductData.max_RENTAL_CYCLE}
                            onChange={handleChange('max_RENTAL_CYCLE')}
                            endAdornment={<InputAdornment position="end">Monate</InputAdornment>}
                        />
                    </FormControl>

                    <FormControl required={true} sx={{m: 1, width: '30ch'}} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment"
                            placeholder="Preis"
                            value={newProductData.price}
                            onChange={handleChange('price')}
                            endAdornment={<InputAdornment position="end">€</InputAdornment>}
                        />
                    </FormControl>

                    <FormControl required={true} sx={{m: 1, width: '30ch'}}>
                        <InputLabel id="demo-simple-select-required-label">Standort</InputLabel>
                        <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            value={newProductData.location}
                            onChange={handleChange("location")}
                            label="Standort *"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="MÜNCHEN">München</MenuItem>
                            <MenuItem value="BERLIN">Berlin</MenuItem>
                            <MenuItem value="HAMBURG">Hamburg</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl component="fieldset" sx={{margin: "8px"}}>
                        <FormLabel component="legend">Verfügbar?</FormLabel>
                        <RadioGroup row defaultValue="true"
                                    value={newProductData.available}
                                    onChange={handleChange('available')}>
                            <FormControlLabel value="true" control={<Radio/>} label="Ja" labelPlacement="start"/>
                            <FormControlLabel value="false" control={<Radio/>} label="Nein" labelPlacement="start"/>
                        </RadioGroup>
                    </FormControl>

                    <StyledInput type="file" ref={inputRef}/>
                    <Button type="submit" variant="contained" endIcon={<SendIcon/>}>
                        Speichern
                    </Button>
                </Form>
            </Wrapper>
        </Box>
    )

}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  font-family: 'Nunito', sans-serif;
  display: flex;
  justify-content: center;
  margin-top: 75px;
  padding: 5%;
  flex-direction: column;

  @media (max-width: 500px) {
    margin-top: 47px;
  }
`

const StyledInput = styled.input`

  border: 1px solid;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 5%;
  margin: 8px;
`

const Headline = styled.p`
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: 400;
`