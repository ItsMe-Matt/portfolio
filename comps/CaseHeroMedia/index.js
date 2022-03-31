import styled from "styled-components"
import Image from "next/image"

export default function CaseHeroMedia({
    role="UI/UX Design",
    year="2021",
    name="The Giving Hand",
    HL = "This is a one sentenced head liner for the application",
    img = "",
    imgW = "",
    imgH = ""
}) {
    return <Container>
        <Left>
            <ImgCont>
                <Image
                src={img}
                height={imgH}
                width={imgW}
                layout='responsive'
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
            
        </Right>
    </Container>
}


const Container = styled.div`
display: flex;
width: 75vw;
flex-direction: row;
height: content-fit;
justify-content: space-between;

@media (max-width: 480px)  {
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 0 10%;
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

const ProjCont = styled.div`
margin-bottom: 2.5vh;
`
const ProjHL = styled.div`
font-family: Poppins;
font-size: 1.25em;
font-weight: 400;

margin-top: 2vh;
`
const ProjName = styled.div`
font-family: Poppins;
font-size: 2.5em;
font-weight: 500;

color: #334972;

@media (max-width: 480px)  {
    font-size: 2em;
    }
`
const ProjRole = styled.div`
font-family: Roboto;
font-size: 1.5em;
font-weight: 100;
`
const ProjYear = styled.div`
font-family: Roboto;
font-size: 1.5em;
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
font-size: 1.2em;
font-weight: 300;
line-height: 1.5;
color: #909090;
`

const ImgCont = styled.div`
width: 45vh
`