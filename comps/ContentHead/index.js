import styled from "styled-components"

export default function ContentHead({
    title="Project Project"
}){
    return <div>
        <Container>
            {title}
        </Container>
    </div>
}

const Container = styled.div`
    border-bottom: 0.08rem solid #999999;
    font-family: Poppins;
    font-weight: 300;
    font-size: 1.5vw;
    padding-bottom: 1vh;
    margin-bottom: 1vh;
    width: 75vw;
`