import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Project({
    title = "Project 1",
    type = "graphic design",
    detail = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum tempus.",
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
                <TxtType>
                    {type}
                </TxtType>
                <TxtHeader uColor={uColor}>
                    {title}
                </TxtHeader>
                <TxtP>
                    {detail}
                </TxtP>
                <TxtBtn uColor={uColor}>
                    View
                </TxtBtn>
            </TxtCont>         
        </Right>
    </Container>
    </Link> 
} 


const Container = styled.div`
display: flex;
width: 55%;
margin: 0.5em;
cursor: pointer;
padding: 1em;
border-radius: 1em;

@media (max-width: 480px)  {
    flex-direction: column;
    width: 80%;
  }
  @media (min-width: 481px ) and (max-width: 768px) {
    flex-direction: column;
}
`
const Left = styled.div`
width: 45%;
margin-right: 2em; 

@media (max-width: 480px)  {
    width: 100%;
    margin: 2em 0;
  }
  @media (min-width: 481px ) and (max-width: 768px) {
    width: 100%;
}
`
const Right = styled.div`
width: 55%;
float: right;
margin: 0 2em;

display: flex;
align-items: center;

@media (max-width: 480px)  {
    width: 100%;
  }

  @media (min-width: 481px ) and (max-width: 768px) {
    width: 100%;
}
`
const ImgCont = styled.div`
overflow: hidden;
border-radius: 0.5rem;
background-color: ${(props)=>props.bgcolor};
box-shadow: 0 0.5vh 0.3vh #adadad;

@media (max-width: 480px)  {
    width: 100%;
  }
  @media (min-width: 481px ) and (max-width: 768px) {
    width: 90%;
}
`
const TxtCont = styled.div`
`
const TxtType = styled.p`
font-family: Montserrat;
font-size: 1em;
font-weight: 500;
color: #000000;
margin: 0;
margin-top: 2vh;
color: #606060;

`
const TxtHeader = styled.div`
width: fit-content;


font-size: 1.5em;
font-family: Montserrat;
font-weight: 700;
padding: 0;
margin: 0;
margin-top: 1vh;
margin-bottom: 2vh;

transition: 1s;  
box-shadow: inset 0 -0.7vh ${(props)=>props.uColor};


`
const TxtP = styled.p`
margin: 0;
font-family: Poppins;
font-size: 1.15em;
font-weight: 300;
line-height: 1.75;
color: #606060;
`
const TxtBtn = styled.div`
margin: 0;
margin-top: 2vh;
padding-bottom: 0;

width: fit-content;

font-family: Poppins;
font-size: 1em;
font-weight: 700;
line-height: 1.75;
color: #000;

transition: 0.5s;
box-shadow: inset 0 -0.7vh ${(props)=>props.uColor};
`

