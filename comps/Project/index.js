import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Project({
    title = "Project 1",
    type = "graphic design",
    detail = "This worked well",
    img = "/projImg/testTitle.png",
    route="/",
    bgcolor="#a1f7cb",
}) {
    return <Link href={route}>
    <Container>
        <Left>
            <ImgCont bgcolor={bgcolor}>
                <Image src={img}
                width={2078}
                height={1178}
                layout='responsive'
                />
            </ImgCont> 
        </Left>
        <Right>
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
            </TxtCont>
        </Right>

    </Container>
    </Link> 

}

const Container = styled.div`
display: flex;
width: 60%;
margin: 0.5rem;
justify-content: space-between;
`

const Left = styled.div`
width: 50%;
margin-right: 1vw;
`
const Right = styled.div`
width: 50%;
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
font-size: 1.2vw;
font-weight: 300;
color: #000000;
margin: 0;
margin-top: 2vh;
color: #606060;
`

const TxtHeader = styled.p`
font-size: 1.7vw;
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
font-size: 1.2vw;
font-weight: 300;
line-height: 1.75;
color: #606060;
`

