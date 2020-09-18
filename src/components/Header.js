import React, { useState } from "react"
import styled from 'styled-components/macro'
import dafoMEred from "..//images/dafoMEred.jpg"
import { Link, NavLink } from "react-router-dom"
import youtubeicon from "..//images/youtubeicon.png"
import twittericon from "..//images/twittericon.png"
import Linkedin from "..//images/Linkedin.png"
import Vehicle from "..//images/Vehicle.jpg"
import redNblack from "..//images/redNblackLogo.png"
import DafoRedNoBackground from "..//images/DafoVehicleLogoNoBackground.png"
import DafoRedFlame from "../images/DafoRedFlame.jpg"
import { ScrollLink } from "components/ScrollButton"

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showProducts, setShowProducts] = useState(false)
    const [showMenuX, setShowMenuX] = useState(false)
    return (
        < HeaderWrapper >
            {/*  <TopHeader>
                <SocialMediaBox>
                    <a href="https://www.youtube.com/channel/UCnnPIlXaWwE-wY3X-l3nTXw" target="_blank" rel="noopener noreferrer"><LogoIcon src={youtubeicon} alt="Dafo Youtube link" /></a>
                    < a href="https://www.linkedin.com/company/dafo-middle-east" target="_blank" rel="noopener noreferrer"><LogoIcon src={Linkedin} alt="Dafo youtube link" /></a>
                    < a href="https://twitter.com/Dafovehicle" target="_blank" rel="noopener noreferrer"><LogoIcon src={twittericon} alt="Dafo twitter link" /></a>

                    <Link to="/"><VehicleImg src={DafoRedNoBackground} alt="Dafo Middle East" /></Link>
                </SocialMediaBox>

                <MiniNav>
                    <NavLink to="/downloads">Downloads</NavLink>
                    <NavLink to="/contact-us">Contact</NavLink>
                    <NavLink to="/">Home</NavLink>
                </MiniNav>
            </TopHeader> */}


            <Nav>
                <BurgerBox>
                    {/*  <LogoHeader>
                        <Link to="/"><img src={DafoRedNoBackground} alt="Dafo Middle East" /></Link>
                    </LogoHeader> */}

                    <Hamburger>
                        <div className="container" onClick={() => setShowMenu(!showMenu)}>

                            <div className={showMenu ? `xclose1` : `bar1`}></div>
                            <div className={showMenu ? `xclose2` : `bar2`}></div>
                            <div className={showMenu ? `xclose3` : `bar3`}></div>
                        </div>

                    </Hamburger>
                </BurgerBox>
                {showMenu &&
                    <ul>
                        <li>
                            <NavLink to="/vehicles" onClick={() => setShowMenu(false)}>Vehicles</NavLink>
                        </li>
                        <li>
                            <NavLink to="/power" onClick={() => setShowMenu(false)}>Power generators </NavLink>
                        </li>
                        <li>
                            <NavLink to="/mining" onClick={() => setShowMenu(false)}>Mining & heavy duty mobile equipment</NavLink>
                        </li>
                        <li>
                            <NavLink to="#" onClick={() => setShowMenu(false)}>Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/certifications" onClick={() => setShowMenu(false)}>Certificates</NavLink>
                        </li>
                        <li>
                            <NavLink to="#" onClick={() => setShowMenu(false)}>About Dafo</NavLink>
                        </li>
                        <li>
                            <NavLink to="/downloads" onClick={() => setShowMenu(false)}>Downloads</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact-us" onClick={() => setShowMenu(false)}>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/site-map" onClick={() => setShowMenu(false)}>Site Map</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" onClick={() => setShowMenu(false)}>Home</NavLink>
                        </li>
                        {/* <img src={DafoRedFlame} alt="Dafo Middle East" /> */}
                    </ul>
                }
            </Nav>
            <InlineNav>
                <ul>
                    <li>
                        <NavLink to="#" onClick={() => setShowProducts(!showProducts)}>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="#">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/certifications">Certificates</NavLink>
                    </li>
                    <li>
                        <NavLink to="#">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/downloads">Downloads</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact-us">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                </ul>
            </InlineNav>
            {showProducts &&
                <InlineNav2 id="close" >
                    <ProductNav>Automatic fire detection and suppression system for:</ProductNav>
                    <Li2>
                        <NavLink to="/vehicles" onClick={() => setShowProducts(false)}> <Link

                            to="top"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                        </Link>Vehicles</NavLink>
                    </Li2>
                    <Li2>
                        <NavLink to="/power" onClick={() => setShowProducts(false)}><Link

                            to="top"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                        </Link>Powergenerators</NavLink>
                    </Li2>
                    <Li2>
                        <NavLink to="/mining" onClick={() => setShowProducts(false)} > <Link

                            to="top"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                        </Link>Mining & heavy duty mobile equipment</NavLink>
                    </Li2>
                </InlineNav2>
            }

        </HeaderWrapper >

    )
}

