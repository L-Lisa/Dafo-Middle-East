import React, { useState, useEffect } from "react";
import styled from 'styled-components/macro'
import { PageComponent } from "components/PageComponent.js"
import { Link, animateScroll as scroll } from "react-scroll"
import DafoLogga from "../images/DafoMeNoBack.png";
import aboutImg from "../images/About-Dafo-1.jpg"
import ReactPlayer from 'react-player/youtube'
import { Timeline } from "react-twitter-widgets";
import { TwitterFeed } from "components/Twitter"
import { ContactsBox } from "../components/ContactsBox"
import Shadi from "..//images/Shadi.jpg"
import JohanDafo from "..//images/JohanDafo.jpg"
import contactUs from "..//images/sales.jpg"
import { ContactInfoCard } from "../components/ContactInfoCard"
import youtubeicon from "..//images/youtubeicon.png"
import twittericon from "..//images/twittericon.png"
import Linkedin from "..//images/Linkedin.png"
import { VscrollerTop, FootArrow, VscrollerMidDown, VscrollerEnd } from "components/Vscroller"
import { ScrollLink } from "components/ScrollButton"
import { RedLine } from "../components/RedLine"
import DafoRedFlameFade from "../images/DafoRedFlamefaded.jpg"

export const About = () => {

    return (
        <>
            <AboutHero id="top"> <img src={DafoLogga} alt="Dafo" /> <VscrollerMidDown /></AboutHero>
            <ScrollLink />

            <MainText id="sectionMid" >
                <Mainh1>Rubrik?</Mainh1>
                <Para >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              <br /><br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            <Points>
                        <PointRow><RedLine />eiusmod tempor incididunt ut labore</PointRow>
                        <PointRow > <RedLine />eiusmod tempor incididunt ut labore</PointRow>
                    </Points>

                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat

            </Para>
                <Space></Space>
                <V><Link activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={30}
                    duration={500}
                    to="sectionEnd"><p>&#8595;</p></Link></V>
            </MainText>


            <ContactSection id="sectionEnd" >
                <TwitterInfoBox>
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
  delivery"
                            p1={"Dry dock world"}
                            p2={"Warehouse no 118"}
                            p3="Jadaf, near Creek metro"
                            p4="Dubai, UAE"
                            secondaryText="Opening Hours"
                            p5="Sunday - Thursday"
                            p6="8am-6pm"
                            p7="Lunchbreak 1pm - 2pm"
                        />

                        <ContactInfoCard
                            socialHead="Follow Dafo"
                            socialHeadBox={<SocialMediaBox>
                                <a href="https://www.youtube.com/channel/UCnnPIlXaWwE-wY3X-l3nTXw" target="_blank" rel="noopener noreferrer"><LogoIcon src={youtubeicon} alt="Dafo Youtube link" /></a>
                                < a href="https://www.linkedin.com/company/dafo-middle-east" target="_blank" rel="noopener noreferrer"><LogoIcon src={Linkedin} alt="Dafo youtube link" /></a>
                                < a href="https://twitter.com/Dafovehicle" target="_blank" rel="noopener noreferrer"><LogoIcon src={twittericon} alt="Dafo twitter link" /></a> </SocialMediaBox>}
                            p2={""}
                            p3=""
                            p4=""
                        />

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

                    </InfoDiv>
                    <TwitterCont>
                        <H1>Latest News</H1>
                        <TwitterFeed />
                    </TwitterCont>
                </TwitterInfoBox>
                {/*  <TwitterInfoBoxLRG>

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
delivery"
                            p1={"Dry dock world"}
                            p2={"Warehouse no 118"}
                            p3="Jadaf, near Creek metro"
                            p4="Dubai, UAE"
                            secondaryText="Opening Hours"
                            p5="Sunday - Thursday"
                            p6="8am-6pm"
                            p7="Lunchbreak 1pm - 2pm"
                        />

                        <ContactInfoCard
                            socialHead="Follow Dafo"
                            socialHeadBox={<SocialMediaBox>
                                <a href="https://www.youtube.com/channel/UCnnPIlXaWwE-wY3X-l3nTXw" target="_blank" rel="noopener noreferrer"><LogoIcon src={youtubeicon} alt="Dafo Youtube link" /></a>
                                < a href="https://www.linkedin.com/company/dafo-middle-east" target="_blank" rel="noopener noreferrer"><LogoIcon src={Linkedin} alt="Dafo youtube link" /></a>
                                < a href="https://twitter.com/Dafovehicle" target="_blank" rel="noopener noreferrer"><LogoIcon src={twittericon} alt="Dafo twitter link" /></a> </SocialMediaBox>}
                            p2={""}
                            p3=""
                            p4=""

                        />

                    </InfoDiv>
                    <TwitterCont>
                        <H1>Latest News</H1>
                        <TwitterFeed />
                    </TwitterCont>

                </TwitterInfoBoxLRG> */}
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

                <Hide400>
                    <RedLine
                        width="300px"
                    />
                </Hide400>

                <InfoDiv >

                    {/*   <ContactInfoCard
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
                        socialHead="Follow Dafo"
                        socialHeadBox={<SocialMediaBox>
                            <a href="https://www.youtube.com/channel/UCnnPIlXaWwE-wY3X-l3nTXw" target="_blank" rel="noopener noreferrer"><LogoIcon src={youtubeicon} alt="Dafo Youtube link" /></a>
                            < a href="https://www.linkedin.com/company/dafo-middle-east" target="_blank" rel="noopener noreferrer"><LogoIcon src={Linkedin} alt="Dafo youtube link" /></a>
                            < a href="https://twitter.com/Dafovehicle" target="_blank" rel="noopener noreferrer"><LogoIcon src={twittericon} alt="Dafo twitter link" /></a> </SocialMediaBox>}
                        p2={""}
                        p3=""
                        p4=""

                    /> */}

                </InfoDiv>

            </ContactSection>

            {/*  <PageComponent
                EndHeader1={"Contact Dafo Middle East"}
                lastElement={
                    <>
                        <LastContainer>

                            <TwitterInfoBoxLRG>

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
  delivery"
                                        p1={"Dry dock world"}
                                        p2={"Warehouse no 118"}
                                        p3="Jadaf, near Creek metro"
                                        p4="Dubai, UAE"
                                        secondaryText="Opening Hours"
                                        p5="Sunday - Thursday"
                                        p6="8am-6pm"
                                        p7="Lunchbreak 1pm - 2pm"
                                    />

                                    <ContactInfoCard
                                        socialHead="Follow Dafo"
                                        socialHeadBox={<SocialMediaBox>
                                            <a href="https://www.youtube.com/channel/UCnnPIlXaWwE-wY3X-l3nTXw" target="_blank" rel="noopener noreferrer"><LogoIcon src={youtubeicon} alt="Dafo Youtube link" /></a>
                                            < a href="https://www.linkedin.com/company/dafo-middle-east" target="_blank" rel="noopener noreferrer"><LogoIcon src={Linkedin} alt="Dafo youtube link" /></a>
                                            < a href="https://twitter.com/Dafovehicle" target="_blank" rel="noopener noreferrer"><LogoIcon src={twittericon} alt="Dafo twitter link" /></a> </SocialMediaBox>}
                                        p2={""}
                                        p3=""
                                        p4=""
                                    />
                                </InfoDiv>
                        </LastContainer>

                    </>
                }
            /> */}

            {/* 
            <Top> <Link
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                offset={-15}
                duration={500}> &#8593;
            </Link></Top> */}

        </>
    )
}

