import React from "react"
import styled from 'styled-components/macro'
import { Link, animateScroll as scroll } from "react-scroll";
import { ScrollLink } from "components/ScrollButton"
import { VscrollerTop, FootArrow, VscrollerMidDown, VscrollerEnd } from "components/Vscroller"
import { RedLine } from "../components/RedLine"

export const PageComponent = ({ coverImage, ImageText, headerText, mainText1, mainText2, mainText3, lastElement, listItem1, listItem2, listItem3, mainText4, EndHeader1, EndHeader2, lastElementColRow }) => {

  return (

    <PageWrapper>

      <ScrollLink />
      {coverImage &&
        <TopSection id="top">
          <CoverImage src={coverImage} alt="Dafo Middle East" />
          <VscrollerMidDown />
          <TopText>
            {ImageText && <p>{ImageText}</p>}
          </TopText>

        </TopSection>}

      <MidSection id="sectionMid" >
        {headerText && <HeaderText>{headerText}</HeaderText>}
        {mainText1 && <MainText >{mainText1}</MainText>}
        <Line></Line>
        {mainText2 && <MainText>{mainText2}</MainText>}
        {listItem1 && <ListItem>
          <ul>
            {listItem1 && <li><RedLine />{listItem1}</li>}
            {listItem2 && <li><RedLine />{listItem2}</li>}
            {listItem3 && <li><RedLine />{listItem3}</li>}
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

    </PageWrapper>
  )
}




const PageWrapper = styled.section`
width:100%;
`;

const TopSection = styled.section`
width:100%;
height:auto;
margin-top: -45px;
background: #1c1c1c;
@media (min-width: 400px) {
  margin-top: -90px;
}
  @media (min-width: 1200px) {
    height: 100vh;
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
  object-fit: cover;
  height:100%;
  }
`;

const TopText = styled.h1`
/* font-size: 2rem;
font-size: 2rem; */
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
    font-size: calc(24px + 1vw);
   /*  letter-spacing: 3px; */
    }
    @media (min-width: 670px) {
        display: flex;
  }
  @media (min-width: 1200px) {
    top: unset;
    left: 30px;
   /*  font-size: 50px; */
  }
  @media (min-width: 1800px) {
    left: 60px;
 /*    font-size: 60px; */
  }
`;
const Line = styled.div`
 height: 12px;
`;
const MidSection = styled.section`
width: 100%;
background: #f5f5f5;
margin: 0 auto;
  /* font-size: 1rem; */
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
align-items:center;
margin-top: -7px;
    @media (min-width: 768px) {
  }
    @media (min-width: 1200px) {
  min-height:100vh;
  font-size: 1.3rem;
  }
`;

const ListItem = styled.ul`
color:#1c1c1c;
padding: 14px 0px;
align-self: flex-start;
li{
  list-style:none;
  @media (min-width: 400px) { 
    line-height: 3rem;
    margin-left: 6rem;
  }
}
@media (min-width: 1200px) {
    padding: 25px 0px;
    padding: 0 40px 0 40px;
    width: 70%;
    margin: 0 auto;
    padding-left: 10px;
  }
`;
const HeaderText = styled.h1`
margin-top: 35px;
text-align: center;
@media (min-width: 400px) {
text-align: left;
width: 88%;
}
@media (min-width: 400px) {
  margin-top: 50px;
}
@media (min-width: 1200px) {
  /*   font-size: 2.2rem; */
padding-bottom: 50px;
width: 70%;
  }
`;

const MainText = styled.article`
width: 90%;
line-height: 1.5rem;
padding: 0 10px 0 10px;
@media (min-width: 1200px) {
padding: 0 40px 0 40px;
width: 70%;
margin: 0 auto;
padding-left:10px;
  }
  @media (min-width: 1500px) {
  width: 70%;
  margin: 0 auto;
  padding-left:10px;
  }
`;

const EndSection = styled.div`
width:100%;
height:auto;
display: flex;
flex-direction: column;
background: ${props => props.background || "white"};
justify-content: center;
align-items: center;
@media (min-width: 1200px) {
  min-height: 100vh;
  background: #1c1c1c;
  }
`;

const LastDiv = styled.div`
height:auto;
width: 100%;
background:#1c1c1c;
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

export const EndH1 = styled.h2`
/* font-size: 26px; */
 margin: 0 auto;
    color: #ee0201;
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
    letter-spacing: 1px;
    font-weight: 700;
    margin-block-start: 0; 
    @media(min-width:630px){
      /*   font-size: 30px; */
        max-width:unset;
}
`;

const EndH2 = styled.h2`
/* font-size:20px; */
`;

/*
const RedLine = styled.span`
color:red;
width:6px;
height:2px;
`; */