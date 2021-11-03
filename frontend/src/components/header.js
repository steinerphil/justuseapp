import styled from "styled-components/macro";
import logo from "../components/images/longsmallwhitepransp.png"
import Button from '@mui/material/Button';
import {useHistory} from "react-router-dom";

function Header() {

    const history = useHistory()

    return (
        <HeaderContainer>
            <Logo src={logo} onClick={() => history.push("/")} alt="logo"/>
            <LoginButton variant="outlined" onClick={() => history.push("/login")}>Login</LoginButton>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.section`
  background-color: #30475E;
  height: 75px;
  display: flex;
  align-items: center;
`

const Logo = styled.img`
  @media (min-width: 260px) {
    margin-left: 1.5%;
    width: auto;
    height: 50%
  }
  @media (max-width: 259px) {
    display: none;
  }

`

const LoginButton = styled(Button)`
  && {

    color: #F05454;
    border-color: #F05454;

    :hover {
      border-color: #DDDDDD;
      color: #DDDDDD;
    }

    @media (min-width: 260px) {
      position: absolute;
      right: 1.3%;
    }

    @media (max-width: 259px) {
      margin: auto;
    }
  }

`


