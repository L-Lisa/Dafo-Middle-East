import React from "react";
import styled from "styled-components/macro";
import { PageComponent } from "components/PageComponent.js";
import ReactPlayer from "react-player/youtube";
import PowerGenMainImage from "..//images/Kompressor1920x1200.webp";
import DafoRedFlameFadeContent from "../images/DafoRedFlameFadeContent.webp";
import powerEndSection from "../images/power-section3.jpg"


const Power = () => {
  return (
    <>
      <PageComponent
        coverImage={PowerGenMainImage}
        ImageText={"Dafo Forrex Fire Suppression"}
        headerText={"Special applications"}
        mainText1={
          "Many business operations rely on emergency generators to secure critical functions within their organization. It is easy to ignore the fact that, as these units are driven by combustible engines, they also constitute a significant fire hazard."
        }
        mainText2={
          "Dafo Forrex Fire Suppression Systems respond rapidly to any increase in temperature. The Dafo system is developed to use worldwide in both cold and hot climate. It ensures maximum protection while being much more economical than previously available solutions like water sprinkler, dry chemical or CO2-systems"
        }
      />
      <ThirdSectionImgBox>
        <PowerIMG3 src={powerEndSection} />
      </ThirdSectionImgBox>
    </>
  );
};


const ThirdSectionImgBox = styled.section`
width: 100%;
object-fit: cover;
margin-bottom: -4px;
`;

const PowerIMG3 = styled.img`
width:100%;
`;

const EmbedPlayer = styled.div`
  background-image: url(${DafoRedFlameFadeContent});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: max-content;
  height: max-content;
  padding-bottom: 30px;
  @media (min-width: 630px) {
    width: 620px;
    height: 450px;
  }
  @media (min-width: 876px) {
    width: 564px;
    height: 350px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
    height: 700px;
  }
`;
const PlayerContainer = styled.div`
  width: max-content;
  height: auto;
  margin: 0 auto;
  margin-top: 40px;
`;
export default Power;
