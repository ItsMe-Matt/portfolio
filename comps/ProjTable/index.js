import styled from "styled-components"
import ImageSrc from "../ImgSrc"
import Image from "next/image"

export default function ProjTable({
    role="UI/UX Design",
    year="2021",
    name="The Giving Hand",
    summary="CompassPlus is an app designed to replace your physical Compass card with a digital NFC card you can use on your phone.",
    img="/projImg/cPTitle.png",
    imgType="1",
    HL = "This is a one sentenced head liner for the application"
}) {
    return <Container>
        <Left>
            <ImgCont>
                <ImageSrc 
                type={imgType}
                src={img}
                />
            </ImgCont>
        </Left>
            
        <Right>
            <ProjCont>
                <ProjRole>
                    {role}
                </ProjRole>

                <ProjNandY>
                    <ProjName>
                        {name}
                    </ProjName>

                    <ProjYear>
                        {year}
                    </ProjYear>
                </ProjNandY>

                <ProjHL>
                    {HL}
                </ProjHL>
               
            </ProjCont>

            <Summary>
                {summary}
            </Summary>
            
        </Right>
    </Container>
}


const Container = styled.div`
display: flex;
width: 75vw;
flex-direction: row;
height: content-fit;
`

const Left = styled.div`
width: 50%;
display: flex;
justify-content: center;

margin-right: 0.5vw;
`

const Right = styled.div`
width: 50%;

margin-left: 0.5vw;
display: flex;
flex-direction: column;
justify-content: center;
`

const ProjCont = styled.div`
margin-bottom: 3.5vh;
`
const ProjHL = styled.div`
font-family: Poppins;
font-size: 2.5vh;
font-weight: 400;

margin-top: 2vh;
`
const ProjName = styled.div`
font-family: Poppins;
font-size: 5vh;
font-weight: 500;
`
const ProjRole = styled.div`
font-family: Roboto;
font-size: 3vh;
font-weight: 100;
`
const ProjYear = styled.div`
font-family: Roboto;
font-size: 3vh;
font-weight: 300;


margin-left: 1vh;
`

const ProjNandY = styled.div`
display: flex;
align-items: baseline;
`

const Summary = styled.div`
width: 100%;

font-family: Roboto;
font-size: 2.25vh;
font-weight: 300;
line-height: 1.5;
color: #909090;
`

const ImgCont = styled.div`
width: 100%;
margin: 7vh;
`