
import styled from "styled-components"
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import { MdOutlineEmail } from "react-icons/md"

export default function ContactUI({
    onS1Over=()=>{},
    onS1Off=()=>{},
    S1D = "none",
    onS2Over=()=>{},
    onS2Off=()=>{},
    S2D = "none",
    onS3Over=()=>{},
    onS3Off=()=>{},
    S3D = "none"
}) {
    return <FooterArea>


    <Container>
        <Left>
            <LHead>
                I'd love to hear from you
            </LHead>


        </Left>

        <Right>
            <RP>
                Say Hello!
            </RP>
            <ContainerS>
                <IconA1 
                    href="https://www.linkedin.com/in/mlzhao/" 
                    target="_blank"
                    onMouseOver={onS1Over}
                    onMouseLeave={onS1Off}
                    >
                    <IconCont>
                        <FaLinkedin size="2em" color='#2867B2'/>
                    </IconCont>
                    
                    <Hid S1D={S1D}>
                        in/mlzhao    
                    </Hid>                    
                </IconA1>

                <IconA1 
                    href="https://github.com/ItsMe-Matt" 
                    target="_blank"
                    onMouseOver={onS2Over}
                    onMouseLeave={onS2Off}>
                    <IconCont>
                        <FaGithubSquare size="2em"/>
                    </IconCont>
                    <Hid2 S2D={S2D}>
                        /ItsMe-Matt    
                    </Hid2>  
                </IconA1>

                <IconA2 
                    href="mailto:Matthewlukez@yahoo.com" 
                    target="_blank"
                    onMouseOver={onS3Over}
                    onMouseLeave={onS3Off}
                    >
                    <IconCont>
                        <MdOutlineEmail size="2em" />
                    </IconCont>
                    <Hid3 S3D={S3D}>
                        matthewlukez@yahoo.com   
                    </Hid3> 
                </IconA2>
            </ContainerS>
        </Right>
    </Container>
    </FooterArea>
}


const Container = styled.div`
display: flex;
width: 75vw;
align-items: baseline;
justify-content: space-between;
background-color: #bdd0f2;
padding: 5vh 0;
z-index: 2;
`

const Left = styled.div`
display: flex; 
flex-direction: row;
align-items: baseline;
`

const Right = styled.div`
display: flex; 
justify-content: flex-end;
flex-direction: row;
align-items: baseline;
`

const LHead = styled.p`
font-family: Poppins;
font-weight: 500;
font-size: 1.6em;
margin: 0;
color: #122c5c;
`
const RP = styled.p`
font-family: Poppins;
font-weight: 300;
font-size: 1.3em;
margin: 0;
color: #122c5c;
margin-right: 1vw;
`

const ContainerS = styled.div`
    display: flex;
    width: fit-content;
    flex-direction: row;
`

const IconA1 = styled.a`
display: flex;
align-items: center;
margin-right: 0.75vw;
background-color: #2868de;
border-radius: 5rem;
width: max-content;

&:hover {
    transition: 1.5s;
    box-shadow: inset 16vw 0 0 0 #28994c;
}
`

const IconA2 = styled.a`
display: flex;
align-items: center;
margin-right: 0.75vw;
background-color: #2868de;
border-radius: 5rem;
width: max-content;

&:hover {
    transition: 1.5s;
    box-shadow: inset 25vw 0 0 0 #28994c;
}
`
const IconCont = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #fff;

border-radius: 5rem;
border: 0.1vw solid black;

padding: 0.75vh 2vw;
`

const Hid = styled.div`
height: 1em; 
align-items: center;


font-family: Roboto;
font-weight: 300;
font-size: 1em;

transition: 3s;
display: ${(props)=>props.S1D};
overflow: hidden;

padding: 0 1.5vw 0 1vw;
color: #fff;
`

const Hid2 = styled.div`
height: 1em; 
align-items: center;


font-family: Roboto;
font-weight: 300;
font-size: 1em;

transition: 3s;
display: ${(props)=>props.S2D};
overflow: hidden;

padding: 0 1.5vw 0 1vw;
color: #fff;
`

const Hid3 = styled.div`
height: 1em; 
align-items: center;


font-family: Roboto;
font-weight: 300;
font-size: 1em;

transition: 3s;
display: ${(props)=>props.S3D};
overflow: hidden;

padding: 0 1.5vw 0 1vw;
color: #fff;
`
const FooterArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #bdd0f2;
`
