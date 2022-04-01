import { useState } from 'react';
import styled from 'styled-components'
import Image from 'next/image';
import Head from 'next/head'

import ContactUI from '@/comps/ContactUI';
import CaseHP1 from '@/comps/CaseHP1'
import CaseHP3 from '@/comps/CaseHP3'
import CaseNav from '@/comps/CaseNav';
import CaseHero from '@/comps/CaseHero';
import CaseTable from '@/comps/CaseTable';
import HeadNav from '@/comps/HeadNav';
import OtherProj from '@/comps/OtherProj';
import TopBtn from '@/comps/TopBtn';
import Proj from '@/pages/data/Proj.json'

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
  
  var P0 = Proj[0]



  return (<div>

    <Head>
      <title> CompassPlus </title>
      <meta name='description' content="CompassPlus was an app designed to become Translink's official mobile app." />
    </Head>
    <Container>
    <HeadNav />
    <Hero>
      <RowCenter>
        <CaseHero
        role={P0.type}
        year="2021"
        name={P0.header}
        summary={P0.description}
        img="/static/CompassPlus/CompassPlus_Hero.png"
        HL={P0.headline}
        />
      </RowCenter>
      <TopBtn />
    </Hero>

    <Content>
      <CaseNav />
        <IDCont id='role' />
          <CaseHP1
          header='My Role'
          description='My role in this project was as a UI/UX designer. I worked alongside 2 other designers, 1 developer, and 2 hybrids (designer and developers). I mostly designed components and some screen layouts. I also designed the business cards and the website we would come to use for our app.'
          />
        

        <IDCont id='research' />
          <CaseHP1
          header='User Research'
          description='Through our user survey, we learned about some of our target audience’s pain points and needs, as well as how we should prioritize the development of certain features and functions. We also learned if there was a need and use for this app and the results of the user testing reflected that yes, there is a need and use for the app.
            '
          />

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
            src="/static/CompassPlus/CompassPlus_SurveyResults.jpg"
            width={1920}
            height={1080}
            layout="responsive"
            priority={true}
            alt="User Survey Results"
            />
          </ImgCont2>

          <ImgCont2>
            <Image
            src="/static/CompassPlus/CompassPlus_SurveyResults2.jpg"
            width={1920}
            height={1080}
            layout="responsive"
            priority={true}
            alt="User Survey Results 2"
            />
          </ImgCont2>
        </Div2>

        <Caption>
          These were the results from our user testing.
        </Caption>

        <IDCont id='prob' />
          <CaseHP1 
          header='Problem Identification'
          description='When riders first start using Translink, they have to know how to use Translink and its routes, get a compass card or ticket and make sure they have enough funds to get them to their destination. Even experienced riders may forget their compass card every now and then. The problem is that to learn how to use Translink, get a ticket or compass card, and fill up the funds of the card could sometimes be in different places. You would have to use different apps and go to different locations. Our app aims to solve that problem. '
          />

          <CaseHP1 
          header='Solution'
          description='Our solution is to develop a cross-platform application that allows you to find your route through Translink, buy tickets, and reload them for your trip, with the added feature of checking for live Translink updates. This would allow experienced riders to continue using Translink without losing time in case they are missing their compass card or if they are going to a place they are not familiar with. This would also allow new travelers to easily learn how to navigate through Translink with one convenient application.'
          />
  
        <IDCont id='design' />
          <CaseHP1
          header='Design Stage'
          description='Taking our goal into consideration, we began the design of our low fidelity and medium-fidelity prototype. I was personally in charge of the card page. For the low fidelity, it felt really strange and clunky. I initially drew inspiration from other mobile payment apps like Apple Pay or Google Pay. However, as designs and user testing progressed, I found that users much preferred a more Starbucks-styled card page, so I based the next design on that.'
          />

          <ImgCont3>
            <Image 
            src="/static/CompassPlus/CompassPlus_CardPage.png"
            width={4835}
            height={1764}
            layout="responsive"
            priority={true}
            />
          </ImgCont3>

          <Caption>
            The top row is my low fidelity, working its way up to my high fidelity. The bottom is the work of the rest of the team just before the final version.
          </Caption>

          
          <CaseHP1
          header=''
          description='As the designing progressed, another team member created their own version of my cards page, and after a vote and minor user testing, we decided to progress with their design instead. After that, I decided to move on to designing components. With designing components, there was once again a hand off and evolution of ideas and designs especially when we handed the designs over to the developers.'
          />

          <ImgCont3>
            <Image 
            src="/static/CompassPlus/CompassCard_Components.png"
            width={4718}
            height={2268}
            layout="responsive"
            priority={true}
            />
          </ImgCont3>

          <Caption>
            Once again the top row is the low fidelity. The middle row is my work and adaptations and the bottom row is how my teammates interpreted and evolved my designs.
          </Caption>
        
        <IDCont id='dev' />
          <CaseHP1
          header='Development Stage'
          description='At the beginning of the development stage, we realized that certain functions and elements could not be coded out due to the abilities of our coders and the lack of access provided by Translink. A good example would be the tappable NFC card. During the initial research, I found that Translink had no intention of releasing a Compass API or making the card digital. Because of that, we had to redesign some of our pages and components to fit, not only what we had, but what we could also handle skill-wise. During the Development stage, I designed a website on wordpress to track our progress and share details regarding the app and the team. Unfortunately, due to limited funds, the website was taken down earlier in 2022. I also designed the business cards at this stage. I also prepared for usability testing but that was also cut out due to time restraints.'
          />

        <Div2>
          <ImgCont2>
            <Image
            src="/static/CompassPlus/ibbydev.png"
            width={1896}
            height={1554}
            layout="responsive"
            priority={true}
            />
          </ImgCont2>


          <ImgCont2>
            <Image
            src="/static/CompassPlus/CompassPlus_BusinessCards.jpg"
            width={4530}
            height={3397}
            layout="responsive"
            priority={true}
            />
          </ImgCont2>
        </Div2> 

        <Caption>
          On the left, is the website I made for CompassPlus. On the right, is the business card I designed for each team member.
        </Caption>

        <IDCont id='end' />
          <CaseHP1 
          header='End Product'
          description='I am proud of the application the team was able to put together. I was also proud of the work I produced with this application. I had designed several components and one way or another, my designs had reached the final product of the app either completely intact or evolved into what is seen at the end.'
          />

        <EndImg>
          <ImgCont1>
            <Image 
            src="/static/CompassPlus/tapToScan.gif"
            width={222}
            height={480}
            layout="responsive"
            priority={true}
            />
          </ImgCont1>

          <ImgCont1>
            <Image 
            src="/static/CompassPlus/tripPlanner.gif"
            width={222}
            height={480}
            layout="responsive"
            priority={true}
            />
          </ImgCont1>

          <ImgCont1>
            <Image 
            src="/static/CompassPlus/manageCards.gif"
            width={222}
            height={480}
            layout="responsive"
            priority={true}
            />
          </ImgCont1>
        </EndImg>

        <OtherProj 
        next='Next Project'
        nextLink='/GivingHand'
        back='Home'
        />

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
@media (max-width: 599px)  {
  width: 100%;
}
`
const Hero = styled.div`
background-color: #fff;
height: 88vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
overflow: hidden;

background-image: url('/static/bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

@media (max-width: 599px)  {
  height: max-content;
  padding: 5vh 0;
}
@media (min-width: 481px ) and (max-width: 768px) {
  width: 100%;
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
background-color: #f7f7f7;
padding: 6vh 0;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 0 2vh 5vh #fff inset;

`
const IDCont = styled.div`
`
const ImgCont1 = styled.div`
width: 100%;
padding: 0 2%;
`
const ImgCont2 = styled.div`
width: 50%;

@media (max-width: 599px)  {
  width: 100%;  
}

`
const ImgCont3 = styled.div`
@media (max-width: 599px)  {
  width: 100%;
}

@media only screen and (min-width: 600px) {
  width: 80%;
}

@media only screen and (min-width: 992px) {
  width: 60%;
}
`
const Caption = styled.div`
font-size: 1em;
font-family: Poppins;
font-weight: 300;
line-height: 1.5;
text-align: center;
margin: 2vw 0 0 0;
color: #909090; 

@media (max-width: 599px)  {
  width: 90%
}

@media only screen and (min-width: 600px) {
  width: 80%;
}

@media only screen and (min-width: 992px) {
  width: 60%;
}
`
const Div2 = styled.div`
display: flex;
flex-direction: row;
width: 60vw;
background-color: #fff;

@media (max-width: 599px)  {
  width: 100%;
  flex-direction: column;
}

@media only screen and (min-width: 600px) {
  width: 80%;
}

@media only screen and (min-width: 992px) {
  width: 60%;
}
`
const EndImg = styled.div`

padding: 3% 10%;
display: flex;
justify-content: space-between;
margin-top: 1vw;
background-color: #122c5c;

@media (max-width: 599px)  {
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 3% 5%;
}

@media only screen and (min-width: 600px) {
  width: 100%;
  align-items: center;
}

@media only screen and (min-width: 992px) {
  width: 70%;
  padding: 3% 5%;
}
`
const FooterArea = styled.div`
`
