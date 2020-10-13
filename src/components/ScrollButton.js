import React from 'react'
import styled from "styled-components/macro"
import { Link } from "react-scroll";



export const ScrollLink = () => {


    return (
        <BtnContainer >

            <Link
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                offset={-193}
                duration={500}>
                &#9678;
            </Link>

            <Link
                activeClass="active"

                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                to="sectionMid">
                &#9678;
            </Link>


            <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-74}
                duration={500}
                to="sectionEnd">
                &#9678;
            </Link>

        </BtnContainer >
    )
}


const BtnContainer = styled.div`
    z-index: 2000;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
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
 
    border-radius: 50%;
    margin-right: 7px;
}
.active {
      color: #ee273e;
    }
`;

