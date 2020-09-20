import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import MainImgSml from "..//images/MainImgSml.jpg";
import Buses from "..//images/ProductImg-Buses.jpg";
import UnceImage from "..//images/UnceImage.png";
import Mining from "..//images/ProductImg-Mining.jpg";
import PowerGen from "..//images/ProductImg-powerGenerator.jpeg";
import contactUs from "..//images/sales.jpg"
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
import { BuyButton } from "..//components/BuyButton"
import dafoMEred from "..//images/dafoMEred.jpg"
import DafoRedFlame from "../images/DafoRedFlame.jpg"
import DafoRedFlameFade from "../images/DafoRedFlamefaded.jpg"

export const MainPage = () => {

  return (
    <MainPgWrapper>
      <ScrollLink />
      <BuyButton />
      <VideoContainer id="top">
        <VideoBackground videoSource={"https://res.cloudinary.com/dnjk2bwkp/video/upload/v1600437742/18eMainVid_yok0cm.mp4"} ImgFront={"DafoDubaiME"}
        ></VideoBackground>
      </VideoContainer>

      <MainText id="sectionMid" >
        <Mainh1>Automatic fire detection and suppression system </Mainh1>
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
        <V><Link activeClass="active"
          spy={true}
          smooth={true}
          offset={-15}
          duration={500}
          to="sectionEnd"><p>&#8595;</p></Link></V>
      </MainText>

      <ContactSection id="sectionEnd" >

        <ContactDiv >
          <ContactsBox
            coverImage={JohanDafo}
            title="General Manager"
            secondaryText={"Johan Larsson"}
            email1="johan.larsson@dafo-middle-east.com"
            mailto1="mailto:johan.larsson@dafo-middle-east.com"
            phone1="+971 55 143 6088"
          />

          <ContactsBox
            coverImage={Shadi}
            title="Regional Manager"
            secondaryText={"Abdulah Shadi"}
            email1="abdullah.shadi@dafo-middle-east.com"
            mailto1="mailto:abdullah.shadi@dafo-middle-east.com"
            phone1="+971 55 800 5509"

          />

          <ContactsBox
            coverImage={contactUs}
            title="Sales & Inquires"
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
        <InfoDiv >

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
            delivery address"
            p1={"Dry dock world"}
            p2={"Warehouse no 118"}
            p3="Jadaf, near Creek metro"
            p4="Dubai, UAE"
            secondaryText="Opening Hours"
            p5="Sunday - Thursday"
            p6="8am-6pm"
            p7="Lunchbreak 1pm - 2pm"
          />

        </InfoDiv>

      </ContactSection>
      <Top> <Link
        activeClass="active"
        to="top"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}> &#8593;
            </Link></Top>
    </MainPgWrapper>
  )
}

const MainPgWrapper = styled.main`
width:100%;
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
    padding: 3px;
    @media (min-width: 768px) {
      height: 70vh;
  }
    @media (min-width: 1200px) {
  height:100vh;
  padding-left: 30px;
  font-size: 1.2rem;
  }
  p{  
    width: 70%;
    margin: 0 auto;
    padding-left:10px;
  }
`;
const Mainh1 = styled.h1`
text-align:center;
@media (min-width: 400px) {
  text-align:left;
  }
  @media (min-width: 1200px) {
    width: 70%;
    margin: 0 auto;
  }
`

const ContactSection = styled.section`
width:100%;
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
@media (min-width: 1190px) {
  height:100vh;
  background-image: url(${DafoRedFlameFade});
  background-position: center;
background-repeat: no-repeat;
    background-size: contain;
    justify-content: flex-end;
  }
  @media (min-width: 1500px) {
    justify-content: center;
  }
`;

const ContactDiv = styled.div`
display:flex;
height:min-content;
margin-top: 30px;
justify-content: space-around;
flex-wrap: wrap;
    margin-top: 30px;
@media (min-width: 500px) {
  flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: 1200px) {
  width:70%;
  }
  @media (min-width: 1500px) {
    width: 50%;
  }
  @media (min-width: 1800px) {
    width: 36%;
  }
`;
const InfoDiv = styled.div`
width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: baseline;
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    flex-direction: column;
    align-items: baseline;
@media (min-width: 500px) {
  flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: 1500px) {
    width: 50%;
  }
`;

const VideoContainer = styled.section`
background:#fff;
margin-top: -90px;
@media (min-width: 1200px) {
  height:100vh;
  margin-top: -140px;
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

const V = styled.div`
width: 100%;
height:30px;
justify-content:center;
align-items:center;
color: #ee273e;
cursor:pointer;
display:none;
    margin-bottom: 20px;
@media (min-width:1190px){ 
    display:flex;
    }
`;

const InfoBox1 = styled.article`
display:flex;
flex-direction:column;
`;
const InfoBox2 = styled.article`
display:flex;
flex-direction:column;
`;
const InfoContact = styled.article`
display:flex;
flex-direction:column;
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

