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
width: 70vw;
padding: 6vw 0 1vw 0;

@media (max-width: 768px) {
    width: 100%;
    padding: 5% 10%;
}
`
const H1 = styled.div`
font-size: 2em;
font-weight: 700;
font-family: Lato;
margin-bottom: 1vw;
align-self: flex-start;
`
const Paragraph = styled.div`
font-size: 1.2em;
font-family: Roboto;
font-weight: 300;
line-height: 1.5;
`