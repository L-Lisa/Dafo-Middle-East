import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import MainImgSml from "..//images/MainImgSml.jpg";
import Buses from "..//images/ProductImg-Buses.jpg";
import UnceImage from "..//images/UnceImage.png";
import Mining from "..//images/ProductImg-Mining.jpg";
import PowerGen from "..//images/ProductImg-powerGenerator.jpeg";
import contactUs from "..//images/contactUs.jpg";
import DafoDubaiME from "..//images/dafoMEred.jpg";
import { Timeline } from "react-twitter-widgets";
import ReactPlayer from 'react-player/youtube'
import { VideoBackground } from "..//components/VideoBackground.js"
import Dafo400 from "images/DafoDubai400.png"
import HeroLogo from "images/DafoMeNoBackTransp.png"
import DafoDubai from "images/DafoDubai.jpg"
import { ContactsBox } from "../components/ContactsBox"
import { ContactInfoCard } from "../components/ContactInfoCard"
import Shadi from "..//images/Shadi.jpg"
import { ScrollLink } from "components/ScrollButton"
import JohanDafo from "..//images/JohanDafo.jpg"
import { Vscroller } from "components/Vscroller"
import { Link, animateScroll as scroll } from "react-scroll";


export const MainPage = () => {

  return (
    <>
      {/*  <ScrollLink /> */}
      <VideoContainer id="top">
        <VideoBackground videoSource={"https://res.cloudinary.com/dnjk2bwkp/video/upload/v1600363154/road_2_bvodzf.mp4"} ImgFront={"DafoDubaiME"}
        ></VideoBackground>
      </VideoContainer>

      <MainText id="sectionMid" >
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
        <Space></Space>
      </MainText>

      <ContactSection id="sectionEnd" >

        <ContactDiv >
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
          <span ></span>
          <ContactsBox
            coverImage={contactUs}
            title="Sales & General inquires"
            supportingText={"Dafo sales team: sales@dafo-middle-east.com +971 4 232 3957 General inquires: info@dafo-middle-east.com +971 4 232 3957"}
          />
        </ContactDiv>
        <InfoDiv >
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
      <Top> <Link
        activeClass="active"
        to="top"
        spy={true}
        smooth={true}
        offset={-15}
        duration={500}>Top &#8593;
            </Link></Top>
    </>
  )
}


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
    padding-left: 3px;
    @media (min-width: 1200px) {
  height:100vh;
  padding-left: 30px;
  font-size: 1.2rem;
  }
`;


const ContactSection = styled.section`
width:100%;
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
@media (min-width: 1190px) {
  height:100vh;
  }
`;

const ContactDiv = styled.div`
display:flex;
height:min-content;
flex-direction:column;
@media (min-width: 500px) {
  flex-direction: row;
    flex-wrap: wrap;
  }
`;
const InfoDiv = styled.div`
display:flex;
flex-direction:column;
@media (min-width: 500px) {
  flex-direction: row;
    flex-wrap: wrap;
  }
`;

const VideoContainer = styled.section`
background:#fff;
@media (min-width: 1200px) {
  height:100vh;
  }
`;
const Space = styled.span`
height:30px;
`;

const Top = styled.div`
height:30px;
color:#fff;
background:gray;
display:flex;
padding: 7px;
justify-content:center;
:hover{
color:gray;
background:whitesmoke;
}
`;
/* const TwitterBox = styled.div`
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
`; */

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

