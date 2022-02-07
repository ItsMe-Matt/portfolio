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
    padding:1rem 8rem
`

const Left = styled.div`
    width: 50%;
    padding: 0.15rem;
`
const Right = styled.div`
    width: 50%;
    float: right;
    padding: 0.15rem;
`
const ImgCont = styled.div`
margin: 1rem;
overflow: hidden;
border-radius: 1rem;
box-shadow: 0 0 0.5rem #ebebeb;
`

const TxtCont = styled.div`
margin: 1rem;
`

const TxtHeader = styled.h1`
    font-size: 2rem;
    font-family: Zilla Slab;
    font-weight: 500;
`

const TxtP = styled.p`
    font-family: Roboto;
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 2;
    color: #606060;

`

