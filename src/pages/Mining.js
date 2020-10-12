import React from "react"
import styled from 'styled-components/macro'
import { PageComponent } from "components/PageComponent.js"
import MiningImg from "..//images/catepillar1920x1200.jpg"
import ReactPlayer from 'react-player/youtube'
import DafoRedFlameFadeContent from "../images/DafoRedFlameFadeContent.jpg"

export const Mining = () => {


    return (
        <>
            <PageComponent
                coverImage={MiningImg} alt="Dafo Middle East Fire protection"
                ImageText={"Mining & Heavy Duty Equipment"}
                headerText={"Fire safety for contracting mining machinery"}
                mainText1={"Fires in vehicles often take hold very quickly and are hard to extinguish with a handheld extinguisher. A correctly dimensioned vehicle fire suppression system offers you fast, effective protection that limits the consequences of a fire."}

                mainText2={"We have until today sold more than 100 000 systems to leading manufacturers such as Volvo, Atlas, CAT, Scania, Sandvik, Komatsu, MAN, John Deere, Ponsse etc.Insurance companies demand on-board vehicle fire suppression systems on machinery used for forestry,peat and chipping. Correctly planned and installed, a vehicle fire suppression system is a fast and effective way of providing the protection you need to prevent disaster."}

                mainText3={"Dafo supply systems approved by SBF in accordance with SBF 127 & SBF 128. Agents as Forrex, the unique non-corrosive freeze protected Wet Chemical is used. We have more than 30 years’ experience of vehicle fire suppression systems, adapted to suit the most demanding conditions."}

                lastElement={
                    <>
                        <PlayerContainer>
                            <EmbedPlayer>
                                <ReactPlayer
                                    url="" width='100%'
                                    height='100%'
                                    playing
                                    muted
                                    loop
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
background-image: url(${DafoRedFlameFadeContent});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
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
