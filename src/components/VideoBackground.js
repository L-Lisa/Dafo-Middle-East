import React from "react";
import styled from "styled-components/macro";
import FilmText from "../images//NedladdadFilmtext.png";
import { Link } from "react-scroll";

const Container = styled.section`
position: relative;
overflow: hidden;
background: #1c1c1c;
@media (min-width: 1190px) {
height: auto;
  }
`;
const Video = styled.video`
width: 100%;
height: 100%;
background: #1c1c1c;
@media (min-width: 1190px) {
height: auto;
}
`;
const ImgBox = styled.div`
position: absolute;
top: 0;
width: 100%;
height: 90%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 40px;
@media (min-width: 550px) {
height: 100%;
}
img {
width: 150px;
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
const V = styled.div`
width: 80px;
height: 80px;
justify-content: center;
align-items: center;
position: absolute;
bottom: 0;
color: white;
display: none;
cursor: pointer;
margin-bottom: 40px;
@media (min-width: 1190px) {
display: flex;
}
`;


export const VideoBackground = ({ videoSource, DafoDubaiME }) => {
  videoSource =
    "https://res.cloudinary.com/dnjk2bwkp/video/upload/v1600336003/dafo/road_1_uonbx5.mp4";
  return (
    <Container>
      <Video autoPlay="autoplay" loop="loop" muted>
        <source src={videoSource} type="video/mp4" />
      </Video>
      <ImgBox>
        <img src={FilmText} alt="Dafo Middle East" />
        <V>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-15}
            duration={500}
            to="sectionMid"
          >
            <p>&#8595;</p>
          </Link>
        </V>
      </ImgBox>
    </Container>
  );
};

