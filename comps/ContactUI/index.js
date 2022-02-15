
import styled from "styled-components"


export default function ContactUI({
    name="",
    email="",
    message="",
    onSubmitPress=()=>{}
}) {
    return <Container>
        <Left>
            <LHead>
                Work with me!
            </LHead>

        </Left>

        <Right>
            <form onSubmit={()=>{console.log("hey there bud");event.preventDefault()}}>
               <Row>
               <Cont>
                   <Label>Name:</Label>
                   <PInput type="text" id="name"></PInput>
               </Cont>

               <Cont>
                   <Label>Email:</Label>
                   <PInput type="text" id="email"></PInput>
               </Cont>
               </Row>
               

              <Cont>
                   <Label>Message:</Label>
                   <MInput type="text" id="message"></MInput>
              </Cont>

               <input type="submit"></input>
            </form>

        </Right>
    </Container>
}


const Container = styled.div`
display: flex;

width: 75vw;

`
const Left = styled.div`
width: 50%
`

const Right = styled.div`
width: 50%;
background-color: red;
`
const LHead = styled.h1`
font-family: Poppins;
font-weight: 300;
font-size: 3vw;
`

const Label = styled.p`
font-family: Poppins
`

const Row = styled.div`
display: flex;
`

const Cont = styled.div`
margin: 1vh;
`

const PInput = styled.input`
width: 24%;
padding: 1vh 1vw;
outline: none;

background-color: transparent;

border: none;
border-bottom: 0.2vh #737373 solid;
`

const MInput = styled.input`
width: 100%;
padding: 1vh 1vw;
outline: none;

background-color: transparent;

border: none;
border-bottom: 0.2vh #737373 solid;
`