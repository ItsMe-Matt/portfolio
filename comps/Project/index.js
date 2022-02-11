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
    const [onObj, setOnObj] = useState(false)
    
    if (onObj === false) {
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
}

const Container = styled.div`
display: flex;
width: 75%;
margin: 0.5rem;
`

const Left = styled.div`
width: 60%;
margin-right: 0.9vw;
`
const Right = styled.div`
width: 40%;
float: right;
margin-left: 0.9vw;    
`
const ImgCont = styled.div`
overflow: hidden;
border-radius: 0.5rem;
background-color: ${(props)=>props.bgcolor}
`

const TxtCont = styled.div`

`
const TxtType = styled.p`
font-family: Zilla Slab;
font-size: 1.5vw;
font-weight: 300;
color: #000000;
`

const TxtHeader = styled.p`
font-size: 2vw;
font-family: Zilla Slab;
font-weight: 700;
padding: 0;
margin: 0;

`

const TxtP = styled.p`
font-family: Roboto;
font-size: 1.2vw;
font-weight: 300;
line-height: 1.75;
color: #606060;
`

