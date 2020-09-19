import React, { useState } from 'react'
import styled from "styled-components/macro"
import { Link, animateScroll as scroll } from "react-scroll";



export const ScrollLink = () => {


    return (
        <BtnContainer >

            <Link
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                offset={-15}
                duration={500}>
                &#9678;
            </Link>

            <Link
                activeClass="active"

                spy={true}
                smooth={true}
                offset={-15}
                duration={500}
                to="sectionMid">
                &#9678;
            </Link>


            <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                to="sectionEnd">
                &#9678;
            </Link>

        </BtnContainer >
    )
}


const BtnContainer = styled.div`
    z-index: 200;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    -webkit-align-content: center;
    -ms-flex-line-pack: center; 
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    font-weight: 900;
    font-size: 2rem;
    margin-bottom: 20px;
    position: absolute;
    top:300px;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: sticky;
    display: none;
@media (min-width:1190px){ 
    display: flex;
    }
a{
    padding: 6px;
    cursor: pointer;
    background: #ffffff0a;
    /* border: 1px solid black; */
    border-radius: 50%;
    margin-right: 7px;
}
.active {
      color: red;
    }
`;


/* const Dot = styled.p`
height: 30px;
width: 30px;
    background-color: #708090d4;
    margin: 5px;
    border-radius: 50%;
    border: 1px solid black;
    color: #80808000;
    .activeClass:active{
    background-color:red;
}
`; */
