/* tslint:disable */
import React, { useState } from "react";
import styled from "styled-components/macro";
import RedMElogo from "../images/RED-MElogo.png";

const Wrapper = styled.section`
  width: fit-content;
  width: 90%;
  padding: 5px;
  max-width: 500px;
  margin: 20px auto;
  box-shadow: 2px 2px 2px grey;
  border: solid 1px gray;
  border-radius: 2px;
  background: #ffff;
`;
const Bolts1 = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Dot = styled.div`
  height: 4px;
  width: 4px;
  border-radius: 50%;
  background: darkgray;
`;

const Height = styled.input``;
const Width = styled.input``;
const Depth = styled.input``;
const VolumeProtected = styled.div`
  width: fit-content;
  padding: 3px;
  margin: 8px;
  border-radius: 2px;
  background: #f2ebeb;
  align-self: center;
  border: 1px solid #fff;
  box-shadow: 2px 2px 2px grey;
  &:hover {
    box-shadow: none;
    border: 1px solid grey;
  }
`;

const CalculatorSection = styled.main`
  display: flex;
  flex-wrap: wrap;
  margin-top: 26px;
  font-size: 1.1rem;
  justify-content: space-around;
  @media (min-width: 400px) {
    flex-wrap: nowrap;
  }
`;

const Mainh1 = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 800;
  margin: 0;
  @media (min-width: 400px) {
  }
  @media (min-width: 1200px) {
    margin: 0 auto;
  }
`;
const H1p = styled.p`
  margin: 5px 0 8px 8px;
  font-size: 0.9rem;
`;
const MainText = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-left: 8px;
  @media (min-width: 600px) {
    width: unset;
  }
`;
const PreCalculation = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  img {
    width: 150px;
    margin: 6px;
  }
`;
const PostCalculation = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  img {
    width: 150px;
    margin: 6px;
    align-self: flex-end;
  }
  p {
    max-width: 80%;
    margin: auto;
    font-size: 0.9rem;
    padding-left: 8px;
    @media (min-width: 600px) {
      max-width: 97%;
    }
  }
`;

const ResultDiv = styled.section`
  p {
    max-width: 90%;
    margin: auto;
    font-size: 0.9rem;
  }
`;
const CalculatorBox = styled.div`
  flex-grow: 1;
  min-width: 190px;
  display: flex;
  flex-direction: column;
  @media (min-width: 400px) {
    padding-left: 32px;
  }
  input {
    width: 150px;
    background: #f2ebeb;
    height: 2rem;
    padding-left: 4px;
    align-self: center;
    margin: 2px;
  }
`;
const Fine = styled.div`
  font-size: 9px;
  width: 91%;
  padding-left: 8px;
  margin: 0 auto;
  padding-top: 4px;
`;

export const Calculator2 = () => {
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  const [depth, setDepth] = useState();
  const volumeProtected = ((height * width * depth) / 1000000000).toFixed(3);
  // const volumeProtectedNum = Number(volumeProtected);

  const [calculatedVolumeP, setCalculatedVolumeP] = useState(volumeProtected);
  const [showcalculation, setShowcalculation] = useState();
  const [recomended, setRecomended] = useState("");
  const [message, setMessage] = useState(" ");

  function round5(x) {
    return Math.ceil(x / 5) * 5;
  }
  function round10(x) {
    return Math.ceil(x / 10) * 10;
  }
  const multiply = volumeProtected * 3;
  const even5 = round5(multiply);
  const even10 = round10(multiply);
  const err = "a larger scale, please contact our sales team.";
  const recomendMessage = `${recomended} liters.`;

  const recomendedOrder = () => {
    if (multiply < 10) setRecomended(even5);
    if (multiply >= 10 && multiply <= 12.5) setRecomended(12.5);
    if (multiply > 12.5 && multiply < 30) setRecomended(even5);
    if (multiply > 30) setRecomended(even10);
    if (multiply > 100) setMessage(err);
  };
  const ClickVolumeProtected = (e) => {
    e.preventDefault();
    setCalculatedVolumeP(volumeProtected);
    setShowcalculation(true);
    console.log(volumeProtected);
    recomendedOrder();
  };
  console.log("recomended", recomended);
  console.log("recomendMessage", recomendMessage);
  console.log("calculatedVolumeP", calculatedVolumeP);
  console.log("multiply", multiply);
  return (
    <Wrapper>
      <Bolts1>
        <Dot />
        <Dot />
      </Bolts1>

      <div>
        <Mainh1>Estimation calculator </Mainh1>
      </div>
      <MainText>
        <H1p>
          Enter the measurements of the engine compartment to calculate the
          required ammount of suppression agent. All measurements should be from
          highest, lowest and widest points.
        </H1p>
      </MainText>

      <CalculatorSection>
        <CalculatorBox>
          <Height
            placeholder="Height mm"
            type="number"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
          />
          <Width
            placeholder="Width mm"
            type="number"
            value={width}
            onChange={(event) => setWidth(event.target.value)}
          />

          <Depth
            placeholder="Depth mm"
            type="number"
            value={depth}
            onChange={(event) => setDepth(event.target.value)}
          />
          <VolumeProtected
            // value={calculatedVolumeP}
            onClick={ClickVolumeProtected}
          >
            Submit
          </VolumeProtected>
        </CalculatorBox>

        <ResultDiv>
          {showcalculation && calculatedVolumeP && height && width && depth ? (
            <PostCalculation>
              <p>
                The protected volume is: {calculatedVolumeP} m3. Based on this
                we recomend a fire suppression system of{" "}
                {recomended < 100 ? recomendMessage : message}
              </p>
              <img src={RedMElogo} alt="Dafo Middle East" />
            </PostCalculation>
          ) : (
            <PreCalculation>
              <img src={RedMElogo} alt="Dafo Middle East" />
            </PreCalculation>
          )}
        </ResultDiv>
      </CalculatorSection>
      <Fine>
        * These numbers serve as a guidance, Dafo engineers will make final
        calculations for your system.
      </Fine>
      <Bolts1>
        <Dot />
        <Dot />
      </Bolts1>
    </Wrapper>
  );
};
