import styled from "styled-components"
import Link from 'next/link'
import { GrFormPrevious, GrFormNext } from "react-icons/gr"


export default function OtherProj({
    next="Next Project",
    back="Previous Project"
}){

    return <Container>
        <Link href="/">
            <NavBtn>
                <GrFormPrevious size="1vw"/>
                {back}
            </NavBtn>
        </Link>


        <Link href="/">
            <NavBtn>
                {next}
                <GrFormNext size="1vw"/>
            </NavBtn>
        </Link>
    </Container>
}

const Container = styled.div`
width: 75vw;
display: flex;
justify-content: space-between;
`
const NavBtn = styled.div`
padding: 1vw;

display: flex;
align-items: center;

font-size: 1vw;
font-family: Lato;
font-weight: 700;
color: #122c5c;
`
