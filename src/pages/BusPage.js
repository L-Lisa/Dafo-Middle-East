import React from "react"
import styled from 'styled-components/macro'
import BusPageMainImage from "..//images/BusPageMainImage.jpg"
import JohanImage from "..//images/JohanImage.jpg"
import UnceImage from "..//images/UnceImage.png"
import ReactPlayer from 'react-player/youtube'
import Shadi from "..//images/Shadi.jpg"
import contactUs from "..//images/contactUs.jpg"

export const BusPage = () => {
    return (
        <Wrapper>
            <FlexDiv1>
                <Intro>
                    <img src={BusPageMainImage} alt="Dafo Buses" />
                    <MainText>
                        <h1>Buses</h1>
                        <p>Dafo is a market leader in extinguishing systems for vehicles and our Fire Suppression Systems for buses are approved according to the new regulation UNECE R107. Engines, hydraulics, fuel and electrical installations pose the greatest fire risks on buses. These fires often take hold very quickly and leave little time for evacuating the bus. Our systems are thoroughly EMC, vibration and temperature tested according to vehicle standards to ensure it will perform in any situation. Many of the world’s leading bus manufacturers install Dafo systems in their assembly line. Our engineers understand the importance of modern lean production and find solutions that integrates our system in your manufacturing process. A low total cost of ownership is an important key factor for every bus operator. Dafo Fire Suppression Systems, with its superior maintenance intervals and reliability, contributes to increased profitability for manufacturers and operators. In the video below, you can see the effectiveness of an UNECE R107 approved Dafo Forrex Fire Suppression System.
                        </p>
                        <a href="https://youtu.be/pzBvZsKDHlE"><Button>Live demo link..</Button> </a>

                    </MainText>
                </Intro>
                <PlayerContainer>
                    <EmbedPlayer>
                        <p>ska det vara länk som ovan eller inbäddad? Tänker att man kan visa den såhär i en större skärm iaf (som jag gjort nu, den är inte med på en tel)</p>
                        <ReactPlayer
                            url="https://youtu.be/pzBvZsKDHlE" width='auto'
                            height='100%'
                        />
                    </EmbedPlayer>
                </PlayerContainer>
            </FlexDiv1>
            <FlexDiv2>
                <ContactUs>
                    <h2>Data Sheet</h2>
                    <img src={UnceImage} alt="UNCE type-approved" className="largerImg" />
                    <h2>For more information</h2>
                    <h3 className="width90">Contact our representative</h3>
                    <img src={JohanImage} alt="Johan Larsson" className="person" />
                    <div>
                        <ul>
                            <li> <h3>Johan Larsson</h3></li>
                            <li>Dafo Middle East</li>
                            <li>General Manager</li>
                            <li>+971 55 143 60 88</li>
                        </ul>
                    </div>
                    <img src={Shadi} alt="Shadi Abdulla" className="person" />
                    <div>
                        <ul>
                            <li> <h3>Shadi Abdulla</h3></li>
                            <li>Dafo Middle East</li>
                            <li>Sales Manager</li>
                            <li>+971 55 800 55 09</li>
                        </ul>
                    </div>
                    <img src={contactUs} alt="Dafo Sales team" className="largerImg" />
                    <div>
                        <ul>
                            <li> <h3>Sales team</h3></li>
                            <li>Dafo Middle East</li>
                            <li><a href="mailto:sales@dafo-middle-east.com">sales@dafo-middle-east.com</a></li>
                        </ul>
                    </div>
                </ContactUs>
            </FlexDiv2>
        </Wrapper>
    )
}


const Button = styled.button`
color:red;
margin:10px;
`

const Wrapper = styled.main`
display:flex;
flex-direction:column;
margin: 0;
  padding: 0;
  box-sizing: border-box;
@media (min-width: 676px) {
        flex-direction:row;
        flex-wrap:wrap;
    }
    h2{
    color: white;
    font-weight:bold;
    background:black;
    width: max-content;
    width: 100%;
    text-align: center;
    margin-block-start: 0;
@media (min-width: 676px) {
    padding-bottom: 5px;
    }}
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
min-width: 300px;
@media(min-width:676px){
    min-width:unset;
    width:30%;
}
img{
    width:300px;
    height:auto;
    @media(min-width:676px){
    min-width:unset;
    width:100%;
}
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
`

const EmbedPlayer = styled.div`
display:none;
@media(min-width:676px){
display:inline-block;
margin:0 auto;
height: 400px;
}
`;
const PlayerContainer = styled.div`
width:90%;
height:auto;
margin: 0 auto;
`;


const ContactUs = styled.article`
width:100%;
display:flex;
flex-direction: column;
align-items: center;
.largerImg{
    min-width:90%;
    height: auto;
}
.person{
    width:unset;
    width: 50% !important;
}
.width90{
    width:80%;
}
ul{
    list-style:none;
    display: inline;
    
}
li{
    padding: 10px 2px;
}
h3{
    display: inline;
}
div{
    padding-bottom: 10px;
}
a{
    text-decoration:none;
    color:#1c1c1c;
}
`;

