
import styled from "styled-components"
import Social from "../Social";


export default function ContactUI({
    name="",
    email="",
    message="",
    onSubmitPress=()=>{}
}) {
    return <Container>

        <Row1>
        <Left>
            <LHead>
                I'd love to hear from you
            </LHead>



        </Left>

        <Right>
            <RHead>
                Say hello!
            </RHead>
        </Right>

        </Row1>
       

       <Row2>

        <Left>
            <Line />
            <Social type="2"/>
        </Left>

        <Right>
            <form action="mailto:matthewlukez@yahoo.com" method="post" encType="text/plain">
                <RRow>
                    <Cont1>
                        <Label>Name:</Label>
                        <PInput type="text" id="name" placeholder="Enter Your Name"></PInput>
                    </Cont1> 
                    <Cont2>
                        <Label>Subject:</Label>
                        <PInput type="text" id="email" placeholder="Enter Your Subject"></PInput>
                    </Cont2>
                </RRow>

                <RRow>
                    <Cont1>
                        <Label>Company:</Label>
                        <PInput type="text" id="Company" placeholder="Enter Company"></PInput>
                    </Cont1> 
                    <Cont2>
                        <Label>Email:</Label>
                        <PInput type="email" id="email" placeholder="Enter Your Email Address"></PInput>
                    </Cont2>
                </RRow>
               
                <Label>Message:</Label>
                <MInput type="text" id="message" placeholder="Enter Your Message Here"></MInput>

                <SRow>
                    <SubmitBtn type="submit" />
                </SRow>
            </form>
        </Right>

       </Row2>
            
    </Container>
}


const Container = styled.div`
display: flex;
width: 75vw;
flex-direction: column;
`
const Row1 = styled.div`
display: flex;
align-items: baseline;
`

const Row2 = styled.div`
display: flex;

`

const Left = styled.div`
width: 50%;
display: flex; 
flex-direction: column;
justify-content: space-between;
`

const Right = styled.div`
width: 50%;
`

const Line = styled.div`
height: 0.25vh;
background-color: #122c5c;
width: 40%;
`
const LHead = styled.p`
font-family: Poppins;
font-weight: 300;
font-size: 2.5vw;
margin: 0;
color: #122c5c;
`

const RHead = styled.div`
font-family: Roboto;
font-size: 2.5vh;
font-weight: 300;

margin-bottom: 3vh;
`

const Label = styled.p`
font-family: Poppins;
font-weight: 500;
`

const RRow = styled.div`
display: flex;
`



const Cont1 = styled.div`
margin-right: 2vh;
width: 50%;
`

const Cont2 = styled.div`
width: 50%;
`

const PInput = styled.input`
width: 100%;
outline: none;

background-color: transparent;
border: none;

font-family: Roboto;
font-size: 1.6vh;

&:focus {
    border-bottom: 0.2vh #737373 solid;
}
`

const MInput = styled.textarea`
width: 100%;
outline: none;

background-color: transparent;
border: none;

font-family: Roboto;
font-size: 1.6vh;
resize: none;
height: 10vh;

border-bottom: 0.2vh #737373 solid;
`
const SRow = styled.div`
display: flex;
justify-content: flex-end;
`
const SubmitBtn = styled.input`
border: none;
border-radius: 100vh;
padding: 1.5vh 3vh;

font-family: Poppins;
margin-top: 1vh;

`
