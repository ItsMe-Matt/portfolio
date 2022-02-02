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
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    flex-direction: row;
    padding: 0rem 2rem;
    background-color: #ffffff;
    z-index: 1;
`

const HTxt = styled.h1`
    font-family: Zilla Slab;
    font-weight: bold;
    color: #122C5C;
    font-size: 2rem
    padding: 0
`

const NavCont = styled.div`
    display: flex;
    flex-direction: row;

`

const NavBtn = styled.div`
    padding: 0.1rem 0.5rem;
    cursor: pointer;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: 500;
    border-bottom: 0.1rem solid #000000;
    margin: 0 0.5rem;
`