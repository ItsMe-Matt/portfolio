import styled from "styled-components"

export default function CaseTable({
    LHead="Project Research",
    LP1="Left Point 1",
    LP2="Left Point 2",
    LP3="Left Point 3",

    RHead="Project Research",
    RP1="Right Point 1",
    RP2="Right Point 2",
    RP3="Right Point 3",


}){
    return <Container>
        <Left>
        <H1>
            {LHead}
        </H1>

        <List>
            <LItem>
                {LP1}
            </LItem>

            <LItem>
                {LP2}
            </LItem>

            <LItem>
                {LP3}
            </LItem>
            
        </List>
        </Left>

        <Right>
        <H1>
            {RHead}
        </H1>

        <List>
            <LItem>
            {RP1}
            </LItem>
            <LItem>
            {RP2}
            </LItem>
            <LItem>
            {RP3}
            </LItem>
        </List>
        </Right>
    </Container>
}

const Container = styled.div`
width: 75vw;

display: flex;
padding: 5vh 0;

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
font-size: 1.75vw;
font-weight: 400;
font-family: Lato;
text-align: center;

margin-bottom: 1vw;
`
const List = styled.ul`
width: 80%;

font-size: 1vw;
font-family: Roboto;
font-weight: 300;
line-height: 1.5;

`

const LItem = styled.li`
width: 80%;

font-size: 1vw;
font-family: Roboto;
font-weight: 300;
LItemne-height: 1.5;

`