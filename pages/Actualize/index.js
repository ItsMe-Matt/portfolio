import { useState } from 'react';
import styled from 'styled-components'
import Image from 'next/image';

import ContactUI from '@/comps/ContactUI';
import HeadNav from '@/comps/HeadNav';
import CaseNav from '@/comps/CaseNav';
import OtherProj from '@/comps/OtherProj';
import TopBtn from '@/comps/TopBtn'
import CaseHP1 from '@/comps/CaseHP1';

import Video from '@/comps/Video';


import CaseTable from '@/comps/CaseTable';

import Proj from '@/pages/data/Proj.json'
import CaseHero from '@/comps/CaseHero';


export default function CompassPlusUI() {
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

  var P0 = Proj[1]

  return (<div>
    <Container>
    <HeadNav />
      <Hero>
        <RowCenter>
          <CaseHero
          role={P0.type}
          year="2020"
          name={P0.header}
          summary={P0.description}
          img="/static/Actualize/header.png"
          imgType="2"
          HL={P0.headline}
          />
        </RowCenter>
      </Hero>
      
      <Content>
      <TopBtn />
        
        <Cat>
          <IDCont id='problemId'>
            <CaseHP1
              header='Problem Identification'
              description='In these changing times, the job market is in a state of fluctuation. Many individuals are experiencing major changes in their careers and will need support to re-establish themselves.'
            />
          </IDCont>
         
          
          <CaseHP1
            header='Objectives'
            description='Our app aims to help these individuals by connecting them with a professional career and financial advisors that can empathize and understand them, and use their expertise to help construct personalized plans for the future.'
          />
          <ImgCont1>
            <Image 
              src='/static/Actualize/whiteboard01.png'
              width={1137}
              height={530}
              layout="responsive"
            />
          </ImgCont1>
          <Video embedId='ar5WlWITb7s'/>

          <CaseHP1 
            header='Conclusion'
            description='This was the first app that I actually designed. With the help of my mentors at Game of Apps, I learned how to create a mobile application that felt familiar and comfortable without having to change the behavior and expectations of the user. To me, this is what design is about, doing what you need to get done while feeling comfortable, free, and familiar while doing it.
            '
          />


        <OtherProj />
        </Cat>
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
    </div>)
}



const Container = styled.div`
`
const Hero = styled.div`
  background-color: #fff;
  height: 91vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

  box-shadow: 0 2vh 5vh #fff inset;
`
const IDCont = styled.div`
`
const Cat = styled.div`
padding: 3vh 0;
display: flex;
flex-direction: column;
align-items: center;
`

const ImgCont1 = styled.div`
width: 70vw;

@media (max-width: 768px) {
  width: 100%;
  }
`


const FooterArea = styled.div`

`