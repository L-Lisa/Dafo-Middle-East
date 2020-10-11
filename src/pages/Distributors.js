import React from "react"
import styled from 'styled-components/macro'
import { PageComponent } from "components/PageComponent.js"
import { Link, animateScroll as scroll } from "react-scroll"
import { DistribBox } from "../components/DistribBox"
import coverImage from "..//images/distributors1920x1200.jpg"
import contactUs from "..//images/sales.jpg"
import ReactPlayer from 'react-player/youtube'
import DistributorLogo from "images/DafoMeNoBackTransp.png"
import Tebra from "images/Tebra-Logo.jpg"
import { DistributorCard } from "../components/DistributorCard"
import DafoRedFlameFade from "../images/DafoRedFlamefaded.jpg"
import { RedLine } from "../components/RedLine"
import { MidDistributors } from "../components/MidDistributors"


export const Distributors = () => {
  return (
    <>

      <PageComponent

        coverImage={coverImage}
        ImageText={"Distributors"}

        mainText1={<MidDistributors />}
        mainText2={""}
        mainText3={""}
        lastElement={<EndSection id="sectionEnd" >

          <H2>List of Dafo Middle East authorized distributors and service providers </H2>
          <Red></Red>
          <ContactSection>

            <DistribBox
              coverImage={Tebra} alt=" Dafo Distributor Tebra"
              title="Tebra General Trading"
              secondaryText1={"Dubai, United Arab Emirates:"}
              secondaryText2={"Head Office: First Floor, BMTC Building, Deira "}
              secondaryText3={"Dubai, U.A.E. P.O.Box 1247"}
              email1="info@tebratrading.com"
              mailto1="info@tebratrading.com"
            />
            <DistribBox
              coverImage={""} alt=" Dafo Kenya"
              title={"Maverick Digital"}
              secondaryText1={"Mombasa, Kenya: "}
              secondaryText2={"P.O. Box 1247 Kose Heights, Argwings Kodhek rd."}
              secondaryText3={" Nairobi & Mombasa, Kenya"}
              email2="info@maverickdigital.co.ke"
              mailto2="info@maverickdigital.co.ke"

            />
            {/*   <>
                <PlayerContainer>
                    <EmbedPlayer>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=yFrJz5tydMQ&t=50s" width='100%'
                            height='100%'
                            playing
                            muted
                        />
                    </EmbedPlayer>
                </PlayerContainer>
            </>  */}

          </ContactSection>
          <Red></Red>
        </EndSection>}
      />


    </>
  )
}

const Red = styled.span`
width:${props => props.width ? props.width : "200px"};
height: 4px;
background: #ee0201;
align-self: center;
margin: 2px 5px 2px 2px;
display: inline-block;
margin: 30px 0;
`;


export const EndH1 = styled.h1`
/* font-size: 26px; */
 margin: 0 auto;
    color: #ee0201;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    text-align: center;
    padding: 5px;
  max-width: 250px; 
    text-transform: uppercase;
    -webkit-letter-spacing: 2px;
    -moz-letter-spacing: 2px;
    -ms-letter-spacing: 2px;
    letter-spacing: 2px;
    font-weight: 700;
    font-size: calc(16px + 1vw);
    margin-block-start: 0; 
    @media(min-width:630px){
      /*   font-size: 30px; */
        max-width:unset;
}
`;
const DistributorDiv = styled.div`
width:90%;
display:flex;
img{
    object-fit: contain;
    padding: 2px 10px;
    height: 170px;
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

const ContactSection = styled.section`
width:100%;
display:flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
height:auto;
background-color: #fff;
@media (min-width:677px){
  background-color: none;
 /*  background-image: url(${DafoRedFlameFade}); */
  background-position: center;
background-repeat: no-repeat;
    background-size: contain;
}
@media (min-width: 1190px) {
 
  justify-content: center;
  }
  @media (min-width: 1500px) {
    
  }
`;

const EndSection = styled.section`
text-align:center;
padding-top:15px;
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
height:auto;
background-color: #fff;
@media (min-width: 1190px) {
  height: 100vh;
  justify-content: center;
  }
  @media (min-width: 1500px) {
    
  }
`;

const H2 = styled.h2`
margin-top: 35px;
text-align: center;
@media (min-width: 400px) {
width: 88%;
}
@media (min-width: 400px) {
  margin-top: 50px;
}
@media (min-width: 1200px) {
  /*   font-size: 2.2rem; */
padding-bottom: 50px;
width: 70%;
  }
`;