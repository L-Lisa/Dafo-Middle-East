import React from "react";
import styled from "styled-components/macro";
/* import oldMining from "..//images/Mining.jpg" */
import Mining from "..//images/catepillar.jpg";
import { Sidebar } from "components/Sidebar";
const MiningConstruction = () => {
  return (
    <Wrapper>
      <FlexDiv1>
        <Intro>
          <MiningImg src={Mining} alt="Dafo Mining and construction" />
          {/* <img src={oldMining} alt="Dafo Mining and construction" /> */}
          <MainText>
            <h1>Fire safety for contracting mining machinery</h1>
            <p>
              Fires in vehicles often take hold very quickly and are hard to
              extinguish with a handheld extinguisher. A correctly dimensioned
              vehicle fire suppression system offers you fast, effective
              protection that limits the consequences of a fire. We have until
              today sold more than 100 000 systems to leading manufacturers such
              as Volvo, Atlas, CAT, Scania, Sandvik, Komatsu, MAN, John Deere,
              Ponsse etc.Insurance companies demand on-board vehicle fire
              suppression systems on machinery used for forestry, peat and
              chipping. Correctly planned and installed, a vehicle fire
              suppression system is a fast and effective way of providing the
              protection you need to prevent disaster. Dafo supply systems
              approved by SBF in accordance with SBF 127 & SBF 128. Agents as
              Forrex, the unique non-corrosive freeze protected Wet Chemical is
              used. We have more than 30 years’ experience of vehicle fire
              suppression systems, adapted to suit the most demanding
              conditions.
            </p>
          </MainText>
        </Intro>
      </FlexDiv1>
      <FlexDiv2>
        <Sidebar />
      </FlexDiv2>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  @media (min-width: 676px) {
    padding-top: 45px;
    flex-direction: row;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
  }
`;

const FlexDiv1 = styled.section`
  margin: 0 auto;
  @media (min-width: 676px) {
    margin-right: 20px;
    width: 65%;
  }
`;
const FlexDiv2 = styled.section`
  margin: 0 auto;
  @media (min-width: 676px) {
    min-width: unset;
    width: 30%;
  }
  @media (min-width: 1200px) {
    min-width: unset;
    width: 25%;
    margin-left: 5px;
  }
  @media (min-width: 1500px) {
    min-width: unset;
    width: 20%;
    margin-left: 10px;
  }
`;
const Intro = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-weight: bold;
  }
`;
const MiningImg = styled.img`
  width: 100%;
  height: auto;
`;
const MainText = styled.div`
  padding: 0 30px;
  p {
    font-size: 1rem;
  }
  @media (min-width: 676px) {
    padding: 0px;
    width: 100%;
  }
`;
export default MiningConstruction;
