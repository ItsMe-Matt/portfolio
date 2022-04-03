import { useState } from 'react';
import styled from 'styled-components'
import Link from 'next/link'
import { BsArrowDownShort } from 'react-icons/bs'
import Head from 'next/head'
import Image from 'next/image'

import ContactUI from '@/comps/ContactUI';
import HeadNav from '@/comps/HeadNav'
import ProjectCard from '@/comps/ProjectCard';

import Proj from "@/pages/data/Proj.json"
import GraphicCard from '@/comps/GraphicCard';



export default function Test() {
  var [ULColor, setULColor] = useState("transparent")
  var [ULColor2, setULColor2] = useState("transparent")
  var [S1Display, setS1Display] = useState("none")
  var [S2Display, setS2Display] = useState("none")
  var [S3Display, setS3Display] = useState("none")
  var [S1Color, setS1Color] = useState("#ffffff")
  var [S2Color, setS2Color] = useState("#ffffff")
  var [S3Color, setS3Color] = useState("#ffffff")


  //for contact comp
  function S1On(){
    setS1Display("#fff")
    setS1Color("#122c5c")
  }
  function S1Off(){
    setS1Display("none")
    setS1Color("#ffffff")
  }
  function S2On(){
    setS2Display("#fff")
    setS2Color("#122c5c")
  }
  function S2Off(){
    setS2Display("none")
    setS2Color("#ffffff")
  }
  function S3On(){
    setS3Display("#fff")
    setS3Color("#122c5c")
  }
  function S3Off(){
    setS3Display("none")
    setS3Color("#fff")
  }

  //for Project comp
  function hlOn(e) {
    setULColor(e)
  }
  function hlOff() {
    setULColor("transparent")
  }
  function hlOn2(e) {
    setULColor2(e)
  }
  function hlOff2() {
    setULColor2("transparent")
  }

  return <Container>
    <Head>
      <title> Matthew Zhao | UI/UX Designer + Graphic Designer </title>
      <meta name='description' content="Welcome to Matt&apos;s Portfolio. This will showcase Matt&apos;s awesome skills and experience with ui/ux design, graphic design, and frontend development." />
    </Head>
    <HeadNav />
      <Hero>
        <RowCenter>
        <HeroH>
        Hi, I’m <Link href="/About"><HeroSpan title="you can click me!">Matt</HeroSpan></Link>.<br />I am a UI/UX designer and graphic designer.
        </HeroH>

        <HeroH2>
        Hi, I’m <Link href="/About"><HeroSpan title="you can click me!">Matt</HeroSpan></Link>. <br /> I am a UI/UX designer and graphic designer.
        </HeroH2>

        <HeroP>
        I design cross platform applications and solutions with comfortable and familiar experiences as well as beautiful, attractive and comfortable visuals. I also have a background in frontend development.
        </HeroP>
        <Link href="/#projects">
          <ProjectBtn>
          See Projects
            <BsArrowDownShort size="4vh"/>
          </ProjectBtn>
        </Link>

        
        </RowCenter>
      </Hero>
      <Content id="projects">
      <ContentTitle>
          Case Studies
        </ContentTitle>
        <Div2Proj>
          <ProjectCard 
            title={Proj[0].header}
            img={Proj[0].titleImg}
            headline={Proj[0].headline}
            route={Proj[0].route}
            bgcolor={Proj[0].color}
            hOn = {()=>hlOn(Proj[0].color)}
            hOff = {hlOff}
            uColor={ULColor}
          />
          <ProjectCard 
            title={Proj[2].header}
            img={Proj[2].titleImg}
            headline={Proj[2].headline}
            route={Proj[2].route}
            bgcolor={Proj[2].color}
            hOn = {()=>hlOn2(Proj[2].color)}
            hOff = {hlOff2}
            uColor={ULColor2}
          />
        </Div2Proj>

        <ContentTitle>
          Graphic Works
        </ContentTitle>

        <Div3Graphic>
          <GRow>
            <GraphicCard
            imgsrc='/static/projImg/gundamTitle.png'
            tools="Photoshop"
            />
            <GraphicCard
            imgsrc='/static/projImg/BlackberryTitle.png'
            tools="Illustrator"
            />
          </GRow>
          <GRow>
            <GraphicCard
            imgsrc='/static/projImg/ThePromsTitle2.png'
            tools="Illustrator"
          />
          </GRow>




        </Div3Graphic>
      </Content>

      <FooterArea id='contact'>
        <ContactUI 
          onS1Off={()=>S1Off()}
          onS1Over={()=>S1On()}
          S1D={S1Display}
          S1C={S1Color}

          onS2Off={()=>S2Off()}
          onS2Over={()=>S2On()}
          S2D={S2Display}
          S2C={S2Color}

          onS3Off={()=>S3Off()}
          onS3Over={()=>S3On()}
          S3D={S3Display}
          S3C={S3Color}
        />
      </FooterArea>
    </Container>
  
}



