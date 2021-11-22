import {useEffect, useState} from "react";
import useProducts from "../hooks/useProducts";
import {useHistory, useParams} from "react-router-dom";
import styled from "styled-components/macro";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from "@mui/material/Button";
import axios from "axios";

export default function Checkout() {

    const {renderNavigation, getById} = useProducts();
    const history = useHistory()
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
    const handleLocation = product.location.substr(0, 1) + product.location.substr(1, product.location.length).toLowerCase()
    const [paymentMethod, setPaymentMethod] = useState("paypal")
    const [date, setDate] = useState({current: '', return: '', collection: ''})

    useEffect(() => {
        getById(actualProductId)
            .then(data => {
                setProduct(data)
                getReturnDate(data.maxRentalCycle)
            })
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        getCollectionDate()
        // eslint-disable-next-line
    }, [date.return])


    function getReturnDate(cycle) {
        axios.get(`/date/return/${cycle}`)
            .then(res => res.data)
            .then(data => {
                setDate({...date, return: data})
            }).catch(err => console.log(err))
    }

    function getCollectionDate() {
        axios.get("/date/collection")
            .then(res => res.data)
            .then(data => {
                setDate({...date, collection: data})
            })

    }

    function handleRadioButton(event) {
        setPaymentMethod(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        switch (paymentMethod) {
            case "paypal":
                console.log("Paypal checkout")
                break;
            case "collection":
                alert(`Du kannst dir deinen gemieteten Artikel bis zum ${date.collection} bei uns am Standort ${handleLocation} abholen. Bis bald!`)
                history.push("/products/overview")
                break;
            default:
                return null
        }
    }

    return (
        <Container>
            {renderNavigation()}
            <Wrapper>
                <p>Du möchstest</p>
                <p>{product.title}</p>
                <p>bis zum</p> {date.return} <p>mieten.</p>
                <p>Gesamtbetrag: {product.price}€</p>

                <form onSubmit={handleSubmit}>

                    <FormControl component="fieldset">
                        <FormLabel component="legend">Bezahlen mit:</FormLabel>
                        <RadioGroup
                            aria-label="bezahlmethoden"
                            name="radio-buttons-group"
                            value={paymentMethod}
                            onChange={handleRadioButton}
                        >
                            <FormControlLabel value="paypal" control={<Radio/>} label="PayPal"/>
                            <FormControlLabel value="collection" control={<Radio/>} label="bei Abholung"/>
                        </RadioGroup>
                    </FormControl>
                    <CheckoutButton variant="contained" type="submit">
                        Jetzt Mieten.
                    </CheckoutButton>
                    <button onClick={() => console.log(date)}>test</button>
                </form>
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

  @media (min-width: 820px) {
    max-width: 820px;
  }
`

const CheckoutButton = styled(Button)`
  && {
    color: white;
    background-color: #F05454;
    border-color: #F05454;
    margin: auto;
    height: 50px;

    :hover {
      border-color: #F57575FF;
      background-color: #F57575FF;
    }
  }
`