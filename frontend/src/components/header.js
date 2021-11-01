import styled from "styled-components/macro";
import logo from "../components/images/longsmallwhitepransp.png"
import Button from '@mui/material/Button';

function Header() {
    return (
        <HeaderContainer>
            <Logo src={logo} alt="logo"/>
            <TestButton variant="outlined">Login</TestButton>
        </HeaderContainer>
)
}
export default Header

const HeaderContainer = styled.section`
background-color: #30475E;
height: 75px;
width: 100vw;
display: flex;
align-items: center;
`

const Logo = styled.img`
margin-left: 1.5%;
width: auto;
height: 50%

`

const TestButton = styled(Button)`
&&{
  color: #DDDDDD;
  border-color: #DDDDDD;
  position: absolute;
  right: 1.3%;

  :hover{
    border-color: #F05454;
    color: #F05454;
  }
}
  
`


