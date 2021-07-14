/* tslint:disable */
import React, { useState } from "react";
import styled from "styled-components/macro";
import RedMElogo from "../images/RED-MElogo.png";

const Wrapper = styled.section`
  background: white;
  box-shadow: 0 0 35px 7px #e8dcdc;
  padding: 8px;
  width: 80%;
  margin: 20px auto;
  border-radius: 2px;
`;

const Height = styled.input``;
const Width = styled.input``;
const Depth = styled.input``;
const VolumeProtected = styled.div`
  height: 25px;
  border: 1px solid black;
  width: 70px;
  text-align: center;
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: center;
  background: white;
  margin: 5px;
  border-radius: 2px;
`;

const CalculatorSection = styled.main`
  display: flex;
  flex-direction: column;
  height: auto;
  max-width: 550px;
  margin: 0 auto;
  margin-top: 30px;
  flex-wrap: wrap;

  @media (min-width: 560px) {
    flex-direction: row;
  }
`;

const Mainh1 = styled.h1`
  text-align: center;
  text-transform: uppercase;
  display: flex;
  align-self: center;
  font-size: 1.3rem;
  font-weight: 800;
  justify-content: center;

  @media (min-width: 400px) {
  }
  @media (min-width: 1200px) {
    margin: 0 auto;
  }
`;
const H1p = styled.p`
  margin: 5px 0 8px 0;
  font-size: 0.9rem;
`;
const PreCalculation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImgBox = styled.div`
  width: fit-content;
  align-self: flex-end;
  img {
    width: 150px;
    margin: 6px;
  }
`;
const ResultDiv = styled.section`
  min-width: 225px;
  max-width: 90%;
  font-size: 0.9rem;
  margin: auto;
  margin-top: 15px;
  @media (min-width: 560px) {
    width: 50%;
  }
  p {
    margin: 0;
  }
`;
const CalculatorBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  input {
    max-width: 100px;
    background: #f2ebeb;
    align-self: center;
    padding: 4px;
    margin: 2px;
  }
`;
const ClickDiv = styled.div`
  text-align: center;
  background: white;

  .showarrow {
    display: inline;
    font-weight: 700;
  }
  .showX {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-top: -4px;
  }
  .none {
    display: none;
  }
`;

export const Calculator = () => {
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  const [depth, setDepth] = useState();
  const volumeProtected = ((height * width * depth) / 1000000000).toFixed(2);

  const [calculatedVolumeP, setCalculatedVolumeP] = useState(volumeProtected);
  const [showcalculation, setShowcalculation] = useState();
  const [showCalculator, setShowCalculator] = useState(false);

  const largeOrder = volumeProtected * 3;
  const roundUpToNearest5 = (x) => Math.ceil(x / 5) * 5;
  const roundedOrder = roundUpToNearest5(largeOrder);

  const five = volumeProtected <= 5;
  const ten = volumeProtected > 5 && volumeProtected <= 10;
  const twelveHalf = volumeProtected > 10 && volumeProtected <= 12.5;
  const fifteen = volumeProtected > 12.5 && volumeProtected <= 15;

  const ClickVolumeProtected = (e) => {
    e.preventDefault();
    setCalculatedVolumeP(volumeProtected);
    setShowcalculation(true);
    console.log(volumeProtected);
  };
  return (
    <Wrapper>
      <ClickDiv onClick={() => setShowCalculator(!showCalculator)}>
        <span className={showCalculator ? `showX` : `none`}> &#9747; </span>{" "}
      </ClickDiv>
      <ClickDiv onClick={() => setShowCalculator(!showCalculator)}>
        <div>
          <Mainh1>Estimation calculator</Mainh1>
        </div>
        <div>
          <H1p>How much forrex does your engine needs to be safe?</H1p>
        </div>
      </ClickDiv>
      {showCalculator && (
        <CalculatorSection>
          <CalculatorBox>
            <Height
              placeholder="HEIGHT mm"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
            <Width
              placeholder="WIDTH mm"
              value={width}
              onChange={(event) => setWidth(event.target.value)}
            />

            <Depth
              placeholder="Depth mm"
              value={depth}
              onChange={(event) => setDepth(event.target.value)}
            />
            <VolumeProtected onClick={ClickVolumeProtected}>
              Submit
            </VolumeProtected>
          </CalculatorBox>

          <ResultDiv>
            {!showcalculation && (
              <PreCalculation>
                <p>Enter the measurements of the engine compartment here.</p>
                <ImgBox>
                  <img src={RedMElogo} alt="Dafo Middle East" />
                </ImgBox>
              </PreCalculation>
            )}
            {showcalculation && height && width && depth && calculatedVolumeP && (
              <p>
                estimate the required volume Forrex to order at:
                {showcalculation && five && <span> five liters</span>}
                {showcalculation && ten && <span> 10 liters</span>}
                {showcalculation && twelveHalf && <span> 12,5 liters</span>}
                {showcalculation && fifteen && <span> 15 liters</span>}
                {showcalculation && roundedOrder && (
                  <span> {roundedOrder} liters</span>
                )}
              </p>
            )}
          </ResultDiv>
        </CalculatorSection>
      )}
    </Wrapper>
  );
};