const AboutHero = styled.section`
height:70vh;
width:100%;
background-image: url(${aboutImg});
background-position: center;
background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -35px;
    img{
        width: 40vw;
    }
@media(min-width:1200px){
    height:100vh;
}
`;
const EmbedPlayer = styled.div`
width: max-content;
height: max-content;
padding-bottom: 30px;
@media(min-width:630px){
    width: 620px;
    height: 450px;
}
@media(min-width:876px){
    width: 564px;
    height: 350px;
}
@media(min-width:1200px){
    width: 1200px;
    height: 700px;
}
`;
const PlayerContainer = styled.div`
width: max-content;
height:auto;
margin: 0 auto;
margin-top: 40px;
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
}`;
const ImgBox = styled.div`
position: absolute;
    top: 0;
    /* color:#f1f1f1;
    background-color: rgba(0, 0, 0, 0.3); */
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    @media (min-width: 400px) {
        height: 350px;
  }
  @media (min-width: 550px) {
  height:500px;
  }
  @media (min-width: 900px) {
    height: 866px;
  }
  @media (min-width: 1200px) {
  height:1200px;
  }
    img {
    width: 200px;
    height: auto;
    display: block;
    position: absolute;
    @media (min-width: 550px) {
        width: 300px;
  }
  @media (min-width: 750px) {
        width: 400px;
  }
  @media (min-width: 1200px) {
        width: 500px;
  }
  }
`;


