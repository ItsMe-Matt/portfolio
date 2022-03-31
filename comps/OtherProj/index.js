import styled from "styled-components"
import Link from 'next/link'
import { GrFormPrevious, GrFormNext } from "react-icons/gr"


export default function OtherProj({
    next="Next Project",
    back="Previous Project",

    nextLink="/",
    backLink="/"
}){

    return <Container>
        <Link href={backLink}>
            <NavBtn>
                <GrFormPrevious size="1.5em"/>
                {back}
            </NavBtn>
        </Link>


        <Link href={nextLink}>
            <NavBtn>
                {next}
                <GrFormNext size="1.5em"/>
            </NavBtn>
        </Link>
    </Container>
}

const Container = styled.div`
width: 70vw;
display: flex;
justify-content: space-between;
margin-top: 1vh;
@media (max-width: 480px)  {
    width: 100%;
}
@media (min-width: 481px ) and (max-width: 768px) {
    width: 90%;
}
`
const NavBtn = styled.div`
padding: 1vw;

display: flex;
align-items: center;
justify-content: center;

font-size: 1.3em;
font-family: Montserrat;
font-weight: 700;
color: #122c5c;

@media (max-width: 480px)  {
font-size: 1.2em;
}
`
