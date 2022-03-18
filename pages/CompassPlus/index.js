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
import TopBtn from '../../comps/TopBtn';
import Video from '../../comps/Video';


import ProjTable from '../../comps/ProjTable';

import Proj from '../data/Proj.json'
import CaseTable from '../../comps/CaseTable';


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

  //for Project comp
  function hlOn(e) {
    setULColor(e)
  }
  function hlOff() {
    setULColor("transparent")
  }
  function hlOn2(e) {
    setULColor2(e)
  }
  function hlOff2() {
    setULColor2("transparent")
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
              priority={true}
              />
            </ImgCont2>

            <ImgCont2>
              <Image
              src="/static/CompassPlus/UserSurveyResults2.jpg"
              width={1920}
              height={1080}
              layout="responsive"
              priority={true}
              />
            </ImgCont2>
          </Div2>
          <Caption>
            These were the results from our user testing.
            </Caption>

        <IDCont id='prob'>
          <TextBox3 
          header='Problem Identification'
          description='When riders first start using Translink, they have to know how to use Translink and its routes, get a compass card or ticket and make sure they have enough funds to get them to their destination. Even experienced riders may forget their compass card every now and then. The problem is that to learn how to use Translink, get a ticket or compass card, and fill up the funds of the card could sometimes be in different places. You would have to use different apps and go to different locations. Our app aims to solve that problem. '
          />

          <TextBox3 
          header='Solution'
          description='Our solution is to develop a cross-platform application that allows you to find your route through Translink, buy tickets, and reload them for your trip, with the added feature of checking for live Translink updates. This would allow experienced riders to continue using Translink without losing time in case they are missing their compass card or if they are going to a place they are not familiar with. This would also allow new travelers to easily learn how to navigate through Translink with one convenient application.'
          />
        </IDCont>
        <IDCont id='design' />
        <TextBox
        header='Design Stage'
        description='Taking our goal into consideration, we began the design of our low fidelity and medium-fidelity prototype. I was personally in charge of the card page. For the low fidelity, it felt really strange and clunky. I initially drew inspiration from other mobile payment apps like Apple Pay or Google Pay. However, as designs and user testing progressed, I found that users much preferred a more Starbucks-styled card page, so I based the next design on that.'
        />

          <ImgCont3>
            <Image 
            src="/static/CompassPlus/cardPage.png"
            width={4835}
            height={1764}
            layout="responsive"
            priority={true}
            />
          </ImgCont3>
          <Caption>
              The top row is my low fidelity, working its way up to my high fidelity. The bottom is the work of the rest of the team just before the final version.
          </Caption>

          
        <TextBox
        header=''
        description='As the designing progressed, another team member created their own version of my cards page, and after a vote and minor user testing, we decided to progress with their design instead. After that, I decided to move on to designing components. With designing components, there was once again a hand off and evolution of ideas and designs especially when we handed the designs over to the developers.'
        />

          <ImgCont3>
            <Image 
            src="/static/CompassPlus/components.png"
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
        <TextBox
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
              src="/static/CompassPlus/businessCardBg.png"
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



        <IDCont id='end'>
          <TextBox 
            header='End Product'
            description='I am proud of the application the team was able to put together. I was also proud of the work I produced with this application. I had designed several components and one way or another, my designs had reached the final product of the app either completely intact or evolved into what is seen at the end.'
          />
        </IDCont>

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
        next='The Giving Hand Project'
        nextLink='/GivingHand'
        
        back='Home'
        />
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
width: 30%;
box-shadow: 0 0 1vw #75a6ff;
margin: 0 5%
`
const ImgCont2 = styled.div`
width: 50%;

`
const ImgCont3 = styled.div`
width: 70vw;
margin: 3vw 0 0 0;
`
const ImgCont4 = styled.div`
background-color: red;
height: 100%;
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