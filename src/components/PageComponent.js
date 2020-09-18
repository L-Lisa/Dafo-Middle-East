import React from "react"
import styled from 'styled-components/macro'
import { Link, animateScroll as scroll } from "react-scroll";
import { ScrollLink } from "components/ScrollButton"

export const PageComponent = ({ coverImage, ImageText, headerText, mainText1, mainText2, mainText3, lastElement }) => {

    return (

        <PageWrapper>
            <ScrollLink />

            <TopSection id="top">

                {coverImage && <CoverImage src={coverImage} />}
                <TopText>
                    {ImageText && <p>{ImageText}</p>}
                </TopText>
                <V><Link activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    to="sectionMid"><p>&#8595;</p>
                </Link></V>
            </TopSection>

            <MidSection id="sectionMid">
                {headerText && <HeaderText>{headerText}</HeaderText>}
                {mainText1 && <MainText>{mainText1}</MainText>}
                <Line></Line>
                {mainText2 && <MainText>{mainText2}</MainText>}
                <Line></Line>
                {mainText3 && <MainText>{mainText2}</MainText>}
                <VEnd><Link activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    to="sectionEnd"><p>&#8595;</p></Link></VEnd>
            </MidSection>
            <EndSection id="sectionEnd">
                {lastElement && <LastDiv>{lastElement}</LastDiv>}

            </EndSection>
        </PageWrapper>
    )
}




const PageWrapper = styled.section`
width:100%;
`;

const TopSection = styled.section`
width:100%;
height:auto;
  @media (min-width: 1200px) {
  height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  }
`;
const CoverImage = styled.img`
width: 100%;
height:auto;
`;

const TopText = styled.h1`
font-size: 2rem;
font-size: 2rem;
    position: absolute;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    display:none;
    p{
        background: #f5f5f566;
    border-radius: 2px;
    padding: 5px;
    text-transform: uppercase;
    letter-spacing: 3px;
    }
    @media (min-width: 1200px) {
        display: flex;
  }
`;
const Line = styled.div`
 height: 12px;
`;
const MidSection = styled.section`
width: 100%;
    background: #f5f5f5;
    margin: 0 auto;
    font-size: 1rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 3px;
    @media (min-width: 1200px) {
  height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding-left: 30px;
  font-size: 1.3rem;
  }
`;


const HeaderText = styled.h2`
font-size:1.2rem;

`;

const MainText = styled.article`
width:100%;
line-height: 1.5rem;
`;

const EndSection = styled.section`
width:100%;
height:auto;
display: flex;
    justify-content: center;
    align-items: center;
@media (min-width: 1200px) {
  height:100vh;
  
  }
`;

const LastDiv = styled.div`
height:auto;
`;
const V = styled.div`
width: 100%;
height:30px;
justify-content:center;
align-items:center;
color: red;
display:none;
    margin-bottom: 20px;
@media (min-width:1190px){ 
    display:flex;
    }
`;
const VEnd = styled.div`
width: 100%;
height: 30vh;
height:max-content;
justify-content:center;
align-items:center;
color: red;
display:none;
    margin-bottom: 20px;
@media (min-width:1190px){ 
    display:flex;
    }
`;
