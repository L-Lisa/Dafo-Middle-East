import React from "react"
import styled from 'styled-components/macro'
import { PageComponent } from "components/PageComponent.js"
import BusGirl from "../images/BusGirl.jpeg"
import ReactPlayer from 'react-player'
import { Link, animateScroll as scroll } from "react-scroll";
import { VideoBackground } from "..//components/VideoBackground.js"


export const Vehicles = ({ }) => {

    return (
        <>
            <PageComponent
                coverImage={BusGirl}
                ImageText={"vehicles"}
                headerText={"Automatic fire detection and suppression system "}
                mainText1={"Dafo was one of the first companies in the world which started to develop integrated firefighting solutions for vehicles. "}
                mainText2={"Over the years Dafo has obtained vas experience and knowledge from our end user installations which have been used as a basis for "}
                listItem1={"Eliminating false alarms"}
                listItem2={" Eliminating false releases"}
                mainText3={"As a result of the development Dafo can today proudly present state of the art reliable solutions without vulnerable and pressurized agent containers."}
                mainText4={"With more than 165000 vehicle systems sold worldwide know-how and experience ensure our customers to have the latest technology combined with proven reliability. "}

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

