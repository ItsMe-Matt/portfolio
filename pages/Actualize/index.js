import { useState } from 'react';
import styled from 'styled-components'
import Image from 'next/image';

import ContactUI from '../../comps/ContactUI';
import HeadNav from '../../comps/HeadNav';
import CaseNav from '../../comps/CaseNav';
import TextBox from '../../comps/TextBox';
import TextBox2 from '../../comps/TextBox2';
import TextBox3 from '../../comps/TextBox3';
import OtherProj from '../../comps/OtherProj';

import Video from '../../comps/Video';


import ProjTable from '../../comps/ProjTable';

import Proj from '../data/Proj.json'


export default function CompassPlusUI() {
  var [S1Display, setS1Display] = useState("none")
  var [S2Display, setS2Display] = useState("none")
  var [S3Display, setS3Display] = useState("none")

  var P0 = Proj[1]

//For Contact Area
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

  return (<div>
    <Container>
    <HeadNav />
      <Hero>
        <RowCenter>
          <ProjTable
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
        <CaseNav />
        <Cat>
          <IDCont id='problemId'>
            <TextBox
              header='Problem Identification'
              description='In these changing times, the job market is in a state of fluctuation. Many individuals are experiencing major changes in their careers and will need support to re-establish themselves.'
            />
          </IDCont>
          <ImgCont1>
            <Image 
              src='/static/Actualize/whiteboard01.png'
              width={1137}
              height={530}
              layout="responsive"
            />
          </ImgCont1>
          
          <TextBox
            header='Objectives'
            description='Our app aims to help these individuals by connecting them with a professional career and financial advisors that can empathize and understand them, and use their expertise to help construct personalized plans for the future.'
          />

          <TextBox3
          Head='User Persona'
          Description='Phillip Chan 
          54 years old
          Layed off from his full-time server job during the pandemic
          Is left jobless after the pandemic, and searching for a better job
          Open the app to look for a career advisor. He is met with the first-time setup, and puts in all his info. After doing so, he lands on the explore page, and decides to look for one best fit for him by looking through advisor profiles and comparing. He flips through some advisors, and lands on Thomas Edwards, who notes in his description that he specializes in helping people reintegrate into new job markets.
          '
          />

          <TextBox 
            header='User Journey'
            description=''
          />
          <Video embedId='ar5WlWITb7s'/>

          <TextBox 
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
width: 100vw;
`


const FooterArea = styled.div`
  padding: 5vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`