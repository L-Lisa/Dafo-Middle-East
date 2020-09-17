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
                offset={0}
                duration={1000}>
                &#9678;
            </Link>

            <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                to="sectionMid">
                &#9678;
            </Link>



            <Link
                activeClass="active"
                to="sectionEnd"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >  &#9678;</Link>

        </BtnContainer >
    )
}


const BtnContainer = styled.div`
width:100%;
height:50px;
z-index:200;
display:flex;
align-content:center;
justify-content: center;
font-weight:900;
font-size:2rem;
margin-bottom: 20px;
a{
    padding:10px;
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
