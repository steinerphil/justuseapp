import styled from "styled-components/macro";
import logo from "../components/images/longsmallwhitepransp.png"
import Button from '@mui/material/Button';
import {useHistory} from "react-router-dom";

function Header() {

    const history = useHistory()

    return (
        <HeaderContainer>
            <Logo src={logo} onClick={() => history.push("/")} alt="logo"/>
            <ButtonContainer>
                <LoginButton variant="outlined" onClick={() => history.push("/login")}>Login</LoginButton>
            <SearchButton variant="outlined" onClick={() => history.push("/products/overview")}>Produktsuche</SearchButton>
            </ButtonContainer>
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

const SearchButton = styled(Button)`
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