const Container = styled.div`
width: 100%;
`
const Hero = styled.div`
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url('/static/bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  width: 100%;
`

const HeroH = styled.div`
  font-family: Montserrat;
  font-size: 3.25em;
  font-weight: 900;
  margin-bottom: 4vh;
  color: #122C5C;

@media only screen and (max-width: 992px) {
  display: none;
}

@media only screen and (min-width: 992px) {
  width: 70vw;
}
`

const HeroH2 = styled.div`
  font-family: Montserrat;
  font-size: 3.25em;
  font-weight: 900;
  margin-bottom: 4vh;
  color: #122C5C;

@media (max-width: 599px)  {
  width: 90vw;
  font-size: 2em;
}

@media only screen and (min-width: 600px) {
  width: 90vw;

}

@media only screen and (min-width: 992px) {
  display: none;
}
`

const HeroSpan = styled.span`
color: #4169e1;
box-shadow: inset 0 -0.15em #ffddcf;
cursor: pointer;

&:hover {
  transition: 1s;
  box-shadow: inset 0 -0.8em #ffddcf;
}
`

const HeroP = styled.div`
font-family: Poppins;
font-weight: 300;
font-size: 1.25em;
line-height: 1.5;

color: #505050;
display: flex;
margin-bottom: 8vh;
width: 70%;

@media (max-width: 599px)  {
  width: 80%;
  font-size: 1em;
}

`
const ProjectBtn = styled.div`
display: flex;
align-items: center;
font-family: Montserrat;
font-size: 2.3vh;
font-weight: 500;

@media (max-width: 599px)  {
font-size: 1.25em
}

@media only screen and (min-width: 600px) {
font-size: 1.3em;
}

`
const RowCenter = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;

@media (max-width: 991px)  {
  width: 90%;
}

@media only screen and (min-width: 992px) {
  width: 70%;
}
`

const Content = styled.div`
background-color: #f7f7f7;
padding: 10vh 0;
display: flex;
flex-direction: column;
align-items: center;
`

const ContentTitle = styled.div`
font-family: Montserrat;
font-weight: 500;
font-size: 1.5em;
margin: 5vh 0 3vh 0;

@media (max-width: 599px)  {
  width: 90%;
}

@media only screen and (min-width: 600px) {
  width: 90%;
}

@media only screen and (min-width: 992px) {
  width: 70%;
}
`
const Div2Proj = styled.div`
min-height: 10vh;
display: flex;

@media (max-width: 599px)  {
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
}

@media only screen and (min-width: 600px) {
  width: 90%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media only screen and (min-width: 992px) {
  width: 70%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
`

const Div3Graphic = styled.div`
min-height: 10vh;
display: flex;

@media (max-width: 599px)  {
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
}

@media only screen and (min-width: 600px) {
  width: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media only screen and (min-width: 992px) {
  width: 70%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
`
const GRow = styled.div`
display: flex;
justify-content: center;

@media (max-width: 599px)  {
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
}

@media only screen and (min-width: 600px) {

}

@media only screen and (min-width: 992px) {

}
`

const FooterArea = styled.div`
`

/*
<Project2
          title={Proj[1].header}
          type={Proj[1].type}
          img={Proj[1].titleImg}
          detail={Proj[1].description}
          route={Proj[1].route}
          bgcolor={Proj[1].color}
          hOn = {()=>hlOn2(Proj[1].color)}
          hOff = {hlOff2}
          uColor={ULColor2}
          />
*/

/*
        <Project
          title={Proj[3].header}
          type={Proj[3].type}
          img={Proj[3].titleImg}
          detail={Proj[3].description}
          route={Proj[3].route}
          bgcolor={Proj[3].color}
          hOn = {()=>hlOn(Proj[3].color)}
          hOff = {hlOff}
          uColor={ULColor}
          />
*/