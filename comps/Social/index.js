import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import { MdOutlineEmail } from "react-icons/md"
import styled from "styled-components"


export default function Social(){
    return <Container>
        <IconC href="https://www.google.ca/" target="_blank">
            <FaLinkedin size="56px" color='#2867B2'/>
        </IconC>
        
        <IconC>
            <FaGithubSquare size="56px"/>
        </IconC>

        <IconC>
            <MdOutlineEmail size="56px" />
        </IconC>

    </Container>
}

const Container = styled.div`
    display: flex;
    width: fit-content;
`

const IconC = styled.a`
    border-radius: 12px;
    padding: 4px;
    background-color: #f5f5f5;
    margin: 2px

`

