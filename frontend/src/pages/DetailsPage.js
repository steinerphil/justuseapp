import useProducts from "../hooks/useProducts";
import {useParams} from "react-router-dom";
import styled from "styled-components/macro";
import {useEffect, useState} from "react";
import Button from '@mui/material/Button';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import FormControl from "@mui/material/FormControl";
import {MenuItem, Select} from "@mui/material";

export default function DetailsPage() {

    const {renderNavigation, getById} = useProducts();
    const {actualProductId} = useParams();
    const [product, setProduct] = useState({
        title: '',
        description: '',
        amount: 0,
        location: '',
        price: '',
        available: null,
        maxRentalCycle: '',
        image: {
            id: '',
            url: '',
        }
    })

    useEffect(() => {
        console.log(actualProductId)
        getById(actualProductId).then(data => {
            setProduct(data)
        })
        // eslint-disable-next-line
    }, [])

    const handleChange = () => {
        console.log("derzeit keine weiteren Optionen verfügbar")
    };

    const handleLocation = product.location.substr(0, 1) + product.location.substr(1, product.location.length).toLowerCase()


    return (
        <Container>
            {renderNavigation()}
            <Wrapper>
                <ContentOne>
                    <FirstContentWrapper>
                        <StyledImg src={product.image.url} alt={product.title} id={product.image.id} tabIndex="0"/>
                        <SectionOne>
                            <Headline>{product.title}</Headline>
                            <PDescription>{product.description}</PDescription>
                        </SectionOne>
                    </FirstContentWrapper>
                    <LikeButton startIcon={<ThumbUpTwoToneIcon/>} sx={{color: "#222831"}}>
                        Zu Favoriten hinzufügen
                    </LikeButton>
                </ContentOne>

                <ContentTwo>
                    <SectionTwo>
                        <SecondContentWrapper>
                            <p>Mietdauer:</p>
                            <FormControl variant="standard" sx={{m: 1, minWidth: 80}}>
                                <Select
                                    sx={{color: "#222831", backgroundColor: "#DDDDDD", padding: "0 0 0 10%"}}
                                    labelId="simple-select-autowidth-label"
                                    id="simple-select-autowidth"
                                    value={product.maxRentalCycle}
                                    onChange={handleChange}
                                    autoWidth
                                >
                                    <MenuItem value={product.maxRentalCycle}>{product.maxRentalCycle}</MenuItem>
                                </Select>
                            </FormControl>
                            <p>Monate</p>
                        </SecondContentWrapper>
                        <SecondContentWrapper>
                            <P>Standort:</P>
                            <p>{handleLocation}</p>
                        </SecondContentWrapper>
                    </SectionTwo>

                    <PriceTag>{product.price}€</PriceTag>
                </ContentTwo>
                <ContentThree>
                    <BackButton variant="outlined" startIcon={<ArrowBackTwoToneIcon/>}>
                        Zurück zur Suche
                    </BackButton>
                    <CheckoutButton variant="contained">
                        Jetzt Mieten.
                    </CheckoutButton>
                </ContentThree>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  font-family: 'Nunito', sans-serif;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  margin: 75px 2.5% 0 2.5%;
  width: 100%;

  @media (max-width: 500px) {
    margin-top: 47px;
    margin-bottom: 65px;
  }
  
  @media(min-width: 820px){
    max-width: 820px;
  }
`



const ContentOne = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5.5% 0 1% 0;
  //background-color: #DDDDDD;
  //box-sizing: border-box;
  //border-radius: 50px;
  //padding: 3%;
`
const FirstContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  
  @media(max-width: 500px){
    flex-direction: column;
  }
`
const SectionOne = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  padding: 3% 0 0 4%;

  @media(max-width: 500px){
padding: 5% 0 0 7%
  }
`

const ContentTwo = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1% 0 1% 0;
  //background-color: #222831;
  //box-sizing: border-box;
  //border-radius: 50px;
  //padding: 3% 5%;
  //color: white;
`
const SecondContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const SectionTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: flex-start;
  padding: 3% 0 0 4%;
`

const ContentThree = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5%;
  justify-content: center;
`


const StyledImg = styled.img`
  width: 50%;
  border: 1px solid #DDDDDD;
  
  :focus{
    width: 100%;
  }
  
  @media(max-width: 500px){
align-self: center;
    width: 75%;
  }
`


const Headline = styled.p`
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: 400;
  margin-top: 0;
`

const LikeButton = styled(Button)`
  && {
    text-transform: none;
    width: 50%;

    @media(max-width: 500px){
align-self: flex-end;
    }
  }
`
const P = styled.p`
margin-right: 1em`

const PriceTag = styled.p`
height: fit-content;
  font-weight: 300;
  font-size: 2.5em;
  @media(max-width: 500px){
margin-left: 15%;
  }
  `

const CheckoutButton = styled(Button)`
  && {
    color: white;
    background-color: #F05454;
    border-color: #F05454;
    margin-left: 3%;

    :hover {
      border-color: #F57575FF;
      background-color: #F57575FF;
    }
  }
`

const BackButton = styled(Button)`
  && {
    text-transform: none;
    color: #878787;
    border-color: #878787;
    margin-left: 3%;

    :hover {
      border-color: #9E9D9DFF;
      color: #9E9D9DFF;
    }
  }
`

const PDescription = styled.p`
  @media(max-width: 500px){
margin: 0.25em 0;
  }
`