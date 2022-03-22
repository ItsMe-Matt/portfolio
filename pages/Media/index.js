import { useState } from 'react';
import styled from 'styled-components'
import Image from 'next/image';

import ContactUI from '../../comps/ContactUI';
import HeadNav from '../../comps/HeadNav';
import TopBtn from '../../comps/TopBtn';
import ProjTable from '../../comps/ProjTable';

import Proj from '../data/Proj.json'



export default function MediaUI() {
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


  var P0 = Proj[0]



  return (<div>
    <Container>
    <HeadNav />
      <Hero>
        <RowCenter>
          <ProjTable
          role={P0.type}
          year="2021"
          name={P0.header}
          summary={P0.description}
          img="/static/CompassPlus/head.png"
          imgW='1080'
          imgH='1980'
          HL={P0.headline}
          />
        </RowCenter>
        <TopBtn />
      </Hero>

      <Content>
       
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
@media (max-width: 768px) {
width: 100%;
}
`
const Hero = styled.div`
  background-color: #fff;
  height: 91vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    height: max-content;
    padding: 5vh 0;
    }
`
const RowCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Content = styled.div`
  min-height: 100vh;
  background-color: #f2f2f2;
  padding: 3vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0 2vh 5vh #fff inset;
`
const IDCont = styled.div`
`
const Cat = styled.div`
margin: 3vh 0;
display: flex;
flex-direction: column;
align-items: center;
`
const ImgCont1 = styled.div`
width: 30%;
box-shadow: 0 0 1vw #75a6ff;
margin: 0 5%

@media (max-width: 768px) {
  width: 100%;  
}
`
const ImgCont2 = styled.div`
width: 50%;

@media (max-width: 768px) {
  width: 100%;  
}
`
const ImgCont3 = styled.div`
width: 70vw;
margin: 3vw 0 0 0;

@media (max-width: 768px) {
  width: 100%;  
}
`

const Caption = styled.div`
width: 70vw;

font-size: 1em;
font-family: Roboto;
font-weight: 300;
line-height: 1.5;
text-align: center;
margin: 2vw 0 0 0;
color: #909090; 
`
const Div2 = styled.div`
display: flex;
flex-direction: row;
width: 70vw;

@media (max-width: 768px) {
  width: 100%;
  flex-direction: column;

}
`

const EndImg = styled.div`
width: 100%;
padding: 3% 15%;
display: flex;
justify-content: space-between;
margin-top: 1vw;
background-color: #122c5c;
`
const FooterArea = styled.div`

`

/*
<Video embedId='ar5WlWITb7s'/>
*/