
import React from "react"
import styled from "styled-components/macro"


export const ContactInfoCard = ({ socialHeadBox, socialHead, title, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, secondaryText, secondaryText2, secondaryText3 }) => {
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
                {socialHead && <SocialHead>{socialHead}</SocialHead>}
                {socialHeadBox && <SocialHeadBox>{socialHeadBox}</SocialHeadBox>}
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
min-width: 208px;
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
    margin-bottom: 6px;
    text-align: left;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 1.1em;
    padding-top: 9px;
`;
const TextDiv = styled.div`
margin-left:3px;
`;

const P1 = styled.p`
text-align: left;
    margin-block-end: 0;
    margin-block-start: 0;
    /* padding: 2px; */
    font-size: 0.9em;
`;

const SecondaryText = styled.h2`
width: 100%;
    margin: 0px;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 1.1em;
    margin-top:2px;   
`;

const SocialHead = styled.h2`
width: 100%;
    margin-bottom: 6px;
    text-align: left;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 1.1em;
    padding-top: 9px;
    text-align: center;
`;

const SocialHeadBox = styled.div`
display:flex;
justify-content:center;
width: 100%;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
`
