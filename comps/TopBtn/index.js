import styled from 'styled-components'
import Link from 'next/link'
import { AiOutlineToTop } from 'react-icons/ai'

export default function TopBtn() {

    return (
        <Container>
            <Link href="">
                <div>
                    <Btn>
                        Back to the Top
                    </Btn>

                    <Btn2>
                        <AiOutlineToTop size="2.5em" color="#fff" />
                    </Btn2>
                </div>

            </Link>

        </Container>

    )
}

const Container = styled.div`
width: 65vw;
display: flex;
justify-content: flex-end;

position: fixed;
z-index: 1;
top: 90vh;
right: 18vw;

@media (max-width: 768px) {
    width: 100%;
    top: 90%;
    right: 5%;
    }
`

const Btn = styled.div`
font-size: 1em;
font-family: Poppins;
padding: 1vh 1vw;
background-color: royalblue;
border-radius: 10rem;
color: #fff;

@media (max-width: 768px) {
display: none;
    }
`

const Btn2 = styled.div`


display: none;

@media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4em;
    width: 4em;
    background-color: royalblue;
    border-radius: 10rem;
}
`