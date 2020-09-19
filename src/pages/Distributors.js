import React from "react"
import styled from 'styled-components/macro'
import { PageComponent } from "components/PageComponent.js"
import { Link, animateScroll as scroll } from "react-scroll"

import DistributorImg from "..//images/distributors.jpg"


export const Distributors = () => {

    return (
        <>
            <PageComponent
                coverImage={DistributorImg}
                ImageText={"Distributors"}
                headerText={""}
                mainText1={""}

                mainText2={""}
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
