import styled from "styled-components"

export default function CaseHP1({
    header="Project Research",
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}){
    return <Container>
        <H1>
            {header}
        </H1>

        <Paragraph>
            {description}
        </Paragraph>
    </Container>
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 6vw 0 1vw 0;

@media (max-width: 599px)  {
    width: 90%;
    font-size: 1em;
    padding: 5% 0;
    margin: 1em 0;
}
@media only screen and (min-width: 600px) {
    width: 80%;
}

@media only screen and (min-width: 992px) {
    width: 60%;
}
`
const H1 = styled.div`
font-size: 1.75em;
font-weight: 700;
font-family: Montserrat;
margin-bottom: 1vw;
align-self: flex-start;

@media (max-width: 480px)  {
margin-bottom: 0.75em;
}
`
const Paragraph = styled.div`
font-size: 1.15em;
font-family: Poppins;
font-weight: 300;
line-height: 1.5;
color: #555;
`