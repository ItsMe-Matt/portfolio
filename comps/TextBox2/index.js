import styled from "styled-components"

export default function TextBox2({
    LHead="Project Research",
    LDescription="  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    RHead="Project Research",
    RDescription="hat the fuck did you just fucking say about me, you little demon? I´ll have you know I graduated top of my class in the Night Sentinels, and I´ve been involved in numerous secret raids on Hell, and I have over 300 confirmed kills. I am trained in rip and tear warfare and I´m the top sniper in the entire armies of Argent D´nur. You are nothing to me, but just another target. I will rip and tear you with precisions the likes of wich has never been seen before on Argent D´nur, mark my fucking words. You think that you can get away with saying that shit to me over Hell? Think again demon. As we speak I am contacting my fellow Night Sentinels all over Hell, and your location is being ",


}){
    return <Container>
        <Left>
        <H1>
            {LHead}
        </H1>

        <Paragraph>
            {LDescription}
        </Paragraph>
        </Left>

        <Right>
        <H1>
            {RHead}
        </H1>

        <Paragraph>
            {RDescription}
        </Paragraph>
        </Right>
    </Container>
}

const Container = styled.div`
width: 75vw;

display: flex;
padding: 6vw 0 1vw 0;
`
const Left = styled.div`
width: 50%;

display: flex;
flex-direction: column;
align-items: center;
`
const Right = styled.div`
width: 50%;

display: flex;
flex-direction: column;
align-items: center;
`
const H1 = styled.div`
font-size: 2em;
font-weight: 700;
font-family: Lato;
text-align: center;

margin-bottom: 1vw;
`
const Paragraph = styled.div`
width: 80%;

font-size: 1.2em;
font-family: Roboto;
font-weight: 300;
line-height: 1.5;

`