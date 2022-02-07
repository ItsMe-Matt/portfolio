import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components'

import HeadNav from '../../comps/HeadNav'
import Project from "../../comps/Project";
import ProjHead from "../../comps/ProjHead";
import Social from '../../comps/Social'


export default function CompassPlus() {

  return (<div>
    <Container>
    <HeadNav />
      <Hero>
        <RowCenter>
        <HeroH>
        CompassPlus
        </HeroH>
        <HeroP>
        I am currently finishing my final semester at BCIT for Digital Design and Development. 
        </HeroP>
        <Social />
        </RowCenter>
      </Hero>
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