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
display: flex;
justify-content: space-between;
margin-top: 1vh;

@media (max-width: 599px)  {
    width: 90%;
}

@media only screen and (min-width: 600px) {
    width: 80%;
}

@media only screen and (min-width: 992px) {
    width: 70%;
}
`
const NavBtn = styled.div`
padding: 1vw 0;

display: flex;
align-items: center;
justify-content: center;

font-size: 1.25em;
font-family: Montserrat;
font-weight: 500;
color: #122c5c;

@media (max-width: 480px)  {
font-size: 1.2em;
}
`
