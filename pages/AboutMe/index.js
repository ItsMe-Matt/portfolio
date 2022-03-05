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
                I am Matt
            </HeadRight>
        </RowCenter>
      </Hero>

      <Content>
    
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
width: 65%;
`

const ImgCont = styled.div`
width: 100%;
border-radius: 100vw;
overflow: hidden;
`

const FooterArea = styled.div`
  padding: 5vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`