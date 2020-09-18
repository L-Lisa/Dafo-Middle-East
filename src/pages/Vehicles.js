import React from "react"
import styled from 'styled-components/macro'
import { PageComponent } from "components/PageComponent.js"
import BusGirl from "..//images/BusGirl.jpeg"
import ReactPlayer from 'react-player'
import { Link, animateScroll as scroll } from "react-scroll";
import { VideoBackground } from "..//components/VideoBackground.js"


export const Vehicles = ({ videoSource }) => {


    return (
        <>
            <PageComponent
                coverImage={BusGirl}
                ImageText={"vehicles"}
                headerText={"Automatic fire detection and suppression system for vehicles"}
                mainText1={"Most bus fires start in the engine compartment and surrounding areas. A tested and certified vehicle fire suppression system in combination with a reliable fire detection system is the best first line of response in case of a thermal incident."}
                mainText2={"Buses operate in various surroundings and climate types such as desert, tropic, arctic, on highways and in mountain terrain. These environments are very challenging also for a fire suppression system. Dafo fire suppression system are thoroughly tested for fire performance ability and environmental durability such as electromagnetic compatibility (EMC), vibration, corrosion and temperature extremes according to international vehicle standards to ensure the highest performance"}
                mainText3={"Dafo fire suppression system are approved as a component with regard to UNECE Regulation no. 107 and P-marked in accordance with SPCR 183."}
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


            <Top> <Link
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                offset={-15}
                duration={500}> &#8593;
            </Link></Top>
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
