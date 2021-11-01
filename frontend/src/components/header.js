import styled from "styled-components/macro";
import logo from "../components/images/longsmallwhitepransp.png"
import Button from '@mui/material/Button';

function Header() {
    return (
        <HeaderContainer>
            <Logo src={logo} alt="logo"/>
            <LoginButton variant="outlined">Login</LoginButton>
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
  @media(min-width: 260px) {
    margin-left: 1.5%;
    width: auto;
    height: 50%
  }
  @media(max-width: 259px){
    visibility: hidden;
    position: absolute;
  }

`

const LoginButton = styled(Button)`
  &&{

    color: #F05454;
    border-color: #F05454;

  :hover{
    border-color: #DDDDDD;
    color: #DDDDDD;
  }
  
  @media(min-width: 260px) {
    position: absolute;
    right: 1.3%;
  }
  
  @media(max-width: 259px){
    margin: auto;
  }
}
  
`


