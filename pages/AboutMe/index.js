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
            <HeadLeft>
                <ImgCont>
                    <Image 
                    src="/static/profileImg.jpg"
                    width={1065}
                    height={1065}
                    layout="responsive"
                    />
                </ImgCont>
            </HeadLeft>

            <HeadRight>
                <TxtHeader>
                Hey all, <br />
                </TxtHeader>
                <TxtCont>
                I am Matthew Zhao, a D3 graduate from BCIT. I grew up in the Greater Vancouver Area and grew my passion for UI/UX design in high school through the Game of Apps program. After graduation, I went to BCIT to continue to sharpen and build up my skills. 
                <br /> <br />
                Outside of school and work, I enjoy building plastic models and eating out with friends. I enjoy the occasional hike and day of exploring the city.

                </TxtCont>
            </HeadRight>
        </RowCenter>
      </Hero>
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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 75vw;
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

const HeadLeft = styled.div`
width: 35%;

`
const HeadRight = styled.div`
width: 60%;
`

const ImgCont = styled.div`
width: 100%;
border-radius: 100vw;
overflow: hidden;
box-shadow: 0 0 1vw;
`
const TxtHeader = styled.div`
margin: 0;
font-family: Poppins;
font-size: 2.5em;
font-weight: 700;
line-height: 1.75;
margin: 0 2vw;

`
const TxtCont = styled.div`
margin: 0;
font-family: Roboto;
font-size: 1.2em;
font-weight: 300;
line-height: 1.75;
color: #606060;
margin: 0 2vw;

`
const FooterArea = styled.div`
`