import React from "react"
import styled from 'styled-components/macro'
import { PageComponent } from "components/PageComponent.js"
import { Link, animateScroll as scroll } from "react-scroll"
import DafoLogga from "../images/DafoMeNoBack.png";
import aboutImg from "..//images/aboutImg.jpg"
import ReactPlayer from 'react-player/youtube'

export const About = () => {

    return (
        <>
            <ImgBox>
                <img src={DafoLogga} alt="Dafo" />

            </ImgBox>
            <PageComponent
                coverImage={aboutImg}
                ImageText={""}
                headerText={"Rubrik?"}
                mainText1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum "}

                mainText2={""}
                mainText3={""}
                lastElement={
                    <>
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
                    </>
                }
            />

            {/* 
            <Top> <Link
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                offset={-15}
                duration={500}> &#8593;
            </Link></Top> */}
        </>
    )
}


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
const ImgBox = styled.div`
position: absolute;
    top: 0;
    /* color:#f1f1f1;
    background-color: rgba(0, 0, 0, 0.3); */
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    @media (min-width: 400px) {
        height: 350px;
  }
  @media (min-width: 550px) {
  height:500px;
  }
  @media (min-width: 900px) {
    height: 890px;
  }
  @media (min-width: 1200px) {
  height:1200px;
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