import phone from "../components/images/empty_phone.png"
import styled from "styled-components/macro";
import {Paper} from "@mui/material";
import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import Filter3Icon from '@mui/icons-material/Filter3';
import ScreenSearchDesktopTwoToneIcon from '@mui/icons-material/ScreenSearchDesktopTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import AssignmentTurnedInTwoToneIcon from '@mui/icons-material/AssignmentTurnedInTwoTone';
import Button from "@mui/material/Button";
import {useHistory} from "react-router-dom";

export default function Homepage() {

    const history = useHistory()

    return (
        <Container>
            <FirstSection>
                <Heading>
                    <H2>Mieten statt kaufen.</H2>
                    <PFirst>Die beste Art wie du Geld, Zeit und Platz sparst
                        und nebenbei zur Reduzierung der Müllproduktion beiträgst.
                    </PFirst>
                    <SearchButton variant="outlined" onClick={() => history.push("/products/overview")}>Produktsuche</SearchButton>
                    {!localStorage.getItem("token") && <LoginButton variant="outlined" onClick={() => history.push("/login")}>Login</LoginButton>}
                </Heading>
                <Phone src={phone} alt="smartphone"/>
            </FirstSection>
            <SecondSection>
                <SecondHeading>
                    <PSecond>So geht es</PSecond>
                    <PThird>
                        In nur 3 Schritten kannst du unkompliziert
                        <br/>
                        ein hochwertiges Produkt bei JUSTUSE mieten.
                    </PThird>
                </SecondHeading>
                <Paperrow>
                    <Papers elevation={5}>
                        <Filter1Icon/>
                        <PInPaper>Produkt in unserem Webstore finden.</PInPaper>
                        <IconDiv>
                            <SearchIcon/>
                        </IconDiv>
                    </Papers>
                    <Papers elevation={5}>
                        <Filter2Icon/>
                        <PInPaper>Anmelden und auf Jetzt Mieten klicken.</PInPaper>
                        <IconDiv>
                            <ShoppingIcon/>
                        </IconDiv>
                    </Papers>
                    <Papers elevation={5}>
                        <Filter3Icon/>
                        <PInPaper>Produkt liefern lassen oder selbst abholen.</PInPaper>
                        <IconDiv>
                            <FinishIcon/>
                        </IconDiv>
                    </Papers>
                </Paperrow>
            </SecondSection>
        </Container>

    )
}

const Container = styled.div`
  font-family: 'Nunito', sans-serif;
`

const FirstSection = styled.section`
  display: flex;
  flex-direction: row;
  background-color: #30475E;
  color: #DDDDDD;
  padding: 7%;
`

const Heading = styled.div`
  order: 2;
  position: relative;
  top: 1rem;
  padding: 5%;
  
  @media(min-width: 600px) and (max-width: 767px){
    padding: 0 5% 5% 5%;
  }
`

const H2 = styled.h2`
  margin-top: 0;
  margin-bottom: auto;
  letter-spacing: -.025em;
  line-height: 2.5rem;
  font-weight: 800;

  @media (min-width: 768px) {
    font-size: 3.75rem;
    line-height: 1;
  }

  @media (max-width: 767px) {
    font-size: 3rem;
    line-height: 1;
  }
`

const PFirst = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
    margin-top: 1.25rem;
    margin-left: 0;
    margin-right: 0;
  }

  @media (max-width: 767px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
    max-width: 36rem;
    margin-top: 1.25rem;
  }

  @media (min-width: 930px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
    margin: 1.25rem 0 8.5% 0;

  }
`

const Phone = styled.img`
  order: 1;
  max-width: 100%;
  width: 30%;
  transform: rotate(-5deg);

  @media (max-width: 572px) {
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
    font-size: 1.15rem;
    font-weight: 400;

    :hover {
      border-color: #F57575FF;
      color: #F57575FF;
    }

    @media (max-width: 572px) {
      display: none;
    }
  }

`

const SearchButton = styled(Button)`
  && {
    text-transform: none;
    color: #DDDDDD;
    border-color: #DDDDDD;
    order: 1;
    font-size: 1.15rem;
    font-weight: 400;

    :hover {
      border-color: #9E9D9DFF;
      color: #9E9D9DFF;
    }
    @media (max-width: 572px) {
      display: none;
    }
  }

`


const SecondSection = styled.section`
  background-color: #DDDDDD;
  padding: 7%;
`

const SecondHeading = styled.div`
  width: fit-content;
  margin: 0 auto 7% auto;
  color: #222831;
  text-align: center;
`

const PSecond = styled.p`
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

const PThird = styled.p`
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: 400;
`

const Paperrow = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 700px) {
    flex-direction: row;
  }

  @media (max-width: 699px) {
    flex-direction: column;
    align-items: center;
  }
`

const Papers = styled(Paper)`
  && {
    height: 180px;
    width: 180px;
    margin: 3% 0;
    padding: 2%;

    @media (min-width: 825px) {
      margin: 0 4%;
    }

    @media (min-width: 700px) and (max-width: 824px) {
      margin: 0 2%;
    }

`

const PInPaper = styled.p`
  position: relative;
  text-align: center;
`

const IconDiv = styled.div`
  position: relative;
  text-align: center;
`
const SearchIcon = styled(ScreenSearchDesktopTwoToneIcon)`
  && {
    width: 35px;
    height: auto;
  }

`
const ShoppingIcon = styled(ShoppingCartTwoToneIcon)`
  && {
    width: 35px;
    height: auto;
  }
`
const FinishIcon = styled(AssignmentTurnedInTwoToneIcon)`
  && {
    width: 35px;
    height: auto;
  }
`