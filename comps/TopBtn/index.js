import styled from 'styled-components'
import Link from 'next/link'

export default function TopBtn() {

    return (
        <Container>
            <Link href="">
                <Btn>
                    Back to the Top
                </Btn>
            </Link>

        </Container>

    )
}

const Container = styled.div`
width: 75vw;
display: flex;
justify-content: flex-end;

position: fixed;
z-index: 1;
top: 90vh;
`

const Btn = styled.div`
font-size: 1em;
font-family: Poppins;
padding: 1vh 1vw;
background-color: royalblue;
border-radius: 10rem;
color: #fff;
`