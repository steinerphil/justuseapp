import phone from "../components/images/empty_phone.png"
import styled from "styled-components/macro";

export default function Homepage() {


    return (
        <>
            <FirstSection>
                <Heading>
                    <H2>Mieten statt kaufen.</H2>
                    <P>Die beste Art wie du Geld, Zeit und Platz sparst
                        und nebenbei zur Reduzierung der Müllproduktion beiträgst.
                    </P>
                </Heading>
                <Phone src={phone} alt="smartphone"/>
            </FirstSection>
        </>

    )
}


const Heading = styled.div`
  order: 2;
  position: relative;
  top: 1rem;
  padding: 5%;
 
`

const Phone = styled.img`
  order: 1;
  max-width: 100%;
  width: 30%;
  transform: rotate(-5deg);
  
  @media (max-width: 572px){
    visibility: hidden;
    position: absolute;
  }
`

const P = styled.p`

  font-size: 1rem;
  line-height: 1.5rem;

@media(min-width: 768px) {
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
`

const FirstSection = styled.section`
  display: flex;
  flex-direction: row;
  background-color: #30475E;
  color: #DDDDDD;
  font-family: 'Nunito', sans-serif;
  padding: 7%;

`


const H2 = styled.h1`
  margin-top: 0;
  margin-bottom: auto;
  letter-spacing: -.025em;
  line-height: 2.5rem;
  font-weight: 800;
  

  @media (min-width: 768px) {
    font-size: 3.75rem;
    line-height: 1;
  }

  @media (max-width: 767px){
    font-size: 3rem;
    line-height: 1;
  }

  
`