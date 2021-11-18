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
                        <StyledImg src={product.image.url} alt={product.title} id={product.image.id}/>
                        <SectionOne>
                            <Headline>{product.title}</Headline>
                            <p>{product.description}</p>
                        </SectionOne>
                    </FirstContentWrapper>
                    <LikeButton startIcon={<ThumbUpTwoToneIcon/>}>
                        Zu Favoriten hinzufügen
                    </LikeButton>
                </ContentOne>

                <ContentTwo>
                    <Section>
                        <p>Mietdauer:</p>
                        <FormControl sx={{m: 1, minWidth: 80}}>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={product.maxRentalCycle}
                                onChange={handleChange}
                                autoWidth
                            >
                                <MenuItem value={product.maxRentalCycle}>{product.maxRentalCycle}</MenuItem>
                            </Select>
                        </FormControl>
                        <p>Standort:</p>
                        <p>{handleLocation}</p>
                    </Section>
                    <p>{product.price}</p>
                </ContentTwo>
                <Content>
                    <ButtonLowerCase variant="outlined" startIcon={<ArrowBackTwoToneIcon/>}>
                        Zurück zur Suche
                    </ButtonLowerCase>
                    <Button variant="outlined">
                        Jetzt Mieten.
                    </Button>
                </Content>
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
`
const Content = styled.div`
  display: flex;
  flex-direction: row;
`
const Section = styled.div`
  display: flex;
  flex-direction: column;
`

const FirstContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const ContentOne = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4%;
  background-color: #DDDDDD;
  box-sizing: border-box;
  border-radius: 50px;
  padding: 5%;
`
const SectionOne = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  padding: 3% 0 0 4%;
`

const ContentTwo = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #222831;
  box-sizing: border-box;
  border-radius: 50px;
  padding: 5%;
`


const StyledImg = styled.img`
  width: 50%;
  border: 1px solid #DDDDDD;
`


const Headline = styled.p`
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: 400;
  margin-top: 0;
`


const ButtonLowerCase = styled(Button)`
  && {
    text-transform: none;
  }
`

const LikeButton = styled(Button)`
  && {
    text-transform: none;
    width: 50%;
  }
`