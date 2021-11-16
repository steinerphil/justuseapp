import {useRef, useState} from "react";
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
import styled from "styled-components/macro";

export default function NewProduct() {

    const inputRef = useRef()
    const {saveProduct, renderNavigation} = useProducts()

    const token = localStorage.getItem("token")

    const [values, setValues] = useState({
        title: '',
        description: '',
        amount: '',
        location: '',
        price: '',
        isAvailable: true,
        MAX_RENTAL_CYCLE: '',
    });


    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    function submitProduct(event) {
        event.preventDefault();

        const headerConfig = {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            }
        }
        const formData = new FormData()
        formData.append('productDTO', new Blob([JSON.stringify(values)], {type: "application/json"}));
        formData.append('file', inputRef.current.files[0])

        saveProduct(formData, headerConfig)
    }

    return (
        <Box sx={{display: 'flex'}}>
            {renderNavigation()}
            <Wrapper>
                <Headline>Neues Produkt Anlegen</Headline>
                <Form onSubmit={submitProduct}>

                    <TextField
                        label="Titel"
                        id="outlined-multiline-static"
                        sx={{m: 1, width: '30ch'}}
                        value={values.title}
                        onChange={handleChange('title')}
                        required={true}
                    />

                    <TextField
                        id="outlined-multiline-static"
                        label="Produktbeschreibung"
                        multiline
                        rows={4}
                        sx={{margin: '8px'}}
                        value={values.description}
                        onChange={handleChange('description')}
                        required={true}

                    />

                    <FormControl required={true} sx={{m: 1, width: '30ch'}} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment"
                            placeholder="Anzahl"
                            value={values.amount}
                            onChange={handleChange('amount')}
                            endAdornment={<InputAdornment position="end">Stück</InputAdornment>}

                        />
                    </FormControl>

                    <FormControl required={true} sx={{m: 1, width: '30ch'}} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment"
                            placeholder="max. Mietdauer"
                            value={values.MAX_RENTAL_CYCLE}
                            onChange={handleChange('MAX_RENTAL_CYCLE')}
                            endAdornment={<InputAdornment position="end">Monate</InputAdornment>}

                        />
                    </FormControl>

                    <FormControl required={true} sx={{m: 1, width: '30ch'}} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment"
                            placeholder="Preis"
                            value={values.price}
                            onChange={handleChange('price')}
                            endAdornment={<InputAdornment position="end">€</InputAdornment>}

                        />
                    </FormControl>

                    <FormControl required={true} sx={{m: 1, width: '30ch'}}>
                        <InputLabel id="demo-simple-select-required-label">Standort</InputLabel>
                        <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            value={values.location}
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
                                    value={values.isAvailable}
                                    onChange={handleChange('isAvailable')}>
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
    margin-bottom: 65px;
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