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



          {/*  <img src="https://res.cloudinary.com/dnjk2bwkp/image/upload/v1599474586/dafo/DafoDubaiLrgFullColr_epa5j9.jpg" type="jpg" alt="Dafo Middle East" /> */}
          {/*  <DubaiVideo
            display="inline"
            height="400"
            autoPlay
            loop
            muted
            preload="auto"
            poster="poster.png">
            <source src="https://res.cloudinary.com/dnjk2bwkp/video/upload/v1600182376/dafo/smlDafoMain_vdskmy.mp4" type="video/mp4" />

            <p>Image loading..</p>
          </DubaiVideo> */}
          {/* <DafoImage src={Dafo400} alt="Dafo" /> */}

          {/*  <Hero>
            <DafoHeroLogo src={HeroLogo} alt="Dafo" />
          </Hero> */}
          {/*  <img src="https://res.cloudinary.com/dnjk2bwkp/image/upload/v1599474586/dafo/DafoDubaiLrgFullColr_epa5j9.jpg" type="jpg" alt="Dafo Middle East" /> */}
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
        <ProductsDiv>
          <Link to="/powergenerators">
            <PowerGeneratorImg className="product-block ">
              <h4>Power Generator</h4>
            </PowerGeneratorImg>
          </Link>
          <Link to="/bus">
            <BusBlockImg className="product-block">
              <h4>Vehicles</h4>
            </BusBlockImg>
          </Link>
          <Link to="/mining-constructon">
            <MiningConstructionImg className="product-block">
              <MiningH>Mining & heavy duty mobile equipment</MiningH>
            </MiningConstructionImg>
          </Link>
        </ProductsDiv>
      </MainSection>

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

      <TwitterBox>
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
      </TwitterBox>
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

const DubaiVideo = styled.video`
width: 100%;
height: auto;
`;


const DafoImage = styled.img`
    width: 30%;
    max-width: 200px;
    margin-top: -36%;
    margin-left: 0%;
    @media (min-width: 1200px) {
      margin-top: -30%;
    }
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
  width:90%;
  margin: 0 auto;
  font-size:2rem;
  @media (min-width: 676px) {
    width:70%;
  }
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
const PowerGeneratorImg = styled.div`
  background-image: url(${PowerGen});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 310px;
  padding: 4px;
  @media (min-width: 676px) {
    width: 100%;
  }
`;
const BusBlockImg = styled.div`
  background-image: url(${Buses});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 310px;
  padding: 4px;
  @media (min-width: 676px) {
    width: 100%;
  }
`;
const MiningConstructionImg = styled.div`
  background-image: url(${Mining});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 310px;
  padding: 4px;
  @media (min-width: 676px) {
    width: 100%;
  }
`;
const MiningH = styled.h4`
width:60%;
@media (min-width: 320px) {
    width: 50% !important;
  }
  @media (min-width: 550px) {
    width: 40% !important;
  }
  @media (min-width: 678px) {
    width: 90% !important;
  }
`
const ContactUs = styled.article`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  margin-top: 25px;
  flex-direction: column;
  align-items: center;
  img {
    width: 250px;
    height: auto;
    @media (max-width: 245px) {
    width: 100%;
  }
  }
  
  div {
    padding: 10px 2px;
  }
  ul {
    list-style: none;
    display: inline;
    margin: 0;
  }
  li {
    padding: 6px 2px;
  }
  h3 {
    display: inline;
    font-size: 1rem;
  }
  p {
    margin: 0;
  }
  .block {
    display: block;
    margin-block-start: 0;
  }
  @media (min-width: 676px) {
    margin-top: 0;
    align-items: start;
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