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
                Our Users
            </IconCont2>
        </Link>



            <GrNext size="1vw"/>

        <Link href="#prob">
            <IconCont3>
                Problem and Solution
            </IconCont3>
        </Link>
        
            <GrNext size="1vw"/>

        <Link href="#design">
            <IconCont4>
                Process
            </IconCont4>    
        </Link>



            <GrNext size="1vw"/>
        <Link href="#dev">
            <IconCont5>
                Final Designs
            </IconCont5>
        </Link>

            <GrNext size="1vw"/>
        <Link href="#end">
            <IconCont6>
                Learnings
            </IconCont6>
        </Link>

    </Container>
}

const Container = styled.div`

justify-content: space-between;
align-items: center;
height: 3vh;



@media (max-width: 599px)  {
    display: none;
}

@media only screen and (min-width: 600px) {
    display: none;
}

@media only screen and (min-width: 992px) {
    width: 70%;
    display: flex;
}
`

const IconCont = styled.div`
height: fit-content;
background-color: #4169e1;
padding: 0.7vw 1.5vw;
color: #fff;
border-radius: 3vw;
font-size: 0.8em;
font-family: Montserrat;
text-align: center;
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
font-size: 0.8em;
font-family: Montserrat;
text-align: center;
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
font-size: 0.8em;
font-family: Montserrat;
text-align: center;
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
font-size: 0.8em;
font-family: Montserrat;
text-align: center;
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
font-size: 0.8em;
font-family: Montserrat;
text-align: center;
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
font-size: 0.8em;
font-family: Montserrat;
text-align: center;
&:hover {
    transition: 0.2s;
    background-color: #0b2985;
}
`
