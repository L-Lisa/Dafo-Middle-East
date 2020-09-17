import React from "react"
import styled from 'styled-components/macro'
import FilmText from "../images/filmtext.png";

export const VideoBackground = ({ videoSource, DafoDubaiME }) => {

    videoSource = "https://res.cloudinary.com/dnjk2bwkp/video/upload/v1600336003/dafo/road_1_uonbx5.mp4"
    return (
        <Container>
            <Video autoPlay="autoplay" loop="loop" muted>
                <source src={videoSource} type="video/mp4" />
            </Video>
            <ImgBox>
                <img src={FilmText} alt="Dafo" />
            </ImgBox>
            <V>V</V>
        </Container>
    )
}


const Container = styled.section`
position: relative;
    min-height: 300px;
    overflow: hidden;
`;
const Video = styled.video`
width: 100%;
height:100%;
@media (min-width:1190px){
    height: 100vh;
    object-fit: cover;
    }
`;

const ImgBox = styled.div`
position: absolute;
    top: 0;
    /* color:#f1f1f1;
    background-color: rgba(0, 0, 0, 0.3); */
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    img {
    width: 250px;
    height: auto;
    display: block;
    position: absolute;
   /*  border: #f1f1f1 1px solid;
    border-radius: 50%; */
  }
`;

const V = styled.div`
width: 100%;
height:30px;
display:flex;
justify-content:center;
align-items:center;
position:absolute;
bottom:0;
color:white;
visibility:hidden;
@media (min-width:1190px){
    visibility:visible;
    }
`;

