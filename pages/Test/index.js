import { useState } from 'react';
import styled from 'styled-components'

import ContactUI from '@/comps/ContactUI';
import HeadNav from '@/comps/HeadNav'
import CaseP1 from '@/comps/CaseP1';
import CaseP3 from '@/comps/CaseP3';

export default function Home() {
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

  return <Container>
    <HeadNav />
      <Hero>
        <CaseP1 />
      </Hero>
      <Content id="projects">
        
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

@media (max-width: 768px) {
  width: 100%;
}

`
const Hero = styled.div`
  height: 91vh;
  display: flex;
  align-items: center;
  padding: 0 12.5vw;

  @media (max-width: 768px) {
    height: 90vh;
  }
`

const HeroH = styled.div`
  font-family: Poppins;
  font-size: 6vh;
  font-weight: 400;
  text-align: Left;
  max-width: 75vw;
  margin-bottom: 4vh;
  color: #122C5C;

  @media (max-width: 768px) {
    display: none;
  }
`

const HeroH2 = styled.div`
  font-family: Poppins;
  font-size: 5vh;
  font-weight: 400;
  text-align: Left;
  width: 100%;
  margin-bottom: 4vh;
  color: #122C5C;

  @media (min-width: 768px) {
    display: none;
  }
`
const HeroSpan = styled.span`
font-weight: 700;
color: #4169e1;
cursor: pointer;

&:hover {
  transition: 1s;
  box-shadow: inset 0 -0.7em #ffddcf;
}
`
const HeroSpan2 = styled.span`
font-weight: 700;
color: #4169e1;
cursor: pointer;

&:hover {
  transition: 1s;
  box-shadow: inset 0 -0.7em #ffddcf;
}
`

const HeroP = styled.div`
  font-family: Roboto;
  font-weight: 300;
  font-size: 3vh;
  display: flex;
  width: 50vw;
  text-align: left;
  margin-bottom: 8vh;
  line-height: 1.5;
  color: #858585;


  @media (max-width: 768px) {
    width: 100%;
    font-size: 2.25vh;
  }
`
const RowCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const Content = styled.div`
  min-height: 100vh;
  background-color: #f2f2f2;
  padding: 6vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProjectBtn = styled.div`
display: flex;
align-items: center;
font-family: Poppins;
font-size: 3vh;
font-weight: 500;


@media (max-width: 768px) {
font-size: 1.25em;
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