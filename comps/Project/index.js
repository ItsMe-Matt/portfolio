import styled from 'styled-components'
import Image from 'next/image'

export default function Project({
    title = "Project 1",
    detail = "This worked well",
    img = "/projImg/cPTitle.png"
}) {
    return <Container onClick={()=>{
        console.log("i have been touched")
    }}>
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

                <ReadButton>
                    Read More...
                </ReadButton>
            </TxtCont>
        </Right>

    </Container>
}

const Container = styled.div`
    display: flex;
    padding:1rem 2rem
`

const Left = styled.div`
    width: 50%;
    padding: 0.5rem;
`
const Right = styled.div`
    width: 50%;
    float: right;
    padding: 0.5rem;
`
const ImgCont = styled.div`
margin: 1rem;
overflow: hidden;
border-radius: 1rem;
`

const TxtCont = styled.div`
margin: 1rem;
`

const TxtHeader = styled.h1`
    font-size: 2.25rem;
    font-family: Zilla Slab;
    font-weight: 600;
`

const TxtP = styled.p`
    font-family: Roboto;
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 2

`
const ReadButton = styled.div`
background-color: #ebebeb;
display: flex;
justify-content: flex-end;
align-item: flex-end;
display: none
`

