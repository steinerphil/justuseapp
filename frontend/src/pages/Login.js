import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {useState} from "react";
import Button from "@mui/material/Button";
import styled from "styled-components/macro";

export default function Login() {

    const [values, setValues] = useState({
        username: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    function handleSubmit() {
        console.log(values)
    }

    return (
        <>
                <FormControl sx={{m: 1, width: '25ch'}} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-username">Username</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-username"
                        value={values.username}
                        onChange={handleChange('username')}
                        label="Username"
                    />
                </FormControl>

                <FormControl sx={{m: 1, width: '25ch'}} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <SubmitButton variant="contained" onClick={handleSubmit}>Anmelden</SubmitButton>
        </>
    )
}

const SubmitButton = styled(Button)`
    &&{
      text-transform: none;
    }
`