
import React from "react"
import styled from "styled-components/macro"


export const ContactInfoCard = ({ title, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10 }) => {
    return (

        <Container >
            <TitleBar>

                <div>
                    {title && <Title>{title}</Title>}

                </div>
            </TitleBar>
            <TextDiv>
                {p1 && <P1>{p1}</P1>}
                {p2 && <P1 >{p2}</P1 >}
                {p3 && <P1>{p3}</P1 >}
                {p4 && <P1>{p4}</P1 >}
                {p5 && <P1>{p5} </P1 >}
            </TextDiv>
            <TextDiv>
                {p6 && <P1>{p6}</P1>}
                {p7 && <P1 >{p7}</P1 >}
                {p8 && <P1>{p8}</P1 >}
                {p9 && <P1>{p9}</P1 >}
                {p10 && <P1>{p10} </P1 >}
            </TextDiv>

        </Container >
    )
}

const Container = styled.section`
width:200px;
height:auto;
`;

const TitleBar = styled.div`
width:100%;
text-align:center;
`;

const Title = styled.h1`
font-weight:800;
`;
const TextDiv = styled.div`
margin-left:3px;
line-height: 10px;
`

const P1 = styled.p`
text-align:left;
`