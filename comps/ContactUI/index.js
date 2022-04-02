
import styled from "styled-components"
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import { MdOutlineEmail } from "react-icons/md"

export default function ContactUI({
    onS1Over=()=>{},
    onS1Off=()=>{},
    S1C = "#fff",
    S1D = "none",
    onS2Over=()=>{},
    onS2Off=()=>{},
    S2C = "#fff",
    S2D = "none",
    onS3Over=()=>{},
    onS3Off=()=>{},
    S3C = "#fff",
    S3D = "none"
}) {
    return <Container>
        <H1>
            I'd love to hear from you!
        </H1>

        <P1>
            You can reach me with the links below
        </P1>

        <IconCont>
            <Row>
                <IconBtn
                href="https://www.linkedin.com/in/mlzhao/" 
                target="_blank"
                onMouseOver={onS1Over}
                onMouseLeave={onS1Off}
                S1D={S1D}
                S1C={S1C}
                >
                    <FaLinkedin size="3em" color={S1C} />
                    <IconTxt S1C={S1C}>
                        in/mlzhao
                    </IconTxt>
                </IconBtn>

                <IconBtn2
                href="https://github.com/ItsMe-Matt" 
                target="_blank"
                onMouseOver={onS2Over}
                onMouseLeave={onS2Off}
                S2D={S2D}
                S2C={S2C}
                >
                    <FaGithubSquare size="3em" color={S2C} />
                    <IconTxt2 S2C={S2C}>
                        /ItsMe-Matt
                    </IconTxt2>
                </IconBtn2>
            </Row>


            <IconBtn3
            href="mailto:Matthewlukez@yahoo.com" 
            target="_blank"
            onMouseOver={onS3Over}
            onMouseLeave={onS3Off}
            S3D={S3D}
            S3C={S3C}
            >
                <MdOutlineEmail size="3em" color={S3C} />
                <IconTxt3 S3C={S3C}>
                    matthewlukez@yahoo.com
                </IconTxt3>
            </IconBtn3>

            


        </IconCont>
    </Container>
}

const Container = styled.div`
background-color: #4169e1;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 5vw 5%;
z-index: 3;
position: relative;

@media (max-width: 599px)  {
    width: 100%;
    height: 90vh;
  }
  
`
const H1 = styled.div`
font-family: Montserrat;
font-weight: 900;
font-size: 2.5em;
margin: 0;
color: #fff;
margin-bottom: 1em;

@media (max-width: 599px)  {
    text-align: center;
  }
`
const P1 = styled.div`
font-family: Poppins;
font-weight: 300;
font-size: 1.5em;
margin: 0;
color: #fff;
margin-right: 1vw;

@media (max-width: 599px)  {
    text-align: center;
  }
`
const IconCont = styled.div`
display: flex;
flex-direction: row;

margin-top: 2em;

@media (max-width: 599px)  {
    flex-direction: column;
    justify-content: center;
    width: 90%;
}

@media only screen and (min-width: 600px) {
    width: 70%;
}

@media only screen and (min-width: 992px) {
    width: 50%;
}
`
const Row = styled.div`
display: flex;
justify-content: center;
width: 50%;

@media (max-width: 599px)  {
    width: 100%;
    margin: 0 0.125em 0.125em 0;
}
`
const IconBtn = styled.a`
display: flex;
flex-direction: column;
align-items: center;

width: 50%;
padding: 1em 0;
margin: 0.25em;
border-radius: 1em;
border: solid 0.2em #fff;
background-color: ${(props)=>props.S1D};

color: #ffffff;

@media (max-width: 599px)  {
    width: 50%;
    margin: 0 0.125em 0.125em 0;
}
`
const IconBtn2 = styled.a`
display: flex;
flex-direction: column;
align-items: center;

width: 50%;
padding: 1em 0;
margin: 0.25em;
border-radius: 1em;
border: solid 0.2em #fff;
background-color: ${(props)=>props.S2D};

color: #ffffff;

@media (max-width: 599px)  {
    width: 50%;
    margin: 0 0 0.125em 0.125em ;
}
`
const IconBtn3 = styled.a`
display: flex;
flex-direction: column;
align-items: center;

width: 50%;
padding: 1em 0;
margin: 0.25em;
border-radius: 1em;
border: solid 0.2em #fff;
background-color: ${(props)=>props.S3D};

color: #ffffff;

@media (max-width: 599px)  {
    width: 100%;
    margin: 0.125em 0 0 0;
}
`
const IconTxt = styled.div`
margin-top: 1em;

font-family: Poppins;
font-weight: 400;

color: ${(props)=>props.S1C};
`
const IconTxt2 = styled.div`
margin-top: 1em;

font-family: Poppins;
font-weight: 400;
color: ${(props)=>props.S2C};
`
const IconTxt3 = styled.div`
margin-top: 1em;

font-family: Poppins;
font-weight: 400;
color: ${(props)=>props.S3C};
`

