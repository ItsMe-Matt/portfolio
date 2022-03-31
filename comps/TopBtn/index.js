import styled from 'styled-components'
import Link from 'next/link'
import { MdOutlineVerticalAlignTop } from 'react-icons/md'

export default function TopBtn() {

    return (
        <Container>
            <Link href="">
                <div>
                    <Btn>
                        Back to the Top
                    </Btn>

                    <Btn2>
                        <MdOutlineVerticalAlignTop size="2em" color="#fff" />
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


@media (max-width: 599px)  {
    width: 100%;
    top: 90%;
    right: 5%;
}

@media only screen and (min-width: 600px) {
    width: 100%;
    top: 90%;
    right: 10%;
}

@media only screen and (min-width: 992px) {

    top: 90vh;
    right: 15vw;
}

`

const Btn = styled.div`
font-size: 1em;
font-family: Poppins;
padding: 1vh 1vw;
background-color: #4169e1;
border-radius: 10rem;
color: #fff;

@media (max-width: 599px)  {
display: none;
    }
`

const Btn2 = styled.div`


display: none;

@media (max-width: 599px)  {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3em;
    width: 3em;
    background-color: #4169e1;
    border-radius: 10rem;
}
`