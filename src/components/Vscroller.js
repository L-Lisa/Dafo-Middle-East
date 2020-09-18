import React, { useState } from 'react'
import styled from "styled-components/macro"
import { Link, animateScroll as scroll } from "react-scroll";



export const VscrollerTop = () => {
  return (
    <Vdiv>
      <Link
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        to="top"><p>V</p>
      </Link>
    </Vdiv >
  )
}

export const VscrollerMid = () => {
  return (
    <Vdiv>
      <Link
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        to="sectionMid"><p>V</p>
      </Link>
    </Vdiv >
  )
}
export const VscrollerEndd = () => {
  return (
    <Vdiv>
      <Link
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        to="sectionEnd"><p>V</p>
      </Link>
    </Vdiv >
  )
}

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
color: red;
display:none;
    margin-bottom: 20px;
@media (min-width:1190px){ 
    display:flex;
    bottom: 60px;
    }
`;
