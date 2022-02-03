import styled from 'styled-components'
import { FiMenu } from 'react-icons/fi'
import Link from 'next/link'

export default function HeadNav() {
    return <Container>
        <Link href="">
        <HTxt>
            Matthew Zhao
        </HTxt>
        </Link>
        
        
        <NavCont>
        <Link href="#ui">
            <NavBtn>
            UI/UX
            </NavBtn> 
        </Link>
        <Link href="#frontend">
            <NavBtn>
            Frontend
            </NavBtn> 
        </Link>
        </NavCont>
    </Container>
}


/* Drafts
<FiMenu size="2rem" color="#122C5C" onClick={()=>{
            console.log("gay")
        }}/>






*/
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
`

const NavCont = styled.div`
    display: flex;
    flex-direction: row;
`

const NavBtn = styled.div`
    padding: 0.1rem 0.5rem;
    cursor: pointer;
    font-family: Roboto;
    font-size: 1.25rem;
    font-weight: 300;
    border-bottom: 0.09rem solid #000000;
    margin: 0 0.5rem;
    
    &:hover {
        transition: 1s;
        box-shadow: inset 0 -0.5em 0 0 #122C5C
    }
`