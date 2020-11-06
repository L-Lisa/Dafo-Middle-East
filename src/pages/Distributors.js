import React from "react";
import styled from "styled-components/macro";
import { PageComponent } from "components/PageComponent.js";
import { DistribBox } from "../components/DistribBox";
import coverImage from "..//images/distributors1920x1200.jpg";
import Tebra from "images/Tebra-Logo.jpg";
import { MidDistributors } from "../components/MidDistributors";


const Red = styled.span`
width: ${(props) => (props.width ? props.width : "200px")};
height: 4px;
background: #ee0201;
align-self: center;
margin: 2px 5px 2px 2px;
display: inline-block;
margin: 30px 0;
`;
export const EndH1 = styled.h1`
margin: 0 auto;
color: #ee0201;
width: -webkit-max-content;
width: -moz-max-content;
width: max-content;
text-align: center;
padding: 5px;
max-width: 250px;
text-transform: uppercase;
-webkit-letter-spacing: 2px;
-moz-letter-spacing: 2px;
-ms-letter-spacing: 2px;
letter-spacing: 2px;
font-weight: 700;
font-size: calc(16px + 1vw);
margin-block-start: 0;
@media (min-width: 630px) {
max-width: unset;
}
`;
const ContactSection = styled.section`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
height: auto;
background-color: #fff;
@media (min-width: 677px) {
background-color: none;
background-position: center;
background-repeat: no-repeat;
background-size: contain;
}
@media (min-width: 1190px) {
justify-content: center;
}
@media (min-width: 1500px) {
}
`;
const EndSection = styled.section`
text-align: center;
padding-top: 15px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: auto;
background-color: #fff;
@media (min-width: 1190px) {
min-height: 100vh;
justify-content: center;
}
@media (min-width: 1500px) {
}
`;
const H2 = styled.h2`
margin-top: 35px;
text-align: center;
@media (min-width: 400px) {
width: 88%;
}
@media (min-width: 400px) {
margin-top: 50px;
}
@media (min-width: 1200px) {
padding-bottom: 50px;
width: 70%;
}
`;


const Distributors = () => {
  return (
    <>
      <PageComponent
        coverImage={coverImage}
        ImageText={"Distributors"}
        mainText1={<MidDistributors />}
        mainText2={""}
        mainText3={""}
        lastElement={
          <EndSection id="sectionEnd">
            <H2>
              List of Dafo Middle East authorized distributors and service
              providers{" "}
            </H2>
            <Red></Red>
            <ContactSection>
              <DistribBox
                coverImage={Tebra}
                alt=" Dafo Distributor Tebra"
                title="Tebra General Trading"
                secondaryText1={"Dubai, United Arab Emirates:"}
                secondaryText2={
                  "Head Office: First Floor, BMTC Building, Deira "
                }
                secondaryText3={"Dubai, U.A.E. P.O.Box 1247"}
                email1="info@tebratrading.com"
                mailto1="info@tebratrading.com"
              />
              <DistribBox
                coverImage={""}
                alt=" Dafo Kenya"
                title={"Maverick Digital"}
                secondaryText1={"Mombasa, Kenya: "}
                secondaryText2={
                  "P.O. Box 1247 Kose Heights, Argwings Kodhek rd."
                }
                secondaryText3={" Nairobi & Mombasa, Kenya"}
                email2="info@maverickdigital.co.ke"
                mailto2="info@maverickdigital.co.ke"
              />
            </ContactSection>
            <Red></Red>
          </EndSection>
        }
      />
    </>
  );
};


export default Distributors;
