import React from "react"
import styled from 'styled-components/macro'
import DafoLogo from "../images/DafoMeNoBackTransp.png";

export const VideoBackground = ({ videoSource, DafoDubaiME }) => {

    videoSource = "https://res.cloudinary.com/dnjk2bwkp/video/upload/v1600336003/dafo/road_1_uonbx5.mp4"
    return (
        <Container>
            <video autoPlay="autoplay" loop="loop" muted>
                <source src={videoSource} type="video/mp4" />
            </video>
            <ImgBox>
                <img src={DafoLogo} alt="Dafo" />
            </ImgBox>
        </Container>
    )
}


const Container = styled.section`
position: relative;
    min-height: 300px;
    max-height: 800px;
    overflow: hidden;
    video{
    width: 100%;
    height: 100%;
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
    left: 0;
    bottom: 0;
    margin: 0 0 25px 10px;
   /*  border: #f1f1f1 1px solid;
    border-radius: 50%; */
  }
`;

