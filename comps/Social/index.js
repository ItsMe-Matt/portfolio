import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import { MdOutlineEmail } from "react-icons/md"
import styled from "styled-components"


export default function Social(){
    return <Container>
        <IconA href="https://www.linkedin.com/in/mlzhao/" target="_blank">
            <FaLinkedin size="56px" color='#2867B2'/>
        </IconA>
        
        <IconA href="https://github.com/ItsMe-Matt" target="_blank">
            <FaGithubSquare size="56px"/>
        </IconA>

        <IconC>
            <MdOutlineEmail size="56px" />
        </IconC>

    </Container>
}

const Container = styled.div`
    display: flex;
    width: fit-content;
    flex-direction: row;
`

const IconA = styled.a`
    border-radius: 12px;
    padding: 4px;
    background-color: #f5f5f5;
    margin: 2px;
    box-shadow: 0 0.25rem 0.25rem #909090;

`
const IconC = styled.div`
    border-radius: 12px;
    padding: 4px;
    background-color: #f5f5f5;
    margin: 2px;
    box-shadow: 0 0.25rem 0.25rem #909090;
`
