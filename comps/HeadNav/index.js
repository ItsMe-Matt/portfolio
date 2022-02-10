import styled from 'styled-components'
import Link from 'next/link'

export default function HeadNav() {
    return <Container>
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
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;

    position: sticky;
    top: 0;
    padding: 0 2rem;
    margin: 0;
    width: 100%;
    height: 9vh;
    z-index: 1;

    background-color: #ffffff;


`

const HTxt = styled.h1`
    font-family: Zilla Slab;
    font-weight: bold;
    color: #122C5C;
    font-size: 2rem;
    padding: 0;
    cursor: pointer;
`

const NavCont = styled.div`
    display: flex;
    flex-direction: row;
`

const NavBtn = styled.div`
    padding: 0.2rem 0.9rem;
    cursor: pointer;
    font-family: Roboto;
    font-size: 1.3rem;
    font-weight: 300;
    border-bottom: 0.09rem solid #000000;
    margin: 0 0.5rem;
    
    &:hover {
        transition: 1s;
        box-shadow: inset 0 -2rem 0 0 #2868de;
        color: #ffffff;
    }
`