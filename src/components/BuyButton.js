import React, { useState } from 'react'
import styled from "styled-components/macro"
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom"


export const BuyButton = () => {


    return (
        <BtnContainer >
            <NavLink to="/contact-us">
                <Link
                    activeClass="active"
                    to="/contact-us"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>

                </Link><P>Place Order</P></NavLink>
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
    font-weight: 800;
    margin-bottom: 20px;
    top: 90vh;
    flex-direction: column;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: sticky;
@media (min-width:1190px){ 
    display: flex;
    }
a{
    padding: 6px;
    cursor: pointer;
    border-radius: 50%;
    margin-right: 7px;
    padding: 6px;
    cursor: pointer;
    border-radius: 50%;
    margin-right: 7px;
    text-decoration: none;
}
.active {
      color: red;
    }
`;


const P = styled.p`
background: red;
    color: #fff;
    padding: 6px;
    border-radius: 50px;
    font-size: 1rem;
background: red;
    color: #fff;
    @media (min-width: 750px) {
    padding: 19px;
    font-size: 2rem;
    }
`;

/* const Dot = styled.p`
height: 30px;
width: 30px;
background - color: #708090d4;
margin: 5px;
border - radius: 50 %;
border: 1px solid black;
color: #80808000;
    .activeClass: active{
    background - color: red;
}
`; */
