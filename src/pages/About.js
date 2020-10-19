import React, { useState } from "react";
import styled from "styled-components/macro";
import { Link } from "react-scroll";

import DafoLogga from "../images/DafoMeNoBack.png";
import aboutImg from "../images/About-Dafo-1.jpg";
import { TwitterFeed } from "components/Twitter";
import { ContactsBox } from "../components/ContactsBox";
import Shadi from "..//images/Shadi.jpg";
import JohanDafo from "..//images/JohanDafo.jpg";
import contactUs from "..//images/sales.jpg";
import { ContactInfoCard } from "../components/ContactInfoCard";
import youtubeicon from "..//images/youtubeicon.png";
import twittericon from "..//images/twittericon.png";
import Linkedin from "..//images/Linkedin.png";
import { VscrollerMidDown } from "components/Vscroller";
import { ScrollLink } from "components/ScrollButton";
import { RedLine } from "../components/RedLine";
import DafoRedFlameFade from "../images/DafoRedFlamefaded.jpg";
import SMElogo from "../images/smeDbxTxt.jpg";


const About = () => {
  const [showTwitter, setShowTwitter] = useState(false);
  return (
    <>
      <ScrollLink />
      <AboutHero id="top">
        {" "}
        <img src={DafoLogga} alt="Dafo" /> <VscrollerMidDown />
      </AboutHero>

      <MainText id="sectionMid">
        <Mainh1>Dafo Middle East </Mainh1>
        <Para>
          From our base in Business bay we operate throughout middle east as
          exclusive distributor for Dafo vehicle fire protection AB.
          <br />
          <br />
          <QouteBox>
            <Qoute>
              The middle eastern market is huge and have lots of potential.
              Under the past 2-3 years we have seen a raising demand of fire
              detection and suppression systems in different types of
              applications. We are continuously working on bringing awareness of
              fire risks in vehicles and have under the past years attended
              several workshops, delegations and exhibitions to reach out to the
              public, our customers and governments within our territory.
            </Qoute>{" "}
            <br />
            <br />
            <QouteRef>– Johan Larsson, General Manager</QouteRef>
          </QouteBox>
          <Points>
            <PointRow>
              We distribute Dafo as exclusive dealer to the following counties:{" "}
            </PointRow>
            <AboutList>
              <AboutLiBox1>
                <AboutLI>
                  {" "}
                  <RedLine /> United Arab Emirates{" "}
                </AboutLI>
                <AboutLI>
                  {" "}
                  <RedLine /> Saudi Arabia{" "}
                </AboutLI>
                <AboutLI>
                  {" "}
                  <RedLine /> Oman{" "}
                </AboutLI>
                <AboutLI>
                  {" "}
                  <RedLine /> Bahrain{" "}
                </AboutLI>
              </AboutLiBox1>
              <AboutLiBox2>
                <AboutLI>
                  {" "}
                  <RedLine /> Yemen{" "}
                </AboutLI>
                <AboutLI>
                  {" "}
                  <RedLine /> Kuwait{" "}
                </AboutLI>
                <AboutLI>
                  {" "}
                  <RedLine /> Iran{" "}
                </AboutLI>
                <AboutLI>
                  {" "}
                  <RedLine /> Qatar{" "}
                </AboutLI>
              </AboutLiBox2>
            </AboutList>
          </Points>
        </Para>

        <V>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={30}
            duration={500}
            to="sectionEnd"
          >
            <p>&#8595;</p>
          </Link>
        </V>
      </MainText>
      <ContactSection id="sectionEnd">
        <EndH1>Contact Dafo Middle East</EndH1>
        <ContactDiv>
          <ContactsBox
            coverImage={JohanDafo}
            alt="Johan Larsson General Manager Dafo Middle East"
            title="General Manager"
            secondaryText={"Johan Larsson"}
            email1="johan.larsson@dafo-middle-east.com"
            mailto1="mailto:johan.larsson@dafo-middle-east.com"
            phone1="+971 55 143 6088"
          />

          <ContactsBox
            coverImage={Shadi}
            alt="Abdulah Shadi Regional Manager Dafo Middle East"
            title="Regional Manager"
            secondaryText={"Abdulah Shadi"}
            email1="abdullah.shadi@dafo-middle-east.com"
            mailto1="mailto:abdullah.shadi@dafo-middle-east.com"
            phone1="+971 55 800 5509"
          />

          <ContactsBox
            coverImage={contactUs}
            title="Sales & Inquires"
            alt="Dafo sales team Middle East Office"
            secondaryText={"Dafo sales team"}
            email1="sales@dafo-middle-east.com"
            mailto1="mailto:sales@dafo-middle-east.com"
            phone1=" +971 4 232 3957"
            secondaryText2="General inquires"
            email2="info@dafo-middle-east.com"
            mailto2="info@dafo-middle-east.com"
            phone2="+971 4 232 3957"
          />
        </ContactDiv>

        <InfoDiv>
          <Flex>
            <ContactInfoCard
              title={" Dubai office"}
              p1={"Clover Bay Tower"}
              p2={"Office 1106, Business Bay"}
              p3="Dubai, UAE"
              secondaryText="Opening Hours"
              p5="Sunday - Thursday"
              p6="9am-6pm"
            />

            <ContactInfoCard
              title="Warehouse &
            delivery"
              p1={"Dry dock world"}
              p2={"Warehouse no 118"}
              p3="Jadaf, near Creek metro"
              p4="Dubai, UAE"
            />

            <ContactInfoCard
              title="Follow Dafo"
              socialHeadBox={
                <AboutSocialBox>
                  {" "}
                  <SocialMediaBox>
                    <a
                      href="https://www.youtube.com/channel/UCnnPIlXaWwE-wY3X-l3nTXw"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LogoIcon src={youtubeicon} alt="Dafo Youtube link" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/dafo-middle-east"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LogoIcon src={Linkedin} alt="Dafo LinkedIn link" />
                    </a>
                    <a
                      href="https://twitter.com/Dafovehicle"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LogoIcon src={twittericon} alt="Dafo twitter link" />
                    </a>{" "}
                  </SocialMediaBox>{" "}
                  <SME
                    src={SMElogo}
                    alt="Dafo proud supporter of local business"
                  />{" "}
                </AboutSocialBox>
              }
              p2={""}
              p3=""
              p4=""
            />
          </Flex>
          <EndH1 onClick={() => setShowTwitter(!showTwitter)}>
            Load the News
            <span className={showTwitter ? `showarrow` : `none`}>
              {" "}
              &#8593;{" "}
            </span>
            <span className={showTwitter ? `none` : `showarrow`}> &#8595;</span>
          </EndH1>
          {showTwitter && (
            <TwitterCont>
              <EndH1>News </EndH1>
              <TwitterFeed />
            </TwitterCont>
          )}
        </InfoDiv>
      </ContactSection>
    </>
  );
};

const AboutHero = styled.section`
  height: 450px;
  width: 100%;
  background-image: url(${aboutImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -40px;
  img {
    width: 40vw;
  }
  @media (min-width: 1200px) {
    height: 100vh;
    margin-top: -90px;
  }
`;

const ContactDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TwitterCont = styled.div`
  margin-top: 42px;
  min-width: 225px;
  @media (min-width: 390px) {
    width: 400px;
  }
  @media (min-width: 1400px) {
    width: 65%;
    min-width: 225px;
    max-height: 50vh;
  }
`;

const LogoIcon = styled.img`
  height: 30px;
  margin-right: 3px;
`;

const SocialMediaBox = styled.span`
  display: flex;
  align-items: center;
`;

const InfoDiv = styled.section`
  width: inherit;
  display: flex;
  flex-wrap: wrap;
  min-width: 200px;
  align-items: center;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
`;

const Mainh1 = styled.h1`
  width: 100%;
  text-align: center;
  display: flex;
  align-self: center;
  font-size: 1.3rem;
  font-weight: 800;
  justify-content: center;
  @media (min-width: 400px) {
    margin-top: 35px;
  }
  @media (min-width: 1200px) {
  }
`;
const MainText = styled.div`
  width: 100%;
  background: #f5f5f5;
  margin: 0 auto;
  font-size: 1rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: auto;
  @media (min-width: 768px) {
  }
  @media (min-width: 1200px) {
    min-height: 100vh;
    font-size: 1.2rem;
  }
  li span {
    height: 4px;
    width: 5px;
    color: red;
  }
`;

const V = styled.div`
  width: 100%;
  height: 30px;
  justify-content: center;
  align-items: center;
  color: #ee273e;
  cursor: pointer;
  display: none;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 20px;
  @media (min-width: 1190px) {
    display: flex;
  }
  @media (min-width: 1600px) {
    margin-top: 62px;
  }
`;
const Points = styled.div`
  width: auto;
  margin: unset;
`;
const PointRow = styled.p`
  width: auto;
  display: flex;
`;

const Para = styled.article`
  height: auto;
  width: 90%;
  margin: 0 auto;
  padding-left: 10px;
  @media (min-width: 1400px) {
    width: 70%;
  }
`;
const ContactSection = styled.section`
  width: 100%;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  background-color: #fff;
  @media (min-width: 677px) {
    background-color: none;
    background-image: url(${DafoRedFlameFade});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  @media (min-width: 1190px) {
    min-height: 100vh;
    justify-content: center;
  }
  @media (min-width: 1500px) {
  }
`;

const AboutList = styled.ul`
  font-weight: 600;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-inline-start: 0;
  flex-direction: column;
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const AboutLI = styled.li`
  font-weight: 500;
  list-style: none;
`;

const Qoute = styled.q``;

const QouteRef = styled.span`
  color: black;
  font-style: italic;
`;

const QouteBox = styled.div`
  background: #fff;
  margin: 0 auto;
  padding: 20px;
  border-radius: 2px;
`;

const AboutLiBox1 = styled.div`
  width: 220px;
  @media (min-width: 640px) {
    margin: 5px;
  }
`;
const AboutLiBox2 = styled.div`
  width: 220px;
  @media (min-width: 640px) {
    margin: 5px;
  }
`;

export const EndH1 = styled.h1`
  margin: 0 auto;
  cursor: pointer;
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
  .showarrow {
    display: inline;
  }
  .none {
    display: none;
  }
  @media (min-width: 630px) {
    max-width: unset;
  }
`;

const Flex = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
`;

const SME = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px;
`;

const AboutSocialBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default About;
