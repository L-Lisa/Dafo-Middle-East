import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import MainImgSml from "..//images/MainImgSml.jpg";
import Buses from "..//images/ProductImg-Buses.jpg";
import UnceImage from "..//images/UnceImage.png";
import Mining from "..//images/ProductImg-Mining.jpg";
import PowerGen from "..//images/ProductImg-powerGenerator.jpeg";
import contactUs from "..//images/contactUs.jpg";
import DafoDubaiME from "..//images/dafoMEred.jpg";
import { Link } from "react-router-dom";
import { Timeline } from "react-twitter-widgets";
import ReactPlayer from 'react-player/youtube'
import { VideoBackground } from "..//components/VideoBackground.js"
import Dafo400 from "images/DafoDubai400.png"
import HeroLogo from "images/DafoMeNoBackTransp.png"
import DafoDubai from "images/DafoDubai.jpg"
import { ContactsBox } from "../components/ContactsBox"
import { ContactInfoCard } from "../components/ContactInfoCard"
import Shadi from "..//images/Shadi.jpg"

import JohanDafo from "..//images/JohanDafo.jpg"
// import style from "../index.css" ;



export const MainPage = () => {
  const [twitterLoaded, settwitterLoaded] = useState(false);
  useEffect(() => {
    if (twitterLoaded) {
      const scrollingCss =
        " div.timeline-Viewport {overflow: hidden;} div.timeline-Viewport ol {position:relative; top:0;animation: scroll 120s linear 0.5s infinite;} @keyframes scroll {95% { top: -1000%; } 100%{top:0;}}";

      const iframes = document.querySelectorAll("[id^=twitter-widget]");
      for (let index = 0; index < iframes.length; index++) {
        const iframe = iframes[index];
        const innerDoc =
          iframe.contentDocument || iframe.contentWindow.document;
        const styleElement = document.createElement("style");
        styleElement.innerText = scrollingCss;
        innerDoc.head.appendChild(styleElement);
      }
    }
  }, [twitterLoaded]);

  return (
    <Wrapper>
      <MainSection>
        <Intro>
          <VideoBackground videoSource={"https://res.cloudinary.com/dnjk2bwkp/video/upload/v1600336003/dafo/road_1_uonbx5.mp4"} ImgFront={"DafoDubaiME"}></VideoBackground>


          {/*  <PlayerContainer>
            <EmbedPlayer>
              <ReactPlayer
                url="https://res.cloudinary.com/dnjk2bwkp/video/upload/v1600007246/dafo/mediumTransp_amf8r5.mp4" width='auto'
                height='100%'
              />
            </EmbedPlayer>
          </PlayerContainer> */}


          <MainText>
            <h1>Automatic fire detection and suppression system </h1>
            <p>
              Dafo was one of the first companies in the world which started to develop intergrated firefighting solutions for vehicles.
              <br /><br />
              Over the years Dafo has obtained vas experience and knowledge from our end user installations which have been used as a basis for
            <ul>
                <li>Eliminating false alarms</li>

                <li>Eliminating false releases</li>
              </ul>

 As a result of the development Dafo can today proudly present state of the art reliable solutions without vulnerable and pressurized agent containers.
 <br /><br />
With more than 165000 vehicle systems sold worldwide know-how and experience ensure our customers to have the latest technology combined with proven reliability.
            </p>
          </MainText>
        </Intro>
      </MainSection>
      <ContactSection>
        <ContactDiv>
          <ContactsBox
            coverImage={JohanDafo}
            title="General Manager"
            supportingText={"Johan Larsson Email address +971 4 232 3957"}
          />

          <ContactsBox
            coverImage={Shadi}
            title="Regional Manager"
            supportingText={"Abdulah Shadi Email adress+971 55 800 5509 "}
          />

          <ContactsBox
            coverImage={contactUs}
            title="Sales & General inquires"
            supportingText={"Dafo sales team: sales@dafo-middle-east.com +971 4 232 3957 General inquires: info@dafo-middle-east.com +971 4 232 3957"}
          />
        </ContactDiv>
        <InfoDiv>
          <ContactInfoCard
            title={" Info Rutor"}
            p1={"Clover Bay Tower"}
            p2={"Office 1106, Business Bay"}
            p3="Dubai, UAE"
          />
          <ContactInfoCard
            title={"Dubai Office"}
            p1={"Clover Bay Tower"}
            p2={"Office 1106, Business Bay"}
            p3="Dubai, UAE"
          />
          <ContactInfoCard
            title={"Dubai Office"}
            p1={"Clover Bay Tower"}
            p2={"Office 1106, Business Bay"}
            p3="Dubai, UAE"
          />
        </InfoDiv>

      </ContactSection>






      {/*  <FlexDiv2>
        <ContactUs>
          <h2>Contact Us</h2>
          <ContactImg src={contactUs} alt="Contact Dafo here" />
          <div>
            <p>
              We are here to help!
              <br />
              For questions and technical support:
            </p>
            <ul>
              <li>
                Telephone:
                <h3>
                  <br />
                  +971&nbsp;4&nbsp;232&nbsp;3957
                </h3>
              </li>

              <li>
                E-mail:
                <br /> <h3>info@dafo-middle-east.com</h3>
              </li>
              <li>
                Opening hours:
                <p className="block">
                  {" "}
                  <h3>Sun-Thu: 9.00am – 6.00pm</h3>
                </p>
              </li>
            </ul>
          </div>
         

        </ContactUs>
      </FlexDiv2> */}

      {/*  <TwitterBox>
        <Timeline
          renderError={(_err) => <p>Could not load Twitter</p>}
          dataSource={{
            sourceType: "profile",
            screenName: "Dafovehicle",
            width: "100%",
          }}
          options={{
            height: "700",
          }}
          onLoad={() => settwitterLoaded(true)}
        />
      </TwitterBox> */}
    </Wrapper >
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width:100%;
`;

const MainSection = styled.section`
width:100%;
`


const ContactSection = styled.section`
height:100vh;
display:flex;
flex-direction:column;
justify-content: space-evenly;
align-items: center;
`;

const InfoDiv = styled.div`
display:flex;
`;
const ContactDiv = styled.div`
display:flex;
`;

/* const Hero = styled.section`
width:100%;
height: 80vh;
background-image: url(${DafoDubai});
background-position: top;
background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;
const DafoHeroLogo = styled.img`
width:50%;
margin-top:40px;
max-width: 400px;
` */

const ContactImg = styled.img`
  max-width: 250px;
`;
const Intro = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 676px) {
    align-items: unset;
  }
  h1 {
    font-weight: bold;
  }
`;
const PhoneImg = styled.img`
width: inherit;
    max-width: 100%;
    height: auto;
`
const MainText = styled.div`
 width: 100%;
    background: #f5f5f5;
    margin: 0 auto;
    font-size: 1.2rem;
    height: 100vh;
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
    padding-left: 30px;
`;

const ProductsDiv = styled.section`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (min-width: 676px) {
    flex-direction: row;
    justify-content: space-around;
    margin-top: -30px;
  }
  @media (min-width: 1000px) {
    margin-top: unset;
  }
  @media (min-width: 1700px) {
    flex-direction: row;
    justify-content: center;
  }
  h4 {
    font-size: 1rem;
    color: black;
    background-color: #fffffab0;
    width: auto;
    max-width: max-content;
    padding: 10px 20px;
    margin: 0 auto;
    margin-top: 90px;
    text-align: center;
    font-weight: 700;
  }
  a {
    width: 100%;
    margin: 5px 0;
    text-decoration: none;
    @media (min-width: 676px) {
      width: 28%;
      text-decoration: none;
    }
    img {
      width: 100%;
    }
  }
`;


const TwitterBox = styled.div`
  overflow: scroll;
  height: auto;
  @media (min-width: 676px) {
    height: 300px;
  }
  @media (min-width: 800px) {
    height: 350px;
  }
  @media (min-width: 900px) {
    height: 380px;
  }
  @media (min-width: 1000px) {
    height: 410px;
  }
  @media (min-width: 1100px) {
    height: 480px;
  }
  @media (min-width: 1200px) {
    height: 520px;
  }
  @media (min-width: 1300px) {
    height: 570px;
  }
  @media (min-width: 1400px) {
    height: 620px;
  }
  @media (min-width: 1500px) {
    height: 670px;
  }
  @media (min-width: 1500px) {
    height: 690px;
  }
  @media (min-width: 1500px) {
    height: 670px;
  }
  @media (min-width: 1500px) {
    height: auto;
  }
`;

const EmbedPlayer = styled.div`
display:none;
@media(min-width:676px){
display:inline-block;
margin:0 auto;
height: 400px;
}
`;
const PlayerContainer = styled.div`
width: max-content;
height:auto;
margin: 0 auto;
margin-top: 40px;
`;