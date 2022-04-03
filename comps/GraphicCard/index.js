import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GrFormNextLink } from 'react-icons/gr'

export default function GraphicCard({
    imgsrc="/static/projImg/ThePromsTitle2.png",
    tools="yes"
}) {
   

    return <Container>
            <ImgCont>
              <Image 
              src={imgsrc}
              height={1440}
              width={1080}
              fill="responsive"
              />
            </ImgCont>
            
            <InfoCont>
                <RoleCont>
                <Bold>Tools Used:</Bold> {tools}
                </RoleCont>
            </InfoCont>



    </Container>
}


const Container = styled.div`
display: flex;
flex-direction: column;

align-items: center;

margin: 8px;
padding 0 0 8px 0;
border-radius: 1em;
box-shadow: 0 0 0.5em #adadad;
background-color: #fff;

@media (max-width: 599px)  {
    width: 90%;
}

@media only screen and (min-width: 600px) {
    width: 49%;
}

@media only screen and (min-width: 992px) {
    width: 100%;
}
`
const ImgCont = styled.div`
width: 100%;

overflow: hidden;
border-radius: 16px 16px 0 0;
`
const InfoCont = styled.div`

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
