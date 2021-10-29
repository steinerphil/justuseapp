import phone from "../components/images/empty_phone.png"
import styled from "styled-components/macro";

export default function Homepage() {


    return (
        <>
            <FirstSection>
                <Heading>
                    <H1>Mieten statt kaufen.</H1>
                    <h3>Etwas bei uns mieten ist die beste Art, wie du Geld, Zeit und Platz sparst
                        und nebenbei einen Teil zur Rezuzierung der Müllproduktion beiträgst.
                    </h3>
                </Heading>
                <Phone>
                    <img src={phone} alt="smartphone"/>
                </Phone>
            </FirstSection>
        </>

    )
}



const Heading = styled.div`

`

const Phone = styled.div`
`

const FirstSection = styled.section`
    display: flex;
  flex-direction: row;
  
`





const H1 = styled.h1`
    margin-top: 0;
`