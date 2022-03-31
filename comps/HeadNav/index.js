import styled from 'styled-components'
import Link from 'next/link'
import Modal from '@/comps/Modal'
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'

export default function HeadNav() {
    const [showModal, setShowModal] = useState(false);

    return <HBar>
    <Container>  
        <Link href="/">
        <HCont>
        <HTxt>
            Matthew Zhao 
        </HTxt>
        <HP>
            UI/UX Designer
        </HP>
        </HCont>
        </Link>

        <NavCont>
            <Link href="/About">
                <AbtMe>
                About Me
                </AbtMe> 
            </Link>

            <Link href="/#projects">
                <ProjectBtn>
                Projects
                </ProjectBtn> 
            </Link>
    
            <Link href="#contact">
                <ConBtn>
                Contact Me
                </ConBtn> 
            </Link>
        </NavCont>

        <ModalCont>

        <GiHamburgerMenu size="1.5em" color='#1e3664' onClick={() => setShowModal(true)} />
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
        >
            <ModalContent>
                <Link href="/">
                    <ModalNavBtn
                    onClick={()=>{setShowModal(false)}}
                    >
                    Home
                    </ModalNavBtn> 
                </Link>

                <Link href="/About">
                    <ModalNavBtn
                    onClick={()=>{setShowModal(false)}}
                    >
                    About Me
                    </ModalNavBtn> 
                </Link>

                <Link href="/#projects">
                    <ModalNavBtn
                    onClick={()=>{setShowModal(false)}}
                    >
                    Projects
                    </ModalNavBtn> 
                </Link>

                <Link href="#contact">
                    <ModalNavBtn
                    onClick={()=>{setShowModal(false)}}
                    >
                    Contact Me
                    </ModalNavBtn> 
                </Link>





            </ModalContent>
            

        </Modal>
    </ModalCont>
    </Container>
    </HBar>
}

const HBar = styled.div`
display: flex;
justify-content: center;
position: sticky;
top: 0;
z-index: 1;
background-color: #ffffff;
box-shadow: 0 1vh 2vh #fff;
`

const Container = styled.div`
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: space-between;
width: 70vw;

@media (max-width: 768px) {
    width: 100%;
    align-items: center;
    padding: 0 5%;
}
`

const HTxt = styled.p`
font-family: Montserrat;
font-weight: 500;
color: #122C5C;
font-size: 1.5em;
padding: 0;
margin-right: 0.5em;
transition: 0.5s;
&:hover {
    color: royalblue;
}
@media (max-width: 768px) {
    font-size: 1.25em;
  }
`
const HP = styled.p`
font-family: Poppins;
font-weight: 300;
font-size: 1em;

@media (max-width: 768px) {
    display: none;
  }
`
const HCont = styled.div`
display: flex;
flex-direction: row;
align-items: baseline;
cursor: pointer;
`


const NavCont = styled.div`
display: flex;
flex-direction: row;
align-items: flex-end;

@media (max-width: 768px) {
    display: none;
  }
`

const AbtMe = styled.div`
cursor: pointer;
font-family: Poppins;
font-size: 1em;
font-weight: 500;
margin: 0.5vh 0.5vw;
padding: 0.5vh 0.5vw;
border-radius: 0.5em;
transition: 2s;

&:hover {
    box-shadow: inset 0 -5em #ffddcf;
    font-size: 1.1em;
    padding: 0.4vh 0.4vw;
}
@media (max-width: 768px) {
    width: fit-content;
    font-size: 1.5em;
  }
`
const ProjectBtn = styled.div`
cursor: pointer;
font-family: Poppins;
font-size: 1em;
font-weight: 500;
margin: 0.5vh 0.5vw;
padding: 0.5vh 0.5vw;
border-radius: 0.5em;
transition: 2s;

&:hover {
    box-shadow: inset 0 -5em #ffddcf;
    font-size: 1.1em;
    padding: 0.4vh 0.4vw;
}
@media (max-width: 768px) {
    width: fit-content;
    font-size: 1.5em;
  }
`
const ConBtn = styled.div`
cursor: pointer;
font-family: Poppins;
font-size: 1em;
font-weight: 500;
margin: 0.5vh 0.5vw;
padding: 0.5vh 0.5vw;
border-radius: 0.5em;
transition: 2s;

&:hover {
    box-shadow: inset 0 -5em #ffddcf;
    font-size: 1.1em;
    padding: 0.4vh 0.4vw;
}
@media (max-width: 768px) {
    width: fit-content;
    font-size: 1.5em;
  }
`
const ModalCont = styled.div`
display: none;

@media (max-width: 768px) {
display: block;
  }
`
const ModalContent = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: 100%;
padding: 50% 0;
`
const ModalNavBtn = styled.div`
cursor: pointer;
font-family: Poppins;
font-weight: 500;
margin: 0.5vh 0.5vw;
padding: 0.5vh 0.5vw;
border-radius: 0.5em;
width: fit-content;
font-size: 1.5em;
`