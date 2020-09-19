import React from "react"
import styled from 'styled-components/macro'
import { PageComponent } from "components/PageComponent.js"
import { Link, animateScroll as scroll } from "react-scroll"

import PowerGenMainImage from "..//images/Kompressor.JPG"


export const Power = () => {

    return (
        <>
            <PageComponent
                coverImage={PowerGenMainImage}
                ImageText={"Kompressors"}
                headerText={"Special applications"}
                mainText1={"Many business operations rely on emergency generators to secure critical functions within their organization. 	Same content as bus page It is easy to ignore the fact that, as these units are driven by combustible engines, they also constitute a significant fire hazard."}

                mainText2={"Dafo Forrex Fire Suppression Systems response rapidly to any increase in temperature. The Dafo system is developed to use worldwide in both cold and hot climate. It ensures maximum protection while being much more economical than previously available solutions like water sprinkler, dry chemical or CO2-systems"}
                mainText3={""}
                lastElement={""
                    /*  <>
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
                     </> */
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
