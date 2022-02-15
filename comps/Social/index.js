import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import { MdOutlineEmail } from "react-icons/md"
import styled from "styled-components"


export default function Social({
    type="1"
}){
    if (type === "1") {
        return <Container>
            <IconA href="https://www.linkedin.com/in/mlzhao/" target="_blank">
                <FaLinkedin size="6vh" color='#2867B2'/>
            </IconA>

            <IconA href="https://github.com/ItsMe-Matt" target="_blank">
                <FaGithubSquare size="6vh"/>
            </IconA>

            <IconC>
                <MdOutlineEmail size="6vh" />
            </IconC>
        </Container>
    } else if (type === "2") {
        return <ContainerW>
            <IconAW href="https://www.linkedin.com/in/mlzhao/" target="_blank">
                <FaLinkedin size="2vw" color='#2867B2'/>
            </IconAW>

            <IconAW href="https://github.com/ItsMe-Matt" target="_blank">
                <FaGithubSquare size="2vw"/>
            </IconAW>

            <IconC>
                <MdOutlineEmail size="2vw" />
            </IconC>
        </ContainerW>
    }
    
}

const Container = styled.div`
    display: flex;
    width: fit-content;
    flex-direction: row;
`

const IconA = styled.a`
    padding: 0.35vh;
    box-shadow: 0 -0.3vh #122c5c inset;
    margin-right: 2vh;

&:hover {
    transition: 0.25s;
    border-radius: 1vh;
    border: 0.3vh solid #2868de;
}
`
const IconC = styled.div`
    padding: 0.35vh;
    box-shadow: 0 -0.3vh #122c5c inset;

    &:hover {
        transition: 0.25s;
        border-radius: 1vh;
        border: 0.3vh solid #2868de;
    }
`
const IconAW = styled.a`
padding: 0.35vh;
box-shadow: 0 -0.3vh #122c5c inset;
margin-right: 0.75vw;

&:hover {
    transition: 0.25s;
    border-radius: 1vh;
    border: 0.3vh solid #2868de;
}
`

const ContainerW = styled.div`
    display: flex;
    width: fit-content;
    flex-direction: row;

    
`