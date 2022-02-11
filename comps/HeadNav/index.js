import styled from 'styled-components'
import Link from 'next/link'

export default function HeadNav() {
    return <HBar>
    <Container>
        <Link href="/">
        <HTxt>
            Matthew Zhao
        </HTxt>
        </Link>
        
        
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
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;

    width: 75%;
`

const HTxt = styled.h1`
    font-family: Zilla Slab;
    font-weight: 700;
    color: #122C5C;
    font-size: 4.2vh;
    padding: 0;
    cursor: pointer;

    &:hover {
        color: #3073f0;
    }
`

const NavCont = styled.div`
    display: flex;
    flex-direction: row;
`

const NavBtn = styled.div`
    padding: 0.2rem 0.9rem;
    cursor: pointer;
    font-family: Roboto;
    font-size: 2.5vh;
    font-weight: 300;
    border-bottom: 0.09rem solid #000000;
    margin: 0 0.5rem;
    
    &:hover {
        transition: 1s;
        box-shadow: inset 0 -2rem 0 0 #2868de;
        color: #ffffff;
    }
`