import React from "react"
import styled from 'styled-components/macro'
import { PageComponent } from "components/PageComponent.js"
import { Link, animateScroll as scroll } from "react-scroll"
import { ContactsBox } from "../components/ContactsBox"
import DistributorImg from "..//images/distributors.jpg"
import contactUs from "..//images/sales.jpg"
import ReactPlayer from 'react-player/youtube'
import DistributorLogo from "images/DafoMeNoBackTransp.png"
import { DistributorCard } from "../components/DistributorCard"

export const Distributors = () => {

    return (
        <>
            <PageComponent
                coverImage={DistributorImg}
                ImageText={"Distributors"}
                headerText={"Dafo Middle East authorized distributors and service providers "}
                mainText1={""}
                mainText2={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                mainText3={" It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                EndHeader1={"Meet our distributors"}
                lastElementColRow={
                    <>
                        <DistributorCard
                            titleD="Example Title Name"
                            coverImageD={DistributorLogo}
                            p1="Dubai, United Arab Emirates:Mombasa, Kenya: 

                            Tebra General TradingMaverick Digital 
                            
                            1st floor, BMTC building5th floor, Suite W5.2 
                            
                            P.O. Box 1247Kose Heights, Argwings Kodhek rd. 
                            
                            Dubai, UAENairobi, Kenya 
                            
                            info@tebratrading.cominfo@maverickdigital.co.ke "
                        />
                        <DistributorCard
                            titleD="Example Title Name"
                            coverImageD={DistributorLogo}
                            secondaryTextD={"Vad är infon till distributor?"}
                        />
                    </>}
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

        </>
    )
}

const DistributorDiv = styled.div`
width:90%;
display:flex;
img{
    width:100px;
    height:auto;
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

