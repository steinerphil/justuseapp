import useProducts from "../hooks/useProducts";
import {useParams} from "react-router-dom";
import styled from "styled-components/macro";
import {useEffect, useState} from "react";
import Button from '@mui/material/Button';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import FormControl from "@mui/material/FormControl";
import {InputLabel, MenuItem, Select} from "@mui/material";

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
            console.log(data)
        })
        // eslint-disable-next-line
    }, [])

    const handleChange = () => {
        console.log("derzeit keine weiteren Optionen verfügbar")
    };

    return (
        <Container>
            {renderNavigation()}
            <Content>
                <Wrapper>
                    <StyledImg src={product.image.url} alt={product.title} id={product.image.id}/>
                    <Section>
                        <Headline>{product.title}</Headline>
                        <p>{product.description}</p>
                    </Section>
                </Wrapper>
                <Wrapper>
                    <LikeButton variant="outlined" startIcon={<ThumbUpTwoToneIcon/>}>
                        Zu Favoriten hinzufügen
                    </LikeButton>
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Mietdauer</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={product.maxRentalCycle}
                            onChange={handleChange}
                            autoWidth
                            label="Mietdauer"
                        >
                            <MenuItem value={product.maxRentalCycle}>{product.maxRentalCycle}</MenuItem>
                        </Select>
                    </FormControl>

                </Wrapper>
            </Content>
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
  flex-direction: row;
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
  flex-direction: column;
    
`

const StyledImg = styled.img`
  width: 50%;
  border: 1px solid #DDDDDD;
`
const Section = styled.div`
  display: flex;
  flex-direction: column;
`

const Headline = styled.p`
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: 400;
  align-self: center;
`


const LikeButton = styled(Button)`
  && {
    text-transform: none;
  }

`