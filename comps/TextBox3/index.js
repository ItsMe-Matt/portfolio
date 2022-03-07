import styled from "styled-components"

export default function TextBox3({
    header="Project Research",
    description="hat the fuck did you just fucking say about me, you little demon? I´ll have you know I graduated top of my class in the Night Sentinels, and I´ve been involved in numerous secret raids on Hell, and I have over 300 confirmed kills. I am trained in rip and tear warfare and I´m the top sniper in the entire armies of Argent D´nur. You are nothing to me, but just another target. I will rip and tear you with precisions the likes of wich has never been seen before on Argent D´nur, mark my fucking words. You think that you can get away with saying that shit to me over Hell? Think again demon. As we speak I am contacting my fellow Night Sentinels all over Hell, and your location is being ",


}){
    return <Container>
        <Left>
        <H1>
            {header}
        </H1>
        </Left>

        <Right>
        <Paragraph>
            {description}
        </Paragraph>
        </Right>
    </Container>
}


const Container = styled.div`
width: 70vw;

display: flex;
padding: 6vw 0 1vw 0;
`
const Left = styled.div`
width: 20%;

display: flex;
flex-direction: column;
align-items: flex-start;

`
const Right = styled.div`
width: 80%;

display: flex;
flex-direction: column;
align-items: center;
`

const H1 = styled.div`
font-size: 2em;
font-weight: 600;
font-family: Lato;

margin-bottom: 1vw;
text-align: left;
`
const Paragraph = styled.div`
width: 100%;

font-size: 1.2em;
font-family: Roboto;
font-weight: 300;
line-height: 1.5;

`