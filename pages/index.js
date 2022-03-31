import { useState } from 'react';
import styled from 'styled-components'
import Link from 'next/link'
import { BsArrowDownShort } from 'react-icons/bs'
import Head from 'next/head'

import ContactUI from '@/comps/ContactUI';
import HeadNav from '@/comps/HeadNav'
import ProjectCard from '@/comps/ProjectCard';

import Proj from "@/pages/data/Proj.json"


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
      <title> Matt&apos;s Portfolio </title>
      <meta name='description' content="Welcome to Matt&apos;s Portfolio. This will showcase Matt&apos;s awesome skills and experience with ui/ux design, graphic design, and frontend development." />
    </Head>
    <HeadNav />
      <Hero>
        <RowCenter>
        <HeroH>
        Hi, I’m <Link href="/About"><HeroSpan title="you can click me!">Matt</HeroSpan></Link> and I am a UI/UX designer.
        </HeroH>

        <HeroP>
        I design beautiful cross platform applications and solutions with comfortable and familiar experiences. I also have a background in graphic design and frontend development.
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

@media (max-width: 480px)  {
  width: 100%;
}

`
const Hero = styled.div`
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12.5vw;
  
  background-image: url('/static/bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 480px)  {
    height: 90vh;
    padding: 0 7%;
  }
  @media (min-width: 481px ) and (max-width: 768px) {
    padding: 0 5%;
    width: 100%;
}
`

const HeroH = styled.div`
  font-family: Montserrat;
  font-size: 3.25em;
  font-weight: 900;
  width: 70vw;
  margin-bottom: 4vh;
  color: #122C5C;

  @media (max-width: 480px)  {
    font-size: 2em;
    width: 100%;
  }
  @media (min-width: 481px ) and (max-width: 768px) {
    width: 90%;
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
width: 50vw;
margin-bottom: 8vh;

@media (max-width: 480px)  {
  width: 100%;
  font-size: 1em;
}

`
const ProjectBtn = styled.div`
display: flex;
align-items: center;
font-family: Montserrat;
font-size: 2.3vh;
font-weight: 500;

@media (max-width: 480px)  {
font-size: 1.25em;
}

`
const RowCenter = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
`

const Content = styled.div`
background-color: #f7f7f7;
padding: 10vh 0;
display: flex;
flex-direction: column;
align-items: center;
`
const Div2Proj = styled.div`
width: 70%;
min-height: 10vh;
display: flex;

@media (max-width: 480px) {
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
}
@media (min-width: 481px ) and (max-width: 768px) {
  width: 90%;
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