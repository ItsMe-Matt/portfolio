import styled from "styled-components"

export default function ProjHead({
    title="Project Project"
}){
    return <div>
        <Container>
            {title}
        </Container>
    </div>
}

const Container = styled.div`
    border-bottom: 0.08rem solid #606060;
    font-family: Zilla Slab;
    font-weight: 300;
    font-size: 2vw;
    padding-bottom: 1vh;
    margin-bottom: 1vh;
    width: 75vw;
`