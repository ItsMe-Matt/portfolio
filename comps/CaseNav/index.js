import styled from "styled-components"
import Link from "next/link"
import { GrNext } from 'react-icons/gr';

export default function ContactUI({

}) {
    return <Container>
        <Link href="#role">
            <IconCont>
                My Role
            </IconCont>
        </Link>

            <GrNext size="1vw"/>

        <Link href="#research">
            <IconCont2>
                User Research
            </IconCont2>
        </Link>



            <GrNext size="1vw"/>

        <Link href="#prob">
            <IconCont3>
                Problem and Solution
            </IconCont3>
        </Link>
        
            <GrNext size="1vw"/>
        <IconCont4>
            Design Phase
        </IconCont4>
            <GrNext size="1vw"/>
        <IconCont5>
            Development Phase
        </IconCont5>
            <GrNext size="1vw"/>
        <IconCont6>
            Conclusion
        </IconCont6>
    </Container>
}

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: baseline;
height: 3vh;

width: 75vw;
`

const IconCont = styled.div`
height: fit-content;
background-color: #4169e1;
padding: 0.7vw 1.5vw;
color: #fff;
border-radius: 3vw;
font-size: 1em;
&:hover {
    transition: 0.2s;
    background-color: #0b2985;
}
`

const IconCont2 = styled.div`
height: fit-content;
background-color: #4169e1;
padding: 0.7vw 1.5vw;
color: #fff;
border-radius: 3vw;
font-size: 1em;
&:hover {
    transition: 0.2s;
    background-color: #0b2985;
}
`
const IconCont3 = styled.div`
height: fit-content;
background-color: #4169e1;
padding: 0.7vw 1.5vw;
color: #fff;
border-radius: 3vw;
font-size: 1em;
&:hover {
    transition: 0.2s;
    background-color: #0b2985;
}
`
const IconCont4 = styled.div`
height: fit-content;
background-color: #4169e1;
padding: 0.7vw 1.5vw;
color: #fff;
border-radius: 3vw;
font-size: 1em;
&:hover {
    transition: 0.2s;
    background-color: #0b2985;
}
`
const IconCont5 = styled.div`
height: fit-content;
background-color: #4169e1;
padding: 0.7vw 1.5vw;
color: #fff;
border-radius: 3vw;
font-size: 1em;
&:hover {
    transition: 0.2s;
    background-color: #0b2985;
}
`
const IconCont6 = styled.div`
height: fit-content;
background-color: #4169e1;
padding: 0.7vw 1.5vw;
color: #fff;
border-radius: 3vw;
font-size: 1em;
&:hover {
    transition: 0.2s;
    background-color: #0b2985;
}
`
