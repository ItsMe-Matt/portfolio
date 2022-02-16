import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import { MdOutlineEmail } from "react-icons/md"
import styled from "styled-components"


export default function Social(){
    return <Container>
        <IconA href="https://www.linkedin.com/in/mlzhao/" target="_blank">
            <FaLinkedin size="5vh" color='#2867B2'/>
        </IconA>
        <IconA href="https://github.com/ItsMe-Matt" target="_blank">
            <FaGithubSquare size="5vh"/>
        </IconA>
        <IconC href="mailto:Matthewlukez@yahoo.com">
            <MdOutlineEmail size="5vh" />
        </IconC>
    </Container>
    
    
}

const Container = styled.div`
    display: flex;
    width: fit-content;
    flex-direction: row;
`

const IconA = styled.a`
    padding: 0.5vh 4vh;
    border: 0.2vh solid #000;
    margin-right: 2vh;
    border-radius: 5rem;
    

&:hover {
    transition: 0.5s;
    border: 0.3vh solid #2868de;
    box-shadow: 0 0.4vh 0.2vh #505050;
}
`
const IconC = styled.a`
padding: 0.5vh 4vh;
border: 0.2vh solid #000;
margin-right: 2vh;
border-radius: 5rem;

&:hover {
transition: 0.5s;
border: 0.3vh solid #2868de;
box-shadow: 0 0.4vh 0.2vh #505050;
}
`