const LastContainer = styled.section`
width:100%;
display:flex;
flex-direction: column;
align-items: center;
`;

const ContactDiv = styled.div`
display:flex;
flex-wrap:wrap;
justify-content: center;
`;

const TwitterCont = styled.div`
    width: 50%;
    min-width: 225px;
    @media(min-width:1400px){
        width: 65%;
min-width: 225px;
max-height: 50vh;
}
`;

const LogoIcon = styled.img`
height:30px;
margin-right:3px;
`;

const SocialMediaBox = styled.span`
  
    display: flex;
    align-items: center;
`;

const InfoDiv = styled.section`
width:30%;
min-width: 200px;
`;
const TwitterInfoBox = styled.article`
display: flex;
align-items: baseline;
flex-wrap: wrap;
    align-content: center;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    @media(min-width:630px){
        flex-direction: row;
        justify-content: center;
    align-items: baseline;
    margin-top: 35px;
}
@media(min-width:1400px){
    display:none;
}
`;
const TwitterInfoBoxLRG = styled.section`
display:none;
 @media(min-width:1400px){
       display:flex;
       flex-direction: row;
        justify-content: center;
    align-items: baseline;
}
`;

const H1 = styled.h1`
  width: 100%;
    margin-bottom: 6px;
    text-align: left;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 1.1em;
    padding-top: 9px;
`;

const Mainh1 = styled.h1`
text-align: center;
    width: 80%;
    display: flex;
    align-self: center;
    font-size: 1.3rem;
    font-weight: 800;
    justify-content: center;
@media (min-width: 400px) {
  }
  @media (min-width: 1200px) {
    width: 70%;
    margin: 0 auto;
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
  height:100vh;
  font-size: 1.2rem;
  margin-top: -50px;
  }
  li span{
    height:4px;
width:5px;
color:red;
  }
`;
const Space = styled.span`
height:30px;
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
const Points = styled.div`
width:auto;
margin:unset;
`;
const PointRow = styled.p`
width:auto;
display:flex;
`;

const Para = styled.div`
height:auto;
width: 70%;
    margin: 0 auto;
    padding-left:10px;
`;
const ContactSection = styled.section`
width:100%;
padding-top:15px;
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
height:auto;
background-color: #fff;
@media (min-width:677px){
  background-color: none;
  background-image: url(${DafoRedFlameFade});
  background-position: center;
background-repeat: no-repeat;
    background-size: contain;
}
@media (min-width: 1190px) {
  height: 100vh;
  justify-content: center;
  }
  @media (min-width: 1500px) {
    
  }
`;
const Hide400 = styled.div`
    padding-top: 55px;
@media (min-width: 500px) {
  display:none;
  }
`;