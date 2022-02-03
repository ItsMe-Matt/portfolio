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
    border-bottom: 0.08rem solid #606060;
    margin: 0 2rem;
    font-family: Zilla Slab;
    font-weight: 300;
    font-size: 1.5rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
`