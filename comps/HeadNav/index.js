import styled from 'styled-components'
import Link from 'next/link'

export default function HeadNav() {
    return <HBar>
    <Container>
        <HCont>
        <Link href="/">
        <HTxt>
            Matthew Zhao, 
        </HTxt>
        </Link>
        <HP>
            UI/UX Designer + Developer
        </HP>
        </HCont>
        
        <NavCont>
        <Link href="/#projects">
            <NavBtn>
            Project and Works
            </NavBtn> 
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
    cursor: pointer;
    margin-right: 0.5vw;
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
`


const NavCont = styled.div`
    display: flex;
    flex-direction: row;
`

const NavBtn = styled.div`

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
        transition: 1s;
        box-shadow: inset 0 -5vh 0 0 #2868de;
        color: #ffffff;
    }
`