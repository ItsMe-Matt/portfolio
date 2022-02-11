import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

export default function Project({
    title = "Project 1",
    type = "graphic designer",
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
                <TxtType>
                    {type}
                </TxtType>

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
    width: 60%;
    border: solid 1px black;
    border-radius: 1rem;
    margin: 0.5rem;
    background-color: #ffffff;

    &:hover {
        transition: 0.5s;
        width: 75%;
        
        
    }

`

const Left = styled.div`
    width: 60%;
    margin-right: 0.5vw;
`
const Right = styled.div`
    width: 30%;
    float: right;
    margin-left: 0.5vw;
    
`
const ImgCont = styled.div`
    overflow: hidden;
    border-radius: 1rem 0 0 1rem;
`

const TxtCont = styled.div`
    padding: 1vh 0;
    width: 26vw;
`
const TxtType = styled.p`
    font-family: Zilla Slab;
    font-size: 2vh;
    font-weight: 300;
    color: #000000;
`

const TxtHeader = styled.h1`
    font-size: 2rem;
    font-family: Zilla Slab;
    font-weight: 500;
    padding: 0;
    margin: 0;

`

const TxtP = styled.p`
    font-family: Roboto;
    font-size: 100;
    font-weight: 300;
    line-height: 1.75;
    color: #606060;
`

