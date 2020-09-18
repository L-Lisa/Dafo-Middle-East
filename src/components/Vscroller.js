/* import React, { useState } from 'react'
import styled from "styled-components/macro"
import { Link, animateScroll as scroll } from "react-scroll";



export const Vscroller = () => {


  return (
    <Vdiv>
      <Link to="sectionEnd"> <WhiteV>&#8595;</WhiteV></Link>
      <Link to="top"> <BlackV>&#8593;</BlackV></Link>
      <br />
    </Vdiv >
  )
}

const Vdiv = styled.div`
z-index: 200;
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


@media (min-width:1190px){
    display: flex;
    bottom: 60px;
    }
`;
const WhiteV = styled.p`
color:white;
`;
const BlackV = styled.p`
color:black;
`; */