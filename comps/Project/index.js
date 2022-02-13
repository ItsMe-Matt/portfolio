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
    console.log(img)

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
width: 60%;
margin: 0.5rem;
cursor: pointer;
`
const Left = styled.div`
width: 55%;
float: right;
margin-right: 3vw;

display: flex;
align-items: center;
`
const Right = styled.div`
width: 45%;
margin-left: 3vw; 
`
const ImgCont = styled.div`
overflow: hidden;
border-radius: 0.5rem;
background-color: ${(props)=>props.bgcolor};
box-shadow: 0 0.5vh 0.3vh #adadad;
`
const TxtCont = styled.div`
`
const TxtType = styled.p`
font-family: Poppins;
font-size: 1vw;
font-weight: 300;
color: #000000;
margin: 0;
margin-top: 2vh;
color: #606060;
`
const TxtHeader = styled.div`
width: fit-content;


font-size: 1.8vw;
font-family: Poppins;
font-weight: 700;
padding: 0;
margin: 0;
margin-top: 1vh;
margin-bottom: 2vh;

transition: 0.5s;  
box-shadow: inset 0 -0.7vh ${(props)=>props.uColor};


`
const TxtP = styled.p`
margin: 0;
font-family: Roboto;
font-size: 1.1vw;
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
font-size: 1.2vw;
font-weight: 700;
line-height: 1.75;
color: #000;

transition: 0.5s;
box-shadow: inset 0 -0.7vh ${(props)=>props.uColor};
`

