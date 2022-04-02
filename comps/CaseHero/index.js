import styled from "styled-components"
import Image from "next/image"

export default function CaseHero({
    summary="CompassPlus is an app designed to replace your physical Compass card with a digital NFC card you can use on your phone.",
    img="/projImg/cPTitle.png",
    HL = "This is a one sentenced head liner for the application",

    role="UI/UX Design",
    timeframe="Wednesday",
    purpose="Hero for fun",
    tools = "my bear hands"
}) {
    return <Container>
        <Left>
            <ImgCont>
                <Image
                src={img}
                height={1440}
                width={1080}
                layout='responsive'
                />
            </ImgCont>
        </Left>
            
        <Right>
            <ProjHL>
                {HL}
            </ProjHL>

            <Summary>
            {summary}
            </Summary>

            <RoleCont>
            <Bold>Role:</Bold> {role}
            </RoleCont>

            
            <RoleCont>
            <Bold>Timeframe:</Bold> {timeframe}
            </RoleCont>

            <RoleCont>
            <Bold>Purpose:</Bold> {purpose}
            </RoleCont>

            <RoleCont>
            <Bold>Tools:</Bold> {tools}
            </RoleCont>




            
        </Right>
    </Container>
}


const Container = styled.div`
display: flex;

flex-direction: row;
height: content-fit;
justify-content: space-between;

@media (max-width: 599px)  {
    width: 90%;
    flex-direction: column;
    align-items: center;
}
@media only screen and (min-width: 600px) {
    width: 90%;

}
@media only screen and (min-width: 992px) {
    width: 75%;
}
`

const Left = styled.div`
width: 45%;
display: flex;
justify-content: center;

margin-right: 0.5vw;

@media (max-width: 480px)  {
    width: 100%;
      }
`

const Right = styled.div`
width: 50%;

margin-left: 0.5vw;
display: flex;
flex-direction: column;
justify-content: center;

@media (max-width: 480px)  {
    align-items: flex-start;
    width: 100%;
      }
`

const ProjHL = styled.div`
font-family: Montserrat;
font-weight: 700;
margin-bottom: 1vh;

color: #334972;

@media (max-width: 599px)  {
font-size: 2em;
}
@media only screen and (min-width: 600px) {
    font-size: 2em
}

@media only screen and (min-width: 992px) {
    font-size: 2.5em;
}
`



const Summary = styled.div`
width: 100%;

font-family: Poppins;
font-size: 1.2em;
font-weight: 300;
line-height: 1.5;
color: #000;

margin-bottom: 3vh;
`

const ImgCont = styled.div`
width: 80%;
border-radius: 1em;
overflow: hidden;
`

const RoleCont = styled.div`
margin-top: 1vh;
font-family: Poppins;
color: #000;

font-size: 1em;
`
const Bold = styled.span`
font-weight: 700;
`