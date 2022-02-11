import styled from 'styled-components'
import Link from 'next/link'

export default function HeadNav() {
    return <HBar>
    <Container>
        
        <Link href="/">
        <HCont>
        <HTxt>
            Matthew Zhao, 
        </HTxt>
        <HP>
            UI/UX Designer + Developer
        </HP>
        </HCont>
        </Link>

        
        
        <NavCont>
        <Link href="/#projects">
            <NavBtn>
            Project and Works
            </NavBtn> 
        </Link>

        <Link href="/#projects">
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
`

const HTxt = styled.p`
    font-family: Poppins;
    font-weight: 500;
    color: #122C5C;
    font-size: 3vh;
    padding: 0;

    margin-right: 0.5vw;

    &:hover {
        color: royalblue;
    }
    
`
const HP = styled.p`
    font-family: Poppins;
    font-weight: 300;
    color: #122C5C;
    font-size: 2vh;
    padding: 0;

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
    justify-content: baseline;
`

const NavBtn = styled.div`


    cursor: pointer;
    font-family: Roboto;
    font-size: 2.2vh;
    font-weight: 300;
    padding: 1vh 1vw;
    color: #000;

    margin: 0 0.5rem;
    
    &:hover {

        animation-name: box;
        animation-duration: 4s;
    }

    @keyframes box {
        0% {box-shadow: none}
        25% {box-shadow: inset 0 0.1vh 0.1vh 0 #000}
        50% {box-shadow: inset 0 0.1vh 0.1vh 0 #000, box-shadow: inset 0.1vh 0.1vh 0.1vh 0 #000}
        75% {box-shadow: inset -0.1vh -0.1vh 0 0 #000, inset 0.1vh 0.1vh 0 0 #000}
        100% {box-shadow: inset -0.1vh -0.1vh 0 0 #fff, inset 0.1vh 0.1vh 0 0 #fff}
    }
`
/*
transition: 0.5s;
box-shadow: inset -0.1vh -0.1vh 0 0 #000, inset 0.1vh 0.1vh 0 0 #000;
*/

const ConBtn = styled.div`

    cursor: pointer;
    font-family: Roboto;
    font-size: 2.2vh;
    font-weight: 300;
    padding: 1vh 1vw;
    border-radius: 3rem;
    background-color: blue;
    color: #fff;

    margin: 0 0.5rem;
    
    &:hover {
        transition: 1.5s;
        box-shadow: inset 8vw 0 0 0 #2868de;
        color: #ffffff;
    }
`