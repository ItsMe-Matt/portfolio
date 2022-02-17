import { useState } from 'react';
import styled from 'styled-components'

import ContactUI2 from '../../comps/ContactUI2';
import HeadNav from '../../comps/HeadNav';

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
          year="2021"
          name={P0.header}
          summary={P0.description}
          img="/static/CompassPlus/test1.png"
          type="1"

          />
        </RowCenter>
      </Hero>
      <Content id="projects">
        
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