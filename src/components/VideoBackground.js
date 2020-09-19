import React from "react"
import styled from 'styled-components/macro'
import FilmText from "../images/filmtext.png";
import { ScrollLink } from "components/ScrollButton"
/* import { Vscroller } from "components/Vscroller" */
import { Link, animateScroll as scroll } from "react-scroll";

export const VideoBackground = ({ videoSource, DafoDubaiME }) => {

    videoSource = "https://res.cloudinary.com/dnjk2bwkp/video/upload/v1600336003/dafo/road_1_uonbx5.mp4"
    return (
        <Container>
            <Video autoPlay="autoplay" loop="loop" muted>
                <source src={videoSource} type="video/mp4" />
            </Video>
            <ImgBox>
                <img src={FilmText} alt="Dafo" />
                <V><Link activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-15}
                    duration={500}
                    to="sectionMid"><p>&#8595;</p></Link></V>
            </ImgBox>


        </Container>
    )
}


const Container = styled.section`
position: relative;
    overflow: hidden;
    @media (min-width: 1190px) {
  height:100vh;
  }
`;
const Video = styled.video`
width: 100%;
height:100%;

    background: #1c1c1c;
@media (min-width: 1190px) {
    height: 100vh;
  }
`;

const ImgBox = styled.div`
position: absolute;
    top: 0;
    /* color:#f1f1f1;
    background-color: rgba(0, 0, 0, 0.3); */
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    @media (min-width: 550px) {
  height:100%;
  }
    img {
    width: 200px;
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
height:80px;
justify-content:center;
align-items:center;
position:absolute;
bottom:0;
color: white;
display:none;
cursor:pointer;
    margin-bottom: 20px;
@media (min-width:1190px){ 
    display:flex;
    }
`;

