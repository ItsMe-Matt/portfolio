import { useState } from 'react';
import styled from 'styled-components'
import Image from 'next/image';

import HeadNav from '../../comps/HeadNav'



export default function Home() {
  var [ULColor, setULColor] = useState("transparent")
  var [ULColor2, setULColor2] = useState("transparent")




  function hlOn(e) {
    setULColor(e)
    console.log(ULColor)
  }
  
  function hlOff() {
    console.log(ULColor)
    setULColor("transparent")
  }

  function hlOn2(e) {
    setULColor2(e)
    console.log(ULColor2)
  }
  
  function hlOff2() {
    console.log(ULColor2)
    setULColor2("transparent")
  }



  return (<div>
    <Container>
    <HeadNav />
      <Hero>
        <RowCenter>
        <HeroH>
        Hi, I’m Matt and I am an UI/UX designer and a frontend developer.
        </HeroH>
        <HeroP>
        I design and develop cross platform applications and solutions.
        </HeroP>
        </RowCenter>
      </Hero>
      <Content>
    
      </Content>
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
  background-color: #f7faff;
  padding: 3vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0 2vh 5vh #fff inset
`