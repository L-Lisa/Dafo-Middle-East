import React from "react"
import styled from 'styled-components/macro'
import { Link, animateScroll as scroll } from "react-scroll";
import { ScrollLink } from "components/ScrollButton"
import { VscrollerTop, FootArrow, VscrollerMidDown, VscrollerEnd } from "components/Vscroller"


export const PageComponent = ({ coverImage, ImageText, headerText, mainText1, mainText2, mainText3, lastElement, listItem1, listItem2, listItem3, mainText4, EndHeader1, EndHeader2, lastElementColRow }) => {

    return (

        <PageWrapper>

            <ScrollLink />

            <TopSection id="top">

                {coverImage && <CoverImage src={coverImage} />}
                <TopText>
                    {ImageText && <p>{ImageText}</p>}

                </TopText>
                <VscrollerMidDown />
            </TopSection>


            <MidSection id="sectionMid">
                {headerText && <HeaderText>{headerText}</HeaderText>}
                {mainText1 && <MainText>{mainText1}</MainText>}
                <Line></Line>
                {mainText2 && <MainText>{mainText2}</MainText>}
                {listItem1 && <ListItem>
                    <ul>
                        <li>{listItem1}</li>
                        {listItem2 && <li>{listItem2}</li>}
                        {listItem3 && <li>{listItem3}</li>}
                    </ul>
                </ListItem>}
                <Line></Line>
                {mainText3 && <MainText>{mainText3}</MainText>}
                {mainText4 && <MainText>{mainText4}</MainText>}
                {/*   <VEnd><Link activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    to="sectionEnd"><p>&#8595;</p></Link></VEnd>
                    */}
                <VscrollerEnd />
            </MidSection>
            <EndSection id="sectionEnd">
                {EndHeader1 && <EndH1>{EndHeader1} </EndH1>}
                {EndHeader2 && <EndH2>{EndHeader2} </EndH2>}
                {lastElement && <LastDiv>{lastElement}</LastDiv>}
                {lastElementColRow && <LastElementColRow>{lastElementColRow}</LastElementColRow>}
            </EndSection>
            < FootArrow />
        </PageWrapper>
    )
}




const PageWrapper = styled.section`
width:100%;
`;

const TopSection = styled.section`
width:100%;
height:auto;
margin-top: -90px;
  @media (min-width: 1200px) {
  height:100vh;
  display:flex;
  margin-top: -140px;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  }
`;
const CoverImage = styled.img`
width: 100%;
object-fit: contain;
@media (min-width: 1200px) {
  height:90vh;
  object-fit: cover;
  }
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
    top: 123px;
    left: 15px;
    p{
        background: #f5f5f566;
    border-radius: 2px;
    padding: 5px;
    text-transform: uppercase;
    letter-spacing: 3px;
    }
    @media (min-width: 670px) {
        display: flex;
  }
  @media (min-width: 1200px) {
    top: unset;
    left:unset;
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
    margin-top: -3px;
    align-items:center;
    @media (min-width: 768px) {
      height: 70vh;
  }
    @media (min-width: 1200px) {
  height:100vh;
  display:flex;
  padding-left: 30px;
  font-size: 1.3rem;
  }
`;

const ListItem = styled.ul`
color:#1c1c1c;
padding: 14px;
align-self: flex-start;
@media (min-width: 1200px) {
 margin-left:140px;
  }
`;
const HeaderText = styled.h2`
font-size:1.2rem;
/* margin-top: 50px; */
`;

const MainText = styled.article`
width: 100%;
line-height: 1.5rem;
padding: 0 10px 0 10px;
@media (min-width: 1200px) {
padding: 0 40px 0 40px;
  }

`;

const EndSection = styled.section`
width:100%;
height:auto;
display: flex;
flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 15px;
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
color: #ee273e;
display:none;
    margin-bottom: 20px;
@media (min-width:1190px){ 
    display:flex;
    }
`;

const LastElementColRow = styled.div`
height: auto;
display: flex;
flex-direction: column;
flex-wrap: wrap;
    align-content: center;
    justify-content: center;
@media (min-width:500px){ 
    flex-direction:row;
    width: inherit;
    }
`;
/* const VEnd = styled.div`
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
 */

const EndH1 = styled.h1`
font-size: 26px;
 margin: 0 auto;
    color: white;
    background: #1c1c1c;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    text-align: center;
    padding: 5px;
  max-width: 250px; 
    text-transform: uppercase;
    -webkit-letter-spacing: 2px;
    -moz-letter-spacing: 2px;
    -ms-letter-spacing: 2px;
    letter-spacing: 2px;
    font-weight: 700;
    margin-block-start: 0; 
    @media(min-width:630px){
        font-size: 36px;
        max-width:unset;
}
`;

const EndH2 = styled.h2`
font-size:20px;
`;
