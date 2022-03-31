import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GrFormNextLink } from 'react-icons/gr'

export default function ProjectCard({
    headline = "I am a headline",
    img = "/projImg/testTitle2.png",
    route="/",
    bgcolor="#8a4825",
    hOn=()=>{},
    hOff=()=>{},
    uColor="$8a4825",
}) {
   

    return <Link href={route}>
    <Container 
        onMouseOver={hOn}
        onMouseLeave={hOff}
    >
        <Left>
            <ImgCont bgcolor={bgcolor}>
                <Image src={img}
                width={1080}
                height={1440}
                layout='responsive'
                quality={100}
                />
            </ImgCont>  
        </Left>
        <Right>
            <TxtCont>

                    <TxtHeader uColor={uColor}>
                        {headline}
                    </TxtHeader>

                    <TxtBtn uColor={uColor}>
                        View
                        <GrFormNextLink size="1em"/>
                    </TxtBtn>

            </TxtCont>         
        </Right>
    </Container>
    </Link> 
}


const Container = styled.div`
display: flex;
width: 50%;
margin: 0.5em;
cursor: pointer;
padding: 0.75em;
border-radius: 1em;
box-shadow: 0 0 0.5em #adadad;
background-color: #fff;

@media (max-width: 599px)  {
    flex-direction: column;
    width: 90%;
    margin: 1em 0;
  }
@media only screen and (min-width: 600px) {
  width: 90%;
}
`
const Left = styled.div`
width: 45%;
margin-right: 1em; 

@media (max-width: 599px)  {
    width: 100%;
    margin: 2em 0;
  }
`
const Right = styled.div`
width: 55%;
float: right;
margin: 0 1em;

display: flex;
align-items: center;

@media (max-width: 599px)  {
    width: 90%;
  }
`
const ImgCont = styled.div`
overflow: hidden;
border-radius: 0.5rem;
background-color: ${(props)=>props.bgcolor};
box-shadow: 0 0.5vh 0.3vh #adadad;

@media (max-width: 599px)  {
    width: 100%;
}
`
const TxtCont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;


height: 100%;

`
const TxtHeader = styled.div`
width: fit-content;

font-size: 1.2em;
font-family: Montserrat;
font-weight: 500;
padding: 0;
margin: 0;

//transition: 1s;  
//box-shadow: inset 0 -0.7vh ${(props)=>props.uColor};
`
const TxtBtn = styled.div`
margin: 5% 0 0 0;
padding: 0;
width: fit-content;
font-family: Poppins;
font-size: 1em;
font-weight: 700;
line-height: 1.75;
color: #000;
transition: 0.5s;
box-shadow: inset 0 -0.7vh ${(props)=>props.uColor};

display: flex;
align-items: center;
`

