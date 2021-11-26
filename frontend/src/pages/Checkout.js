import React, {useEffect, useState} from "react";
import useProducts from "../hooks/useProducts";
import {useHistory, useParams} from "react-router-dom";
import styled from "styled-components/macro";
import Button from "@mui/material/Button";
import axios from "axios";
import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";
import {CircularProgress} from "@mui/material";


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
    const [date, setDate] = useState({current: '', return: '', collection: ''})
    const requestHeaders = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
        },
    }

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

    function handleSubmit(event) {
        event.preventDefault()
        alert(`Super! Du kannst dir deinen gemieteten Artikel bis zum ${date.collection} bei uns am Standort ${handleLocation} abholen. Bis bald!`)
        history.push("/products/overview")
    }

    return (
        <Container>
            {renderNavigation()}
            <Wrapper>
                <Textbox>
                    <p>Du möchstest den Artikel:</p>
                    <p>- {product.title} -</p>
                    <p>bis zum</p> {date.return} <p>mieten.</p>
                    <p>Gesamtbetrag: {product.price}€</p>
                </Textbox>

                <CheckoutForm onSubmit={handleSubmit}>
                    <CheckoutButton variant="contained" type="submit">
                        Bei Abholung bezahlen
                    </CheckoutButton>
                    <PayPalScriptProvider options={{
                        "client-id": "AZGV7ZChKfhMF6KYPg0zsZC_NakicLcxi2Nzh1G3Rw0lqdO0_2oPld2QPXKw0VgLfa44-8Tgd6rUDMKw",
                        currency: "EUR",
                        components: "buttons",
                    }}>
                        {product.title !== '' ?
                            (<PayPalButtons
                                style={{layout: "vertical", color: "gold", shape: "pill", label: "paypal"}}
                                createOrder={() => {
                                    const requestBody = {
                                        intent: "CAPTURE",
                                        purchase_units: [{
                                            amount: {
                                                currency_code: "EUR",
                                                value: product.price,
                                            },
                                            description: product.title,
                                        }],
                                    }
                                    return axios.post("/api/checkout/order", requestBody, requestHeaders)
                                        .then(res => res.data)
                                        .then(data => {
                                            return data.orderId
                                        })
                                        .catch(err => console.log(err))
                                }}
                                onApprove={(data) => {
                                    return axios.post(`/api/checkout/approve/${data.orderID}`, requestHeaders)
                                        .then(res => res.data)
                                        .catch(err => console.log(err));
                                }}
                            />)

                            : <CircularProgress color="grey"/>
                        }
                    </PayPalScriptProvider>
                </CheckoutForm>
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
    text-transform: none;
    color: white;
    background-color: #F05454;
    border-color: #F05454;
    height: 45px;
    width: 100%;
    border-radius: 50px;
    margin-bottom: 35px;
    font-size: medium;
    padding: 0;

    @media (max-width: 835px) {
      height: 35px;
      font-size: small;
    }


    :hover {
      border-color: #F57575FF;
      background-color: #F57575FF;
    }
  }
`

const CheckoutForm = styled.form`
  width: 50%;
  margin: 7% auto;
  min-width: 200px;
  text-align: center;
`
const Textbox = styled.div`
  margin: 5% 5% 0 5%;
`