import React from "react";
import styled from "styled-components/macro";
import { PageComponent } from "components/PageComponent.js";
import ReactPlayer from "react-player/youtube";
import PowerGenMainImage from "..//images/Kompressor1920x1200.jpg";
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

export default Power;
