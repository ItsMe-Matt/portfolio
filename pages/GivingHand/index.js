import { useState } from 'react';
import styled from 'styled-components'
import Image from 'next/image';
import Link from 'next/link'

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


export default function GivingHandUI() {
  var [S1Display, setS1Display] = useState("none")
  var [S2Display, setS2Display] = useState("none")
  var [S3Display, setS3Display] = useState("none")

  var P0 = Proj[2]

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
          img="/static/GivingHand/head.png"
          imgType="1"
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
              description='My role in the Giving Hand was an especially challenging one as I had to take on all the roles at some point. In this project, my roles included project manager, developer, and designer. Most of my team was very passive compared to me so it encouraged me to take the initiative to get the project off the ground and running. My team consisted of two other designers and another developer. At the beginning, I really had to take the initiative to push the team forward because everyone on the team was very passive. As the initiator, I set goals, deadlines, and frequently checked on teammates to make sure we were making progress and made sure that everyone who needed support was acknowledged and received it.'
            />
          </IDCont>

          <IDCont id='research'>
            <TextBox
              header='User Research'
              description='Through our user survey, we discovered that a lot of the people we interviewed had actually donated to homeless people at one point or another. From our survey, we learned that the top reason that stops people from donating is that they don’t know where or what the money is going to. They don’t know if the organization they are donating to is trustable or if the money even reaches the people they are hoping to help.'
            />
          </IDCont>

         

        <IDCont id='prob'>
          <TextBox2 
            LHead='Problem Identification'
            LDescription='A lot of people in Vancouver want to help and donate to the homeless but most people do not know if the organization is trustable or if the money even reaches the people they are hoping to help with their donation.'
    
            RHead='Goal/Solution'
            RDescription='Our solution is creating an app that aids users when researching and finding a location to donate to. By answering a couple questions, our app gives the user a couple organizations to donate to.'
            />
        </IDCont>

        <IDCont id='design' />
        <TextBox
        header='Design Stage'
        description='During the design stage, I made a medium fidelity prototype along with the rest of the team. Although, not too many of the designs remained too intact at the end, ideas did evolve and this gave us the chance to explore which designs worked and which designs did not work too well. '
        />

        <ImgCont3>
          <Image
          src="/static/GivingHand/mediumFidelity.png"
          width={3546}
          height={1485}
          layout='responsive'
          />
        </ImgCont3>
        <Caption>
          This was my medium fidelity that I designed.
        </Caption>

        <TextBox
        header=''
        description='One of the designs that was well received was my organization question page. On this page, on my medium fidelity, it would drop down to show more details about the organizations. On the final version, it would open a Pop up and then you can confirm on the pop up. One of the reasons we did this was to make sure that the users would at least glance through the information about the organizations. We cannot force the users to do anything but we can always work certain behaviors into the flow. As the development phase began, I was no longer able to put as much time into design and focused more time into building out the components and layout of the page.'
        />

        <ImgCont3>
          <Image
          src="/static/GivingHand/popup.png"
          width={1761}
          height={670}
          layout='responsive'
          />
        </ImgCont3>
        <Caption>
          This was my previous design with the dropdown. I eventually decided to go with a pop up instead.
        </Caption>

        <IDCont id='dev' />
        <TextBox
        header='Development Stage'
        description='When the development stage began, the designs were simple enough to not require too many edits and changes. I created most of the components and page layouts as well as the pop ups which took a while to figure out. Other than that everything was just a grind. There was one more feature that I wanted to implement which was a map for the organizations where you just got to look around and see the organizations and where they were located.'
        
        />



        <IDCont id='end' />
          <TextBox 
            header='End Product'
            description='At the end, I was pretty happy with how the project came out. With my knowledge and experience of NextJS now, I would definitely attach the app to a dataset and get the maps feature working. I would also make the app more interactive with animations and different effects. From this project, I was given the opportunity to work on every aspect of the application and initiate and improve the workflow of the team with meetings and check-ins.'
          />

        <EndImg>

          <EndDiv>
            <EndHead>
              Giving Hand
            </EndHead>

            <EndP>
              Feel free to check out the web app by going to the site. If you want to take a look at the code, the link to Github is also here!
            </EndP>

            <EndBtnCont>
              <Link href="https://giving-hand-app.vercel.app/LandingPage" target="_blank">
              <EndBtn>
                Go to Site
              </EndBtn>                
                </Link>

              <Link href="https://github.com/ItsMe-Matt/GivingHandApp" target="_blank">
              <EndBtn>
                View Github
              </EndBtn>
                </Link>

            </EndBtnCont>
            

          </EndDiv>

          <ImgCont2>
            <Image 
            src="/static/GivingHand/finalWork.gif"
            width={600}
            height={1234}
            layout="responsive"
            
            
            />
          </ImgCont2>


        </EndImg>


        <OtherProj 
         next='Home'

         back="CompassPlus Project"
         backLink="/CompassPlus"
        />
        </Cat>
      </Content>
      <IDCont id='contact' />
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
width: 20%;
box-shadow: 0 0 1vw #75a6ff;
`
const ImgCont2 = styled.div`
width: 30%


`
const ImgCont3 = styled.div`
width: 70vw;
`
const Div2 = styled.div`
display: flex;
flex-direction: row;
background-color: red;
width: 98vw;
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
const EndDiv = styled.div`
width: 50%;

`
const EndHead = styled.div`
font-size: 2em;
font-weight: 700;
font-family: Lato;

margin-bottom: 1vw;
align-self: flex-start;
color: #fff;
`
const EndP = styled.div`
font-size: 1.2em;
font-family: Roboto;
font-weight: 300;
line-height: 1.5;
color: #ccc;
margin-bottom: 5vh;
`
const EndBtnCont = styled.div`
display: flex;
flex-direction: row;
`
const EndBtn = styled.div`
background-color: lime;
width: fit-content;
padding: 0.5em 1em;
font-size: 1.2em;
font-family: Roboto;
font-weight: 500;
line-height: 1.5;
color: #181818;
border-radius: 10rem;
margin-right: 1vw;
`
const EndImg = styled.div`
width: 100%;
padding: 3% 15%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 1vw;
background-color: #122c5c;
`

/*
<Video embedId='ar5WlWITb7s'/>
*/