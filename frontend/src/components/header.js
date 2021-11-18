import styled from "styled-components/macro";
import logo from "../components/images/longsmallwhitepransp.png"
import Button from '@mui/material/Button';
import {useHistory} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/AuthProvider";
import IconButton from "@mui/material/IconButton";
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';

function Header() {

    const history = useHistory()
    const {logout} = useContext(AuthContext)

    function handleHeaderPosition() {
        return history.location.pathname !== "/";
    }


    function loadButtons() {
        if (!localStorage.getItem("token") && history.location.pathname === "/products/overview") {
            return (
                <ButtonContainer>
                    <LoginButton variant="outlined" onClick={() => history.push("/login")}>Login</LoginButton>
                </ButtonContainer>
            )
        } else if (!localStorage.getItem("token") && history.location.pathname !== "/products/overview") {
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
                    <LogoutButton variant="outlined"
                                  onClick={() => {
                                      logout()
                                  }}>Logout</LogoutButton>
                    <IconButton aria-label="edit" sx={{color: '#F05454'}}
                                onClick={() => history.push("/administration")}>
                        <SettingsTwoToneIcon/>
                    </IconButton>
                </ButtonContainer>
            )
        } else {
            return (
                <ButtonContainer>
                    <LogoutButton variant="outlined"
                                  onClick={() => {
                                      logout()
                                  }}>Logout</LogoutButton>
                    <IconButton aria-label="edit" sx={{color: '#F05454'}}
                                onClick={() => history.push("/administration")}>
                        <SettingsTwoToneIcon/>
                    </IconButton>
                </ButtonContainer>
            )
        }
    }

    return (
        <HeaderContainer positionFixed={handleHeaderPosition()}>
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
  position: ${props => (props.positionFixed ? "fixed" : "relative")};
  padding: 0 2%;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;

  @media (max-width: 500px) {
    height: 47px;
  }
`

const Logo = styled.img`
  width: auto;
  @media (min-width: 500px) {
    height: 50%
  }
  @media (max-width: 330px) {
    display: none;
  }
  @media (min-width: 330px) and (max-width: 500px) {
    height: 70%;
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
const LogoutButton = styled(Button)`
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
  }
`

const ButtonContainer = styled.div`
  margin-left: auto;
  display: flex;
`


