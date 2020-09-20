
import React from "react"
import styled from "styled-components/macro"


export const ContactInfoCard = ({ title, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, secondaryText, secondaryText2, secondaryText3 }) => {
    return (

        <Container >
            <TitleBar>

                {title && <Title>{title}</Title>}

            </TitleBar>
            <TextDiv>

                {p1 && <P1>{p1}</P1>}
                {p2 && <P1 >{p2}</P1 >}
                {p3 && <P1>{p3}</P1 >}
                {p4 && <P1>{p4}</P1 >}
                {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
                {p5 && <P1>{p5} </P1 >}
                {p6 && <P1>{p6}</P1>}
                {secondaryText2 && <SecondaryText>{secondaryText2}</SecondaryText>}
            </TextDiv>
            <TextDiv>
                {secondaryText3 && <SecondaryText>{secondaryText3}</SecondaryText>}

                {p7 && <P1 >{p7}</P1 >}
                {p8 && <P1>{p8}</P1 >}
                {p9 && <P1>{p9}</P1 >}
                {p10 && <P1>{p10} </P1 >}
            </TextDiv>

        </Container >
    )
}

const Container = styled.section`
width: 200px;
    height: auto;
    margin: 20px;
    padding-bottom: 10px;
`;

const TitleBar = styled.div`
width:100%;
text-align:center;
`;

const Title = styled.h1`
    width: 100%;
    margin: 0px;
    font-weight: 500;
    text-align: left;
`;
const TextDiv = styled.div`
margin-left:3px;
`;

const P1 = styled.p`
text-align: left;
    margin-block-end: 0;
    margin-block-start: 0;
    font-size: 0.9em;
`;

const SecondaryText = styled.h2`
width: 100%;
    margin: 0px;
    font-weight: 400;
    text-transform: uppercase;
    font-size: medium;
    padding-top: 9px;
`;