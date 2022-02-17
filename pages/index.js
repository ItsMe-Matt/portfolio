import { useState } from 'react';
import styled from 'styled-components'

import ContactUI2 from '../comps/ContactUI2';
import ContentHead from "../comps/ContentHead";
import HeadNav from '../comps/HeadNav'
import Project from "../comps/Project";
import Project2 from "../comps/Project2";

import Social from '../comps/Social'

import Proj from "./data/Proj.json"


export default function Home() {
  var [ULColor, setULColor] = useState("transparent")
  var [ULColor2, setULColor2] = useState("transparent")
  var [S1Display, setS1Display] = useState("none")
  var [S2Display, setS2Display] = useState("none")
  var [S3Display, setS3Display] = useState("none")

  function S1On(){
    setS1Display("flex")
  }
  function S1Off(){
    setS1Display("none")
  }
  function S2On(){
    setS2Display("flex")
  }
  function S2Off(){
    setS2Display("none")
  }
  function S3On(){
    setS3Display("flex")
  }
  function S3Off(){
    setS3Display("none")
  }
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

  return (<div>
    <Container>
    <HeadNav />
      <Hero>
        <RowCenter>
        <HeroH>
        Hi, I’m Matt and I am an UI/UX designer and a frontend developer.
        </HeroH>
        <HeroP>
        I design and develop cross platform applications and solutions.
        </HeroP>
        <Social />
        </RowCenter>
      </Hero>
      <Content id="projects">
        <ContentHead title="Project and Works"/>
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

        <Project
          title={Proj[0].header}
          type={Proj[0].type}
          img={Proj[0].titleImg}
          detail={Proj[0].description}
          route={Proj[0].route}
          bgcolor={Proj[0].color}
          hOn = {()=>hlOn(Proj[0].color)}
          hOff = {hlOff}
          uColor={ULColor}
          />

      </Content>
      <FooterArea id='contact'>
        <ContactUI2 
          onS1Off={()=>S1Off()}
          onS1Over={()=>S1On()}
          S1D={S1Display}

          onS2Off={()=>S2Off()}
          onS2Over={()=>S2On()}
          S2D={S2Display}

          onS3Off={()=>S3Off()}
          onS3Over={()=>S3On()}
          S3D={S3Display}
        />
      </FooterArea>
    </Container>
    </div>)
}



const Container = styled.div`
cursor: context-menu
`
const Hero = styled.div`
  background-color: #fff;
  height: 91vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeroH = styled.div`
  font-family: Poppins;
  font-size: 6vh;
  font-weight: 400;
  text-align: center;
  max-width: 75vw;
  margin-bottom: 4vh;
  color: #122C5C;
`

const HeroP = styled.div`
  font-family: Roboto;
  font-weight: 300;
  font-size: 3.5vh;
  display: flex;
  max-width: 50vw;
  text-align: center;
  margin-bottom: 8vh;
`
const RowCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  min-height: 100vh;
  background-color: #f7faff;
  padding: 3vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0 2vh 5vh #fff inset
`

const FooterArea = styled.div`
  padding: 5vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`