import styled from "styled-components"

export default function TextBox({
    header="Project Research",
    description="  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
width: 75vw;

display: flex;
flex-direction: column;
align-items: center;
padding: 6vw 0 1vw 0;
`
const H1 = styled.div`
font-size: 2vw;
font-weight: 800;
font-family: Lato;

margin-bottom: 1vw;
`
const Paragraph = styled.div`
width: 92%;

font-size: 1.1vw;
font-family: Roboto;
font-weight: 300;
line-height: 1.5;

`