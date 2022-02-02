import styled from "styled-components"

export default function ProjHead({
    title="Project Project"
}){
    return <div>
        <Container>
            {title} Projects
        </Container>
    </div>
}

const Container = styled.div`
    border-bottom: 0.1rem solid black;
    margin: 0 2rem;
    font-family: Zilla Slab;
    font-weight: 300;
    font-size: 3rem;
    padding-bottom: 1rem;
`