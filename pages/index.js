import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components'

import HeadNav from '../comps/HeadNav'
import Project from "../comps/Project";
import ProjHead from "../comps/ProjHead";
import Social from '../comps/Social'

import FEProj from './data/FEProj.json'
import UIProj from './data/UIProj.json'


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
      <Content id="ui"> 
      <ProjHead title="UI/UX Design" />
        <Project 
          title={UIProj[0].header}
          img={UIProj[0].titleImg}
          detail={UIProj[0].description}
          />
        <Project 
          title={UIProj[1].header}
          img={UIProj[1].titleImg}
          detail={UIProj[1].description}
          />
      </Content>

      <Content id="frontend">
      <ProjHead title="Frontend Development" />
        <Project 
          title={FEProj[0].header}
          img={FEProj[0].titleImg}
          detail={FEProj[0].description}
          />

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
  box-shadow: 0 0.25rem 3rem #000000 inset;
  padding-top: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;

`
const HeroH = styled.div`
  font-family: Zilla Slab;
  font-size: 3.5rem;
  font-weight: 400;
  text-align: center;
  width: 80vw;
  margin-bottom: 2rem;
  color: #122C5C;
`

const HeroP = styled.div`
  font-family: Roboto;
  font-weight: 100;
  font-size: 32px;
  display: flex;
  width: 50vw;
  text-align: center;
  margin-bottom: 2rem;
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
`
