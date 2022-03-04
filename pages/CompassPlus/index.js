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
import CaseTable from '../../comps/CaseTable';


export default function CompassPlusUI() {
  var [S1Display, setS1Display] = useState("none")
  var [S2Display, setS2Display] = useState("none")
  var [S3Display, setS3Display] = useState("none")

  var P0 = Proj[0]

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
          img="/static/CompassPlus/header.png"
          imgType="1"
          HL={P0.headline}
          />
        </RowCenter>
      </Hero>

      <Content>
        <CaseNav />
        <Cat>
          <IDCont id='role'>
            <TextBox3
              header='My Role'
              description='My role in this project was as a UI/UX designer. I worked alongside 2 other designers, 1 developer, and 2 hybrids (designer and developers). I mostly designed components and some screen layouts. I also designed the business cards and the website we would come to use for our app.'
            />
          </IDCont>

          <IDCont id='research'>
            <TextBox
              header='User Research'
              description='Through our user survey, we learned about some of our target audience’s pain points and needs, as well as how we should prioritize the development of certain features and functions. We also learned if there was a need and use for this app and the results of the user testing reflected that yes, there is a need and use for the app.
              '
            />
          </IDCont>

          <CaseTable 
          LHead='Pain Points'
          LP1='Forgetting their Compass Card at home and having to buy a new one to be able to use transit'
          LP2='Realizing that you have a low balance on your card and needing to get in a physical queue to reload despite being low on time.'
          LP3='Having to use different apps for navigation and interruption alerts.'

          RHead='Needs'
          RP1='To have your compass card always with you through your phone'
          RP2='To be able to reload your compass card whenever and wherever you are'
          RP3='To manage everything transit-related in one convenient app'
          />
          <Div2>
            <ImgCont2>
              <Image
              src="/static/CompassPlus/UserSurveyResults1.jpg"
              width={1920}
              height={1080}
              layout="responsive"
              />
            </ImgCont2>

            <ImgCont2>
              <Image
              src="/static/CompassPlus/UserSurveyResults2.jpg"
              width={1920}
              height={1080}
              layout="responsive"
              />
            </ImgCont2>
          </Div2>

        <IDCont id='prob'>
          <TextBox3 
          header='Problem Identification'
          description='When riders first start using Translink, they have to know how to use Translink and its routes, get a compass card or ticket and make sure they have enough funds to get them to their destination. Even experienced riders may forget their compass card every now and then. The problem is that to learn how to use Translink, get a ticket or compass card, and fill up the funds of the card could sometimes be in different places. You would have to use different apps and go to different locations. Our app aims to solve that problem. '
          />

          <TextBox3 
          header='Solution'
          description='Our solution is to develop a cross-platform application that allows you to find your route through Translink, buy tickets, and reload them for your trip, with the added feature of checking for live Translink updates. This would allow experienced riders to continue using Translink without losing time in case they are missing their compass card or if they are going to a place they are not familiar with. This would also allow new travelers to easily learn how to navigate through Translink with one convenient application.
          '
          />
        </IDCont>
          

          



          <TextBox3 
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
  overflow: hidden;
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
margin: 3vh 0;
display: flex;
flex-direction: column;
align-items: center;
`

const ImgCont1 = styled.div`
width: 98vw;
`
const Div2 = styled.div`
display: flex;
flex-direction: row;
background-color: red;
width: 98vw;
`
const ImgCont2 = styled.div`
width: 50%;
`


const FooterArea = styled.div`
  padding: 5vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

/*
<Video embedId='ar5WlWITb7s'/>
*/