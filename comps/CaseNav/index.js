import styled from "styled-components"
import Link from "next/link"

export default function ContactUI({

}) {
    return <Container>
        <IconCont>
            Problem Identification
        </IconCont>

        <IconCont2>
            Objectives
        </IconCont2>

        <IconCont3>
            Personas
        </IconCont3>

        <IconCont4>
            User Journey
        </IconCont4>

        <IconCont5>
            Prototyping
        </IconCont5>

        <IconCont6>
            Conclusion
        </IconCont6>
    </Container>
}

const Container = styled.div`
display: flex;
justify-content: space-between;
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
    transition: 1s;
    background-color: #0638cf;
    padding: 1vw 2vw;
    font-size: 0.9vw;
`
const IconCont2 = styled.div`
height: fit-content;
background-color: #4169e1;
padding: 0.7vw 1.5vw;
color: #fff;
border-radius: 3vw;
font-size: 0.85vw;
&:hover {
    transition: 1s;
    background-color: #0638cf;
    padding: 1vw 2vw;
    font-size: 0.9vw;
`
const IconCont3 = styled.div`
height: fit-content;
background-color: #4169e1;
padding: 0.7vw 1.5vw;
color: #fff;
border-radius: 3vw;
font-size: 0.85vw;
&:hover {
    transition: 1s;
    background-color: #0638cf;
    padding: 1vw 2vw;
    font-size: 0.9vw;
`
const IconCont4 = styled.div`
height: fit-content;
background-color: #4169e1;
padding: 0.7vw 1.5vw;
color: #fff;
border-radius: 3vw;
font-size: 0.85vw;
&:hover {
    transition: 1s;
    background-color: #0638cf;
    padding: 1vw 2vw;
    font-size: 0.9vw;
`
const IconCont5 = styled.div`
height: fit-content;
background-color: #4169e1;
padding: 0.7vw 1.5vw;
color: #fff;
border-radius: 3vw;
font-size: 0.85vw;
&:hover {
    transition: 1s;
    background-color: #0638cf;
    padding: 1vw 2vw;
    font-size: 0.9vw;
`
const IconCont6 = styled.div`
height: fit-content;
background-color: #4169e1;
padding: 0.7vw 1.5vw;
color: #fff;
border-radius: 3vw;
font-size: 0.85vw;
&:hover {
    transition: 1s;
    background-color: #0638cf;
    padding: 1vw 2vw;
    font-size: 0.9vw;
`