const HeaderWrapper = styled.main`
background:white;
box-sizing:border-box;
width:100%;
position: -webkit-sticky;
position: sticky;
top: 0;
z-index: 10;
`;

const TopHeader = styled.section`
box-sizing:border-box;
background:black;
width:100%;
padding:10px;
height:60px;
display:none;
@media(min-width:676px){
    display:flex; 
    justify-content:space-between;
}
`;

/* const SocialMediaBox = styled.span`
    width: 35%;
    display: flex;
    align-items: center;
`
const LogoIcon = styled.img`
height:30px;
margin-right:3px;
`
const MiniNav = styled.div`
width:300px;
display:flex;
justify-content: flex-end;
a{
    color:white;
    text-decoration:none;
    margin:6px;
    align-self: center;
    transition: transform .2s;
    &:hover{
        color:gray;
        transform: scale(1.1);
    }}
`; */
const LogoHeader = styled.div`
img{
width: 150px;
padding: 20px;
}
@media(min-width:676px){
    display:none;
}
`;
const BurgerBox = styled.section`
display:flex;
flex-direction:column;
align-items: center;
background:#fff;
justify-content:space-between;
@media(min-width:319px){
    flex-direction:row;
}
`;

const Nav = styled.nav`
background:white;
ul{
    
    list-style:none;
    text-decoration:none;
    width: auto;
    margin-left: 20%;
    margin-top: -1px;
    background: #1c1c1c;
    padding-bottom: 10px;
    li:nth-child(odd) {
        background: #3f3e3e;
    display: inline;
    padding: 0 6px;
    border-radius: 2px;   
}
}
li{
    line-height: 1.7rem;
    
}
a{
    text-decoration:none;
    color: #ffff;
    &:hover{
        color:gray;
    }
}
`;
const Hamburger = styled.div`
margin-right: 5px;
@media(min-width:319px){
    margin-right:18px;
}
.container {
  display: inline-block;
  cursor: pointer;
  height: 32px;
    width: 100%;
    margin: 15px;
  @media(min-width:676px){
    display:none;
}
}
.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  background-color: #eb0e0c;
  margin: 6px 0;
  transition: 0.4s;
  border-radius:2px;
}
.xclose1 {
width: 70px;
  height: 10px;
  background-color: #eb0e0c;
  margin: 6px 10px 0 0;
  border-radius:2px;
  top:  19px;
  left:-7px;
  transform: scale(0.5) rotate(-45deg);
}
.xclose2{
    display:none;
}
.xclose3{
    width: 70px;
  height: 10px;
  background-color: #eb0e0c;
  margin: -10px 0;
  transition: 0.4s;
  border-radius:2px;
top: 20px;
left:-7px;
transform: scale(0.5) rotate(45deg);  
}
`;

const InlineNav = styled.ul`
display:none;
background:white;
box-sizing: border-box;
ul{
    list-style:none;
    display:flex;
    justify-content: center;
    padding:20px 10px;
}
a{
text-decoration:none;
transition: transform .2s;
padding: 0 8px 0 8px;
color:#626262;
&:hover{
        color:black;
}}
li{
    transition: transform .2s;
    &:hover{
        border-radius:5%;
        transform: scale(1.1);
    }}
@media(min-width:676px){
    display:inline;
    }
`;
const InlineNav2 = styled.ul`
box-sizing: border-box;
    list-style: none;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 20px 10px;
    margin-top:-25px;
    flex-direction: column;
    text-align: left;
    margin-left: 20%;
    @media only screen and (min-width : 1000px) {
  flex-direction:row;
  text-align:left;
  margin-left:unset;
}
a{
text-decoration:none;
transition: transform .2s;
padding:0 16px 0 0 ;
color:#626262a3;
&:hover{
        color:black;
}}
`;
const ProductNav = styled.p`
margin-top: 0px;
padding-right: 12px;
color:#eb141b;
`;

const Li2 = styled.li`
list-style:none;
    text-decoration:none;
    transition: transform .2s;
    &:hover{
        border-radius:5%;
        transform: scale(1.1);
        color:#626262;
    }
`;

const VehicleImg = styled.img`
height: 55px;
margin-left: 5px;
`