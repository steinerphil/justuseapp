import {useLocation} from "react-router-dom";
import styled from "styled-components/macro";
import {useEffect, useState} from "react";
import useProducts from "../hooks/useProducts";

export default function EditProductTwo() {

    const [productData, setProductData] = useState()
    const {getById} = useProducts()

    const queryString = new URLSearchParams(useLocation().search);
    const currentId = queryString.get("id")

    useEffect(()=>{
        getById(currentId).then(res => {
           console.log(res.data)
        })
    },[])


    return (

        <Wrapper>
            <p>Hello</p>
            <button onClick={() => console.log(currentId)}>test</button>
        </Wrapper>
    )

}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 75px;

  @media (max-width: 500px) {
    margin-top: 47px;
  }
`