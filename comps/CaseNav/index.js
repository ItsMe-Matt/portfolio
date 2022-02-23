import styled from "styled-components"
import Link from "next/link"
import { GrNext } from 'react-icons/gr';

export default function ContactUI({

}) {
    return <Container>
        <Link href="#problemId">
            <IconCont>
                Problem Identification
            </IconCont>
        </Link>

            <GrNext size="1vw"/>
        <IconCont2>
            Objectives
        </IconCont2>
            <GrNext size="1vw"/>
        <IconCont3>
            Personas
        </IconCont3>
            <GrNext size="1vw"/>
        <IconCont4>
            User Journey
        </IconCont4>
            <GrNext size="1vw"/>
        <IconCont5>
            Prototyping
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
font-size: 0.85vw;
&:hover {
    transition: 0.5s;
    background-color: #0638cf;
`
/*
    padding: 1vw 2vw;
    font-size: 0.9vw;
*/
const IconCont2 = styled.div`
height: fit-content;
background-color: #4169e1;
padding: 0.7vw 1.5vw;
color: #fff;
border-radius: 3vw;
font-size: 0.85vw;
&:hover {
    transition: 0.5s;
    background-color: #0638cf;
`
const IconCont3 = styled.div`
height: fit-content;
background-color: #4169e1;
padding: 0.7vw 1.5vw;
color: #fff;
border-radius: 3vw;
font-size: 0.85vw;
&:hover {
    transition: 0.5s;
    background-color: #0638cf;
`
const IconCont4 = styled.div`
height: fit-content;
background-color: #4169e1;
padding: 0.7vw 1.5vw;
color: #fff;
border-radius: 3vw;
font-size: 0.85vw;
&:hover {
    transition: 0.5s;
    background-color: #0638cf;
`
const IconCont5 = styled.div`
height: fit-content;
background-color: #4169e1;
padding: 0.7vw 1.5vw;
color: #fff;
border-radius: 3vw;
font-size: 0.85vw;
&:hover {
    transition: 0.5s;
    background-color: #0638cf;
`
const IconCont6 = styled.div`
height: fit-content;
background-color: #4169e1;
padding: 0.7vw 1.5vw;
color: #fff;
border-radius: 3vw;
font-size: 0.85vw;
&:hover {
    transition: 0.5s;
    background-color: #0638cf;
`
