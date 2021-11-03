import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {useContext, useState} from "react";
import Button from "@mui/material/Button";
import styled from "styled-components/macro";
import {AuthContext} from "../context/AuthProvider";

export default function Login() {

    const {login} = useContext(AuthContext)

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
        const credentials = {username: values.username, password: values.password}
        login(credentials)
    }

    return (
        <LoginContainer>
            <StyledP>Login</StyledP>
            <StyledFormControl sx={{m: 1}} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-username">Benutzername</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-username"
                    value={values.username}
                    onChange={handleChange('username')}
                    label="Benutzername"
                />
            </StyledFormControl>

            <StyledFormControl sx={{m: 1}} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Passwort</InputLabel>
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
                    label="Passwort"
                />
            </StyledFormControl>
            <SubmitButton variant="contained" onClick={handleSubmit}>Anmelden</SubmitButton>
        </LoginContainer>
    )
}

const StyledP = styled.p`
  font-size: 1.6rem;
  line-height: 1.5rem;
  font-weight: 600;

  @media (min-width: 573px) {
    font-size: 1.9rem;
    line-height: 1.75rem;
    margin-top: 1.25rem;
    margin-left: 0;
    margin-right: 0;
  }
`

const SubmitButton = styled(Button)`
  && {
    text-transform: none;
    width: 100%
  }
`

const LoginContainer = styled.div`
  font-family: 'Nunito', sans-serif;
  display: flex;
  flex-direction: column;
  max-width: 45%;
  margin: 10% auto 0 auto;
  align-items: center;
  
  @media(min-width: 1000px){
    width: 450px;
  }
  
  @media(max-width: 680px){
    max-width: 70%;
  }

  @media(max-width: 445px){
    max-width: 87%;
  }
`

const StyledFormControl = styled(FormControl)`
  && {
    margin: 0 0 10% 0;
    width: 100%;
  }

`