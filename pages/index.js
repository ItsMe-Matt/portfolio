import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components'

import HeadNav from '../comps/HeadNav'
import Project from "../comps/Project";
import ProjHead from "../comps/ProjHead";
import Social from '../comps/Social'

import Proj from "./data/Proj.json"


export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (<div>
    <Container>
    <HeadNav />
      <Hero>
        <RowCenter>
        <HeroH>
        Hi, I’m Matt and I am an UI/UX designer and a frontend developer.
        </HeroH>
        <HeroP>
        I am currently finishing my final semester at BCIT for Digital Design and Development. 
        </HeroP>
        <Social />
        </RowCenter>
      </Hero>
      <Content id="projects">
        <ProjHead title="Project and Works"/>
        <Project 
          title={Proj[0].header}
          type={Proj[0].type}
          img={Proj[0].titleImg}
          detail={Proj[0].description}
          route={Proj[0].route}
          />
        <Project 
          title={Proj[1].header}
          img={Proj[1].titleImg}
          detail={Proj[1].description}
          />
        <Project 
          title={Proj[0].header}
          img={Proj[0].titleImg}
          detail={Proj[0].description}
          />

        <Project />

      </Content>
    </Container>
    </div>)
}

const Container = styled.div`
cursor: context-menu
`
const Hero = styled.div`
  background-color: #ebebeb;
  height: 91vh;
  box-shadow: 0 0.25rem 1rem #909090 inset;
  padding-top: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;

`
const HeroH = styled.div`
  font-family: Zilla Slab;
  font-size: 6vh;
  font-weight: 400;
  text-align: center;
  width: 80vw;
  margin-bottom: 4vh;
  color: #122C5C;
`

const HeroP = styled.div`
  font-family: Roboto;
  font-weight: 100;
  font-size: 4vh;
  display: flex;
  width: 50vw;
  text-align: center;
  margin-bottom: 4vh;
`
const RowCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  padding-top: 9vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
