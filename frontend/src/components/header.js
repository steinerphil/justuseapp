import styled from "styled-components/macro";
import logo from "../components/images/longsmallwhitepransp.png"
import Button from '@mui/material/Button';
import {useHistory} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/AuthProvider";

function Header() {

    const history = useHistory()
    const {logout} = useContext(AuthContext)


    function loadButtons() {
        if (!localStorage.getItem("token")) {
            return (
                <ButtonContainer>
                    <LoginButton variant="outlined" onClick={() => history.push("/login")}>Login</LoginButton>
                    <WhiteButton variant="outlined"
                                 onClick={() => history.push("/products/overview")}>Produktsuche</WhiteButton>
                </ButtonContainer>
            )
        } else if (localStorage.getItem("token") && history.location.pathname === "/") {
            return (
                <ButtonContainer>
                    <WhiteButton variant="outlined"
                                 onClick={() => history.push("/products/overview")}>Produktsuche</WhiteButton>
                    <WhiteButton variant="outlined"
                                 onClick={() => {
                                     logout()
                                 }}>Logout</WhiteButton>
                </ButtonContainer>
            )
        } else {
            return (
                <ButtonContainer>
                    <WhiteButton variant="outlined"
                                 onClick={() => {
                                     logout()
                                 }}>Logout</WhiteButton>
                </ButtonContainer>
            )
        }
    }

    return (
        <HeaderContainer>
            <Logo src={logo} onClick={() => history.push("/")} alt="logo"/>
            {loadButtons()}
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.section`
  background-color: #30475E;
  height: 75px;
  display: flex;
  align-items: center;
  padding: 0 2%;
`

const Logo = styled.img`
  @media (min-width: 260px) {
    width: auto;
    height: 50%
  }
  @media (max-width: 360px) {
    display: none;
  }

`

const LoginButton = styled(Button)`
  && {
    text-transform: none;
    color: #F05454;
    border-color: #F05454;
    margin-left: 3%;
    order: 2;

    :hover {
      border-color: #F57575FF;
      color: #F57575FF;
    }

    @media (min-width: 573px) {
      display: none;
    }
  }

`

const WhiteButton = styled(Button)`
  && {
    text-transform: none;
    color: #DDDDDD;
    border-color: #DDDDDD;
    margin-left: 3%;
    order: 1;

    :hover {
      border-color: #9E9D9DFF;
      color: #9E9D9DFF;
    }

    @media (min-width: 573px) {
      display: none;
    }
  }

`

const ButtonContainer = styled.div`
  margin-left: auto;
  display: flex;
`


