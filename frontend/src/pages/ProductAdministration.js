import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import {useState} from "react";
import {InputLabel, MenuItem, RadioGroup, Select} from "@mui/material";
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import useProducts from "../hooks/useProducts";


export default function ProductAdministration() {

    const token = localStorage.getItem("token")
    const {saveProduct} = useProducts()

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

    function submitProduct() {
        saveProduct(values, token)
    }

    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap'}}>

            <form onSubmit={submitProduct}>

                <TextField
                    label="Titel"
                    id="outlined-multiline-static"
                    sx={{m: 1, width: '25ch'}}
                    value={values.title}
                    onChange={handleChange('title')}
                    required={true}
                />

                <TextField
                    id="outlined-multiline-static"
                    label="Produktbeschreibung"
                    multiline
                    rows={4}
                    value={values.description}
                    onChange={handleChange('description')}
                    required={true}

                />

                <FormControl required={true} sx={{m: 1, width: '25ch'}} variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment"
                        placeholder="Anzahl"
                        value={values.amount}
                        onChange={handleChange('amount')}
                        endAdornment={<InputAdornment position="end">Stück</InputAdornment>}

                    />
                </FormControl>

                <FormControl required={true} sx={{m: 1, width: '25ch'}} variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment"
                        placeholder="max. Mietdauer"
                        value={values.MAX_RENTAL_CYCLE}
                        onChange={handleChange('MAX_RENTAL_CYCLE')}
                        endAdornment={<InputAdornment position="end">Monate</InputAdornment>}

                    />
                </FormControl>

                <FormControl required={true} sx={{m: 1, width: '25ch'}} variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment"
                        placeholder="Preis"
                        value={values.price}
                        onChange={handleChange('price')}
                        endAdornment={<InputAdornment position="end">€</InputAdornment>}

                    />
                </FormControl>

                <FormControl required={true} sx={{m: 1, width: '25ch'}}>
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

                <FormControl component="fieldset">
                    <FormLabel component="legend">Verfügbar?</FormLabel>
                    <RadioGroup row defaultValue="true"
                                value={values.isAvailable}
                                onChange={handleChange('isAvailable')}>
                        <FormControlLabel value="true" control={<Radio/>} label="Ja" labelPlacement="start"/>
                        <FormControlLabel value="false" control={<Radio/>} label="Nein" labelPlacement="start"/>
                    </RadioGroup>
                </FormControl>

                <Button type="submit" variant="contained" endIcon={<SendIcon/>}>
                    Speichern
                </Button>
            </form>
            <button onClick={()=> console.log(token)}>token</button>
        </Box>
    )
}