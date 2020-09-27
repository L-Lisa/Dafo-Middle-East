import React from "react"
import styled from 'styled-components/macro'

import ReactPlayer from 'react-player/youtube'
import { Sidebar } from "components/Sidebar"
import UnceImage from "..//images/UnceImage.png"
import BusGirl from "..//images/BusGirl.jpeg"


export const BusPage = () => {
    return (
        <Wrapper>
            <FlexDiv1>
                <Intro>
                    <img src={BusGirl} alt="Dafo Buses" />
                    <MainText>
                        <h1>Automatic fire detection and suppression system for vehicles</h1>
                        <p>Most bus fires start in the engine compartment and surrounding areas. A tested and certified vehicle fire suppression system in combination with a reliable fire detection system is the best first line of response in case of a thermal incident.</p>
                        {"\n"}
                        <p>
                            Buses operate in various surroundings and climate types such as desert, tropic, arctic, on highways and in mountain terrain. These environments are very challenging also for a fire suppression system. Dafo fire suppression system are thoroughly tested for fire performance ability and environmental durability such as electromagnetic compatibility (EMC), vibration, corrosion and temperature extremes according to international vehicle standards to ensure the highest performance.</p> {"\n"}
                        <p>
                            Dafo fire suppression system are approved as a component with regard to UNECE Regulation no. 107 and P-marked in accordance with SPCR 183.
                        </p>
                        <Center>
                            <UNCE src={UnceImage} alt="UNCE type-approved" className="largerImg" />
                        </Center>
                        <br />
                    </MainText>
                </Intro>
                <PlayerContainer>
                    <EmbedPlayer>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=yFrJz5tydMQ&t=50s" width='100%'
                            height='100%'
                            muted
                        />
                    </EmbedPlayer>
                </PlayerContainer>
                <a href="https://www.youtube.com/watch?v=yFrJz5tydMQ&t=50s"><Button>Live demo link..</Button> </a>
            </FlexDiv1>
            <FlexDiv2>
                <Sidebar />
            </FlexDiv2>
        </Wrapper >
    )
}


const Button = styled.button`
color:#ee273e;
margin:10px;
`

const Wrapper = styled.main`
display:flex;
flex-direction:column;
margin: 0;
padding: 0;
box-sizing: border-box;
@media (min-width: 676px) {
    padding-top: 45px;
    flex-direction:row;
    flex-wrap:wrap;
    width: 90%;
    margin: 0 auto;
    }
`;

const FlexDiv1 = styled.section`
margin: 0 auto;
@media(min-width: 676px){
    margin-right: 20px;
    width:65%;
}
`;
const FlexDiv2 = styled.section`
margin: 0 auto;
@media(min-width:676px){
    min-width:unset;
    width:30%;
}
@media(min-width:1200px){
    min-width:unset;
    width:25%;
    margin-left:5px;
}
@media(min-width:1500px){
    min-width:unset;
    width:20%;
    margin-left:10px;
}
`;

const Intro = styled.div`
width: 100%;
display:flex;
flex-direction: column;
align-items: center;
h1{
    font-weight:bold;
}
img{
    width:100%;
    height: auto;
}
`;

const MainText = styled.div`
padding: 0 30px;
p{
    font-size:1rem;
}
@media(min-width:676px){
    padding:0px;
    width:100%;
}
`;

const EmbedPlayer = styled.div`
width: max-content;
height: max-content;
padding-bottom: 30px;
@media(min-width:876px){
    width: 564px;
    height: 350px;
}
`;
const PlayerContainer = styled.div`
width: max-content;
height:auto;
margin: 0 auto;
margin-top: 40px;
`;


export const UNCE = styled.img`
max-width: 300px;
height: auto; 
margin: 0 auto;
border: 1px solid lightgray;
`;

export const Center = styled.div`
width:100%;
display:flex;
align-content:center;
`;

