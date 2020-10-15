import React from "react";
import styled from "styled-components/macro";
import contactUs from "..//images/sales.jpg";
import dafoMEred from "..//images/dafoMEred.jpg";
const ContactUsPage = () => {
  return (
    <ContactContainer>
      <Box1>
        <div>
          <h1>Dubai office</h1>
          <img src={contactUs} alt="Contact Dafo Middle East" />
          <h3>Location</h3>
          <p>Clover bay tower</p>
          <p>Office 1106, Business Bay</p>
          <p>Dafo Middle East</p>
          <p>Dubai, UAE</p>
          <h3>
            Warehouse & <br />
            delivery address
          </h3>
          <p>Dafo Middle East</p>
          <p>Dry dock world</p>
          <p>Warehouse no 118 </p>
          <p>Jadaf, near Creek metro</p>
          <p>Dubai, UAE </p>
        </div>
      </Box1>
      <Box2>
        <h2>Contact us</h2>
        <Contacts>
          <img src={dafoMEred} alt="Dafo Middle East" />
          <p>+971 4 232 3957</p>
          <p>
            <a href="mailto:infos@dafo-middle-east.com">
              info@dafo-middle-east.com
            </a>
          </p>
        </Contacts>
        <h2>Opening hours</h2>
        <div>
          <h4>Sunday - Thursday</h4>
          <p>9.00 am - 18.00</p>
          <h4>Warehouse and receiving</h4>
          <h4>Sunday - Thursday</h4>
          <p>8.00 am - 18.00</p>
          <p>Lunchbreak 1.00 pm - 2.00 pm</p>
        </div>
      </Box2>
    </ContactContainer>
  );
};

const ContactContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding-bottom: 50px;
  @media only screen and (min-width: 480px) {
    flex-direction: row;
    justify-content: space-around;
    margin-top: 45px;
    justify-content: center;
  }
  @media only screen and (min-width: 600px) {
    width: 70%;
    margin: 0 auto;
    margin-top: 25px;
    justify-content: space-around;
  }
  @media only screen and (min-width: 992px) {
    margin-top: 35px;
    width: 60%;
  }
  @media only screen and (min-width: 1200px) {
    justify-content: center;
    width: 50%;
  }
`;
const Box1 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  max-width: 300px;
  margin-right: 0;
  @media only screen and (min-width: 320px) {
    text-align: unset;
  }
  @media only screen and (min-width: 390px) {
    max-width: unset;
  }
  @media only screen and (min-width: 480px) {
    width: 40%;
    max-width: 500px;
  }
  h1 {
    width: auto;
    margin-bottom: 0;
    padding: 0 5px 0 5px;
    @media only screen and (min-width: 480px) {
      margin: 0;
    }
  }
  img {
    width: 60%;
    max-width: 300px;
    padding: 0 5px 0 5px;
  }
  div {
    width: auto;
    margin: 0 auto;
    padding: 0 5px 0 5px;
    box-sizing: border-box;
    @media only screen and (min-width: 390px) {
      width: 200px;
    }
    @media only screen and (min-width: 480px) {
      width: 100%;
    }
  }
  p {
    width: auto;
    margin-top: 4px;
    margin-bottom: 2px;
  }
`;

const Box2 = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  max-width: 300px;
  margin: 0 auto;
  @media only screen and (min-width: 480px) {
    margin-left: 0;
  }
  div {
    width: auto;
    padding: 0 5px 0 5px;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: #1c1c1c;
  }
  p {
    margin-top: 4px;
  }
  h4 {
    margin-bottom: 0;
  }
  @media only screen and (min-width: 480px) {
    width: 38%;
    padding: 0 5px 0 15px;
    justify-content: space-between;
  }
  h2 {
    color: white;
    font-weight: bold;
    background: #1c1c1c;
    width: max-content;
    width: 100%;
    text-align: center;
    margin-block-start: 0;
    @media (min-width: 676px) {
      padding-bottom: 5px;
    }
  }
`;
const Contacts = styled.div`
  img {
    margin: 0;
    padding: 0;
    width: 100%;
    height: auto;
  }
  p {
    text-align: center;
    margin-top: 1.2rem;
  }
`;
export default ContactUsPage;
