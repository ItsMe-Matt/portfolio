import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Project2({
    title = "Project 1",
    type = "graphic design",
    detail = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum tempus.",
    img = "/projImg/testTitle2.png",
    route="/",
    bgcolor="#8a4825",
}) {
    const [onHover, setOnHover] = useState(false)
    console.log("test")

    return <Link href={route}>
    <Container 

    >
        <Left>
            <TxtCont>
                <TxtType>
                    {type}
                </TxtType>
                <TxtHeader>
                    {title}
                </TxtHeader>
                <TxtP>
                    {detail}
                </TxtP>
                <TxtBtn>
                    View
                </TxtBtn>
            </TxtCont>            
        </Left>
        <Right>
            <ImgCont bgcolor={bgcolor}>
                <Image src={img}
                width={1080}
                height={1920}
                layout='responsive'
                />
            </ImgCont> 
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
width: 45%;
float: right;
margin-right: 1vw;

display: flex;
align-items: center;
`
const Right = styled.div`
width: 55%;
margin-left: 1vw; 
`
const ImgCont = styled.div`
overflow: hidden;
border-radius: 0.5rem;
background-color: ${(props)=>props.bgcolor}
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
const TxtHeader = styled.p`
font-size: 1.8vw;
font-family: Poppins;
font-weight: 700;
padding: 0;
margin: 0;
margin-top: 1vh;
margin-bottom: 2vh;
`
const TxtP = styled.p`
margin: 0;
font-family: Roboto;
font-size: 1vw;
font-weight: 300;
line-height: 1.75;
color: #606060;
`
const TxtBtn = styled.p`
margin: 0;
margin-top: 2vh;

font-family: Poppins;
font-size: 1.4vw;
font-weight: 700;
line-height: 1.75;
color: #000;
`

