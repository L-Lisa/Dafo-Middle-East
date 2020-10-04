import React, { useState } from 'react'
import styled from "styled-components/macro"
import { Link, animateScroll as scroll } from "react-scroll";



export const Vscroll400 = () => {
  function scrollMoreDown300() {
    scroll.scrollMore(400);
  }
  return (
    <Div400>
      <Btn400 onClick={scrollMoreDown300}>&#8595;</Btn400>
    </Div400>
  )
}

export const VscrollerTop = () => {
  return (
    <Vdiv>
      <Link
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        to="top"><P>&#8593;</P>
      </Link>
    </Vdiv>
  )
}

export const VscrollerMidDown = () => {
  return (
    <VscrollerMidDownDiv>
      <Link
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        to="sectionMid"><P>&#8595;</P>
      </Link>
    </VscrollerMidDownDiv >
  )
}
export const VscrollerEnd = () => {
  return (
    <>
      < MarginP></MarginP>
      <Vdiv>
        <Link
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          to="sectionEnd"><P>&#8595;</P>
        </Link>
      </Vdiv >
    </>
  )
}

export const FootArrow = () => {
  return (
    <FootDiv>
      <Link
        activeClass="active"
        to="top"
        spy={true}
        smooth={true}
        offset={-15}
        duration={500}> &#8593;
    </Link>
    </FootDiv>
  )
}

const FootDiv = styled.div`
height:30px;
color:#fff;
background:gray;
display:flex;
padding: 7px;
justify-content:center;
:hover{
color:gray;
background:#e9e9ea;
}`;

const Vdiv = styled.div`
/* z-index: 200;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    font-weight: 900;
    font-size: 2rem;
    margin-bottom: 20px;
    position: absolute;
    bottom: -239%;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: absolute;
 */
width: 100%;
height:30px;
justify-content:center;
align-items:center;
color: #ee273e;
display:none;
margin-top: 5px;
    margin-bottom: 5px;
    margin: 5px;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  
@media (min-width:1190px){ 
    display:flex;
    bottom: 60px;
    }
`;

export const VscrollerMidDownDiv = styled.div`
width:100%;
position: absolute;
z-index: 9;
display: none;
bottom:8px;
color: #ee273e;
height:30px;
@media (min-width: 1200px) {
  display: flex;
  justify-content: center;
align-items: center;
a{
  width: 20px;
  cursor: pointer;
}
}
`;

const P = styled.p`
font-size: 1.5rem;
`;

const MarginP = styled.div`
margin:50px;
`;

const Div400 = styled.div`
    align-self: center;
    margin-top: -40px;
`;

const Btn400 = styled.button`
width: auto;
    color: #ee273e;
    background: #fff;
    border-radius: 50%;
    padding: 4px;
    border: none;
    :focus{
      color:none;
    }
`