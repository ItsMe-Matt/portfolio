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
width: 60vw;

display: flex;
padding: 5vh 0;
justify-content: space-between;

@media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 5% 5%;
    font-size: 1em;
  }
`
const Left = styled.div`
width: 45%;

display: flex;
flex-direction: column;
align-items: center;

@media (max-width: 768px) {
    width: 100%;
    align-items: flex-start;
    padding: 5% 0;
    }

`
const Right = styled.div`
width: 45%;

display: flex;
flex-direction: column;
align-items: center;

@media (max-width: 768px) {
    align-items: flex-start;
    width: 100%;
    padding: 5% 0;
    }
`
const H1 = styled.div`
font-size: 1.5em;
font-weight: 500;
font-family: Poppins;
text-align: center;

margin-bottom: 1vw;
`
const List = styled.ul`
font-family: Poppins;
font-weight: 300;
line-height: 1.5;

list-style-type: circle;
list-style-position: inside;
padding: 0;
margin: 0;

width: fit-content;
`

const LItem = styled.li`
width: 100%;
font-size: 1.2em;
font-family: Roboto;
font-weight: 300;
line-height: 1.5;
margin-bottom: 1em;

@media (max-width: 768px) {
    width: 100%;
    }

`