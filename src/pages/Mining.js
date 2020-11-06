import React from "react";
import styled from "styled-components/macro";
import { PageComponent } from "components/PageComponent.js";
import MiningImg from "..//images/catepillar1920x1200.jpg";
import ReactPlayer from "react-player/youtube";

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
height: auto;
margin: 0 auto;
margin-top: 40px;
`;

const Mining = () => {
  return (
    <>
      <PageComponent
        coverImage={MiningImg}
        alt="Dafo Middle East Fire protection"
        ImageText={"Mining & Heavy Duty Equipment"}
        headerText={"Fire safety for contracting mining machinery"}
        mainText1={
          "Fires in vehicles often take hold very quickly and are hard to extinguish with a handheld extinguisher. A correctly dimensioned vehicle fire suppression system offers you fast, effective protection that limits the consequences of a fire."
        }
        mainText2={
          "We have until today sold more than 100 000 systems to leading manufacturers such as Volvo, Atlas, CAT, Scania, Sandvik, Komatsu, MAN, John Deere, Ponsse etc. Correctly planned and installed, a vehicle fire suppression system is a fast and effective way of providing the protection you need to prevent disaster."
        }
        mainText3={
          "Dafo supply systems approved by SBF in accordance with SBF 127 & SBF 128. Agents as Forrex, the unique non-corrosive freeze protected Wet Chemical is used. We have more than 30 years’ experience of vehicle fire suppression systems, adapted to suit the most demanding conditions."
        }
        lastElement={
          <>
            <PlayerContainer>
              <EmbedPlayer>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=bog5wjkCa-0"
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


export default Mining;
