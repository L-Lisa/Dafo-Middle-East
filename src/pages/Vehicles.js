import React from "react";
import styled from "styled-components/macro";
import { PageComponent } from "components/PageComponent.js";
import BusGirl from "..//images/BusGirl1920x1200.jpg";
import ReactPlayer from "react-player";
import Unce from "..//images/UnceImage.png";

const EmbedPlayer = styled.div`
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
margin: 0 auto;
background: #1c1c1c;
height: 100%;
width: 100vw;
padding-top: 40px;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;
align-content: center;
@media (min-width: 1200px) {
width: 1200px;
}
`;

const UNCE = styled.div`
width: 230px;
height: 147px;
background-image: url(${Unce});
background-repeat: no-repeat;
background-size: contain;
margin: 0 auto;
margin-top: 20px;
`;

const Vehicles = () => {
  return (
    <>
      <PageComponent
        coverImage={BusGirl}
        ImageText={"vehicles & fire safety"}
        headerText={
          "Automatic fire detection and suppression system for vehicles  "
        }
        mainText1={
          "Most bus fires start in the engine compartment and surrounding areas. A tested and certified vehicle fire suppression system in combination with a reliable fire detection system is the best first line of response in case of a thermal incident."
        }
        mainText2={
          "Buses operate in various surroundings and climate types such as desert, tropic, arctic, on highways and in mountain terrain. These environments are very challenging also for a fire suppression system. Dafo fire suppression system are thoroughly tested for fire performance ability and environmental durability such as electromagnetic compatibility (EMC), vibration, corrosion and temperature extremes according to international vehicle standards to ensure the highest performance."
        }
        mainText3={
          "Dafo fire suppression system are approved as a component with regard to UNECE Regulation no. 107 and P-marked in accordance with SPCR 183. "
        }
        mainText4={<UNCE></UNCE>}
        lastElement={
          <>
            <PlayerContainer>
              <EmbedPlayer>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=yFrJz5tydMQ&t=50s"
                  width="100%"
                  height="100%"
                  playing
                  muted
                  loop
                />
              </EmbedPlayer>
            </PlayerContainer>
          </>
        }
      />
    </>
  );
};


export default Vehicles;
