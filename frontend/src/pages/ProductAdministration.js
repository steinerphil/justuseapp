import {useHistory} from "react-router-dom";
import styled from "styled-components/macro";


export default function ProductAdministration() {

    const history = useHistory()

    return (
        <Wrapper>
            <Headline>Wähle eine Aktion aus:</Headline>
            <ButtonDiv onClick={() => history.push("/administration/new")}>
                <p>Produkt anlegen</p>
            </ButtonDiv>
            <ButtonDiv onClick={() => history.push("/administration/delete")}>
                <p>Produkt löschen</p>
            </ButtonDiv>
            <ButtonDiv>
                <p>Produkt bearbeiten</p>
            </ButtonDiv>
        </Wrapper>


    )
}

const Wrapper = styled.div`
  font-family: 'Nunito', sans-serif;
  display: flex;
  margin-top: 90px;
  text-align: center;
  flex-direction: column;
  align-items: center;
`

const Headline = styled.p`
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: 400;
`

const ButtonDiv = styled.div`
  margin: 1.5%;
  width: 120px;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: #DDDDDD;
  padding: 1.4%;
  border-radius: 30px;
  
  :hover{
    background-color: #30475E;
    color: white;
  }
`
