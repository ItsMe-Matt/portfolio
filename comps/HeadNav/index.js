import styled from 'styled-components'
import Link from 'next/link'

export default function HeadNav() {
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
            <Link href="/AboutMe">
                <AbtMe>
                About Me
                </AbtMe> 
            </Link>

            <Link href="/#projects">
                <ProjectBtn>
                Project and Works
                </ProjectBtn> 
            </Link>
    
            <Link href="#contact">
                <ConBtn>
                Contact Me!
                </ConBtn> 
            </Link>
        </NavCont>
    </Container>
    </HBar>
}

const HBar = styled.div`
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 1;
    height: 9vh;
    background-color: #ffffff;
    box-shadow: 0 1vh 2vh #fff;


`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 75vw;

    @media (max-width: 768px) {
        width: 100%;

      }
`

const HTxt = styled.p`
    font-family: Poppins;
    font-weight: 500;
    color: #122C5C;
    font-size: 1.5em;
    padding: 0;

    margin-right: 0.5vw;

    &:hover {
        color: royalblue;
    }
    @media (max-width: 768px) {
        margin-left: 5vw;
      }
    
`
const HP = styled.p`
    font-family: Poppins;
    font-weight: 300;
    color: #122C5C;
    font-size: 1em;
    padding: 0;

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
`
const AbtMe = styled.div`
cursor: pointer;
font-family: Roboto;
font-size: 1em;
font-weight: 300;
padding: 1vh 1vw;
color: #000;

margin: 0 0.5vw;
&:hover {
    transition: 1s;
    box-shadow: inset 0 -0.2vh #000;
    font-size: 1.1em;
}

@media (max-width: 768px) {
    display: none;
  }
`

const ProjectBtn = styled.div`
    cursor: pointer;
    font-family: Roboto;
    font-size: 1em;
    font-weight: 300;
    padding: 1vh 1vw;
    color: #000;

    margin: 0 0.5vw;

    &:hover {
        transition: 1s;
        box-shadow: inset 0 -0.2vh #000;
        font-size: 1.1em;
    }

    @media (max-width: 768px) {
        display: none;
      }
`

const ConBtn = styled.div`

    cursor: pointer;
    font-family: Roboto;
    font-size: 1.2em;
    font-weight: 300;
    padding: 1vh 1vw;
    border-radius: 3rem;
    background-color: #2868de;
    color: #fff;

    margin: 0 0.5rem;
    
    &:hover {
        transition: 1.5s;
        box-shadow: inset 10vw 0 0 0 #00d45c;
        color: #fff;
        font-size: 1.25em
    }
    @media (max-width: 768px) {
        padding: 5vw 5vw;
      }
`