import { useState } from 'react';
import styled from 'styled-components'
import Image from 'next/image';

import ContactUI from '../../comps/ContactUI';
import HeadNav from '../../comps/HeadNav';

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


  return (<div>
    <Container>
    <HeadNav />
      <Hero>
        <RowCenter>
            <HeadLeft>
                <ImgCont>
                    <Image 
                    src="/static/About/MatthewZhao_Profile.jpg"
                    width={1065}
                    height={1065}
                    layout="responsive"
                    priority={true}
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
@media (max-width: 599px)  {
  width: 100%;
}
`
const Hero = styled.div`
  background-color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 599px)  {
    height: max-content;
    margin: 10vh 0;
  }

  @media only screen and (min-width: 600px) {
    height: fit-content;
    padding: 10% 0;
  }
  
  @media only screen and (min-width: 992px) {
    height: 91vh;
  }
`

const RowCenter = styled.div`
  display: flex;

  align-items: center;


  @media (max-width: 599px)  {
    flex-direction: column;
    width: 100%;
    padding: 0 5%;
  }
  @media only screen and (min-width: 600px) {
    width: 80%;
    flex-direction: column;
  }
  @media only screen and (min-width: 992px) {
    width: 70%;
    justify-content: space-between;
    flex-direction: row;
  }
`

const HeadLeft = styled.div`
@media (max-width: 599px)  {
  width: 100%;
  margin-bottom: 4vh;
}

@media only screen and (min-width: 600px) {
  width: 100%;
  flex-direction: column;
  margin-bottom: 5vh;
}
@media only screen and (min-width: 992px) {
  width: 35%;
}

`
const HeadRight = styled.div`
@media (max-width: 599px)  {
  width: 100%;
}

@media only screen and (min-width: 600px) {
  width: 100%;

}
@media only screen and (min-width: 992px) {
  width: 60%;

}
`

const ImgCont = styled.div`
width: 100%;
border-radius: 100vw;
overflow: hidden;
box-shadow: 0 0 1vw;

@media (max-width: 599px)  {
  width: 50%;
}

@media only screen and (min-width: 600px) {
  width: 70%;

}
@media only screen and (min-width: 992px) {
  width: 100%;

}
`
const TxtHeader = styled.div`
margin: 0;
font-family: Montserrat;
font-size: 2.5em;
font-weight: 900;
line-height: 1.75;
margin: 0 2vw;

`
const TxtCont = styled.div`
margin: 0;
font-family: Poppins;
font-size: 1.2em;
font-weight: 300;
line-height: 1.75;
color: #606060;
margin: 0 2vw;

@media (max-width: 599px)  {
  font-size: 1.1em;
}

`
const FooterArea = styled.div`
`