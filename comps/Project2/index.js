import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

export default function Project({
    title = "Project 1",
    detail = "This worked well",
    img = "/projImg/cPTitle.png",
    route="/",
}) {
    return <Link href={route}>
    <Container>
        <Left>
            <ImgCont>
                <Image src={img}
                width={2078}
                height={1178}
                layout='responsive'
                />
            </ImgCont> 
        </Left>
        <Right>
            <TxtCont>
                <TxtHeader>
                    {title}
                </TxtHeader>

                <TxtP>
                    {detail}
                </TxtP>
            </TxtCont>
        </Right>

    </Container>
    </Link>
}

const Container = styled.div`
    display: flex;
    padding:1rem 0rem;
    width: 75%;
    background-color: seagreen;
`

const Left = styled.div`
    width: 50%;
    margin-right: 0.5vw;
    background-color: red;
`
const Right = styled.div`
    width: 50%;
    float: right;
    margin-left: 0.5vw;
    
`
const ImgCont = styled.div`
overflow: hidden;
border-radius: 1rem;
`

const TxtCont = styled.div`
`

const TxtHeader = styled.h1`
    font-size: 3vh;
    font-family: Zilla Slab;
    font-weight: 500;
    padding: 0;
    margin: 0
`

const TxtP = styled.p`
    font-family: Roboto;
    font-size: 100%;
    font-weight: 300;
    line-height: 1.75;
    color: #606060;

`

