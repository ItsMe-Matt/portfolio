import styled from 'styled-components'
import { FiMenu } from 'react-icons/fi'

export default function HeadNav() {
    return <Container>
        <HTxt>
            Matthew Zhao
        </HTxt>
        <FiMenu size="2rem"/>
        
    </Container>
}

const Container = styled.div`
    width: 100;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin: 0px 40px;
`

const HTxt = styled.h1`
    font-family: Zilla Slab;
`