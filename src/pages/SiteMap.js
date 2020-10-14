import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const SiteMap = () => {
  return (
    <Wrapper>
      <SiteMapContainer>
        <LI>
          <Link to="/">
            <h1>Dafo Home Page</h1>
          </Link>
        </LI>
        <LI>
          <Link to="/vehicles">
            {" "}
            <h2>Fire Suppression Systems - Buses & vehicles</h2>
          </Link>
        </LI>
        <LI>
          <Link to="/powergenerators">
            {" "}
            <h2>Power Generators</h2>
          </Link>
        </LI>
        <LI>
          <Link to="/mining-constructon">
            {" "}
            <h2>Mining & Contstruction</h2>
          </Link>
        </LI>
        <LI>
          <Link to="/contact-us">
            {" "}
            <h2>Contact Us</h2>
          </Link>
        </LI>
        <LI>
          <Link to="/downloads">
            {" "}
            <h2>Downloads</h2>
          </Link>
        </LI>
      </SiteMapContainer>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SiteMapContainer = styled.ul`
  box-shadow: 2px 2px 10px 2px rgb(207 204 204 / 70%);
  text-align: left;
  padding: 14px;
  margin: auto 0;
  list-style: none;
  width: 80%;
  @media only screen and (min-width: 650px) {
    width: auto;
  }
`;
const LI = styled.li`
  transition: transform 0.2s;
  a {
    text-decoration: none;
    color: #1c1c1c;
    cursor: pointer;
    font-size: 1rem;
  }
  &:hover {
    color: gray;
    transform: scale(1.1);
  }
`;
export default SiteMap;
