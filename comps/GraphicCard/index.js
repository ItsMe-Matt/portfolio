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

width: 49%;
margin: 0.5em;
cursor: pointer;
padding: 0.75em;
border-radius: 1em;
box-shadow: 0 0 0.5em #adadad;
background-color: #fff;

@media (max-width: 599px)  {
    width: 90%;
}

@media only screen and (min-width: 600px) {

}

@media only screen and (min-width: 992px) {

}
`
const ImgCont = styled.div`
margin: 1%;
width: 100%;
border-radius: 1em;
overflow: hidden;
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
