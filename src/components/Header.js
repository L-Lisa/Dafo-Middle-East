import React, { useState } from "react";
import styled from "styled-components/macro";

import { NavLink } from "react-router-dom";

import DafoRedNoBackground from "..//images/DafoVehicleLogoNoBackground.png";

import REDVehicle from "..//images/RED_VEHICLE_LOGO.png";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  return (
    <HeaderWrapper>
      <Nav>
        <BurgerBox>
          <NavLink to="/" onClick={() => setShowProducts(false)}>
            <BurgerLogo src={REDVehicle} alt="Dafo Middle East" />
          </NavLink>
          <Hamburger>
            <div className="container" onClick={() => setShowMenu(!showMenu)}>
              <div className={showMenu ? `xclose1` : `bar1`}></div>
              <div className={showMenu ? `xclose2` : `bar2`}></div>
              <div className={showMenu ? `xclose3` : `bar3`}></div>
            </div>
          </Hamburger>
        </BurgerBox>
        {showMenu && (
          <ul>
            <li>
              <StyledBurgerLink
                to="/vehicles"
                onClick={() => setShowMenu(false)}
              >
                Vehicles
              </StyledBurgerLink>
            </li>
            <li>
              <StyledBurgerLink to="/power" onClick={() => setShowMenu(false)}>
                Power generators{" "}
              </StyledBurgerLink>
            </li>
            <li>
              <StyledBurgerLink to="/mining" onClick={() => setShowMenu(false)}>
                Mining & heavy duty equipment
              </StyledBurgerLink>
            </li>
            <li>
              <StyledBurgerLink
                to="/distributors"
                onClick={() => setShowMenu(false)}
              >
                Distributors
              </StyledBurgerLink>
            </li>

            <li>
              <StyledBurgerLink to="/about" onClick={() => setShowMenu(false)}>
                About Dafo
              </StyledBurgerLink>
            </li>
            <li>
              <StyledBurgerLink
                to="/downloads"
                onClick={() => setShowMenu(false)}
              >
                Downloads
              </StyledBurgerLink>
            </li>

            <li>
              <StyledBurgerLink
                to="/site-map"
                onClick={() => setShowMenu(false)}
              >
                Site Map
              </StyledBurgerLink>
            </li>
            <li>
              <StyledBurgerLink to="/" onClick={() => setShowMenu(false)}>
                Home
              </StyledBurgerLink>
            </li>
          </ul>
        )}
      </Nav>
      <InlineNav>
        <ul>
          <li>
            <NavLink to="#" onClick={() => setShowProducts(!showProducts)}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/distributors" onClick={() => setShowProducts(false)}>
              Distributors
            </NavLink>
          </li>

          <li>
            <NavLink to="/" onClick={() => setShowProducts(false)}>
              {" "}
              <NavListLogo src={DafoRedNoBackground} alt="Dafo Middle East" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/downloads" onClick={() => setShowProducts(false)}>
              Downloads
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setShowProducts(false)}>
              About
            </NavLink>
          </li>
        </ul>
      </InlineNav>
      {showProducts && (
        <InlineNav2 id="close">
          <ProductNav>
            Automatic fire detection and suppression system for:
          </ProductNav>
          <Li2>
            <NavLink to="/vehicles">Vehicles</NavLink>
          </Li2>
          <Li2>
            <NavLink to="/power">Powergenerators</NavLink>
          </Li2>
          <Li2>
            <NavLink to="/mining">Mining & heavy duty mobile equipment</NavLink>
          </Li2>
        </InlineNav2>
      )}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.main`
  background: #1c1c1c;
  box-sizing: border-box;
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1000;
  margin-bottom: -14px;
`;

const BurgerBox = styled.section`
  display: flex;
  align-items: center;
  background: #1c1c1c;
  justify-content: space-between;
  @media (min-width: 319px) {
    flex-direction: row;
  }
`;

const Nav = styled.nav`
  background: white;
  ul {
    list-style: none;
    text-decoration: none;
    width: auto;
    background: #1c1c1c;
    padding: 10px 6px;
    margin: 0px 0px;
    li:nth-child(odd) {
    }
  }
  li {
    line-height: 1.8rem;
    margin-left: 10%;
  }
`;
const StyledBurgerLink = styled(NavLink)`
  text-decoration: none;
  color: #ffff;
  border-bottom: 1px solid #eb0f1a;
  &:hover {
    color: lightgrey;
    border-bottom: 2px solid #eb0f1a;
  }
`;
const Hamburger = styled.div`
  margin-right: 5px;
  @media (min-width: 319px) {
    margin-right: 18px;
  }
  .container {
    display: inline-block;
    cursor: pointer;
    height: 32px;
    width: 100%;

    @media (min-width: 676px) {
      display: none;
    }
  }
  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 5px;
    background-color: #ee0201;
    margin: 6px 0;
    transition: 0.4s;
    border-radius: 2px;
  }
  .xclose1 {
    width: 70px;
    height: 10px;
    background-color: #ee0201;
    margin: 6px 10px 0 0;
    border-radius: 2px;
    top: 19px;
    left: -7px;
    transform: scale(0.5) rotate(-45deg);
  }
  .xclose2 {
    display: none;
  }
  .xclose3 {
    width: 70px;
    height: 10px;
    background-color: #ee0201;
    margin: -10px 0;
    transition: 0.4s;
    border-radius: 2px;
    top: 20px;
    left: -7px;
    transform: scale(0.5) rotate(45deg);
  }
`;
const BurgerLogo = styled.img`
  padding: 3px 2px 2px 3px;
  height: 55px;
  @media (min-width: 676px) {
    display: none;
  }
`;
const InlineNav = styled.ul`
  display: none;
  background: #1c1c1c;
  box-sizing: border-box;
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
  }
  a {
    text-decoration: none;
    transition: transform 0.2s;
    padding: 0 8px 0 8px;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: -12px;
    &:hover {
      color: red;
    }
  }
  li {
    transition: transform 0.2s;
    font-size: calc(9px + 1vw);

    &:hover {
      border-radius: 5%;
      transform: scale(1.1);
      color: #ee0201;
    }
  }
  @media (min-width: 676px) {
    display: inline;
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
  padding: 0px 0 10px 0;
  margin-bottom: -25px;
  margin-top: -14px;
  flex-direction: column;
  text-align: left;
  margin-left: 20%;
  @media only screen and (min-width: 1000px) {
    flex-direction: row;
    text-align: left;
    margin-left: unset;
  }
  a {
    text-decoration: none;
    transition: transform 0.2s;
    padding: 0 16px 0 0;
    color: #626262a3;
    color: #fff;
    &:hover {
      color: #ee0201;
    }
  }
`;
const ProductNav = styled.p`
  margin-top: 0px;
  padding-right: 12px;
  color: #eb141b;
`;

const Li2 = styled.li`
  list-style: none;
  text-decoration: none;
  transition: transform 0.2s;
  @media only screen and (min-width: 1000px) {
    margin-top: 1px;
  }
  &:hover {
    border-radius: 5%;
    transform: scale(1.1);
    color: #626262;
  }
`;

const NavListLogo = styled.img`
  padding: 3px 2px 2px 3px;
  height: 55px;
  margin: -40px 0 0 0;
  display: none;
  @media (min-width: 676px) {
    display: flex;
  }
`;
