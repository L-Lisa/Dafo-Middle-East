import React from "react"
import styled from 'styled-components/macro'
import DafoBlack from "..//images/DafoBlack.jpg"
import { Link } from "react-router-dom"
import smeDxbTxt from "..//images/smeDbxTxt.jpg"
import DafoWhite from "..//images/White-dafo-logo.png"
export const Footer = () => {
    return (
        <FooterContainer>
            <Padding>
                <Box1>
                    <DafoBlackFoot src={DafoWhite} alt="Dafo Middle East" />

                </Box1>
                <Box2>
                    <div>
                        <h1>Follow Dafo</h1>

                        < a href="https://www.youtube.com/user/dafobrand" target="_blank" rel="noopener noreferrer">Youtube</a>
                        <br />
                        < a href="https://www.linkedin.com/company/dafo-middle-east" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <br />
                        < a href="https://twitter.com/Dafovehicle" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div>
                </Box2>
                <Box3>
                    <div>
                        <h1>Dafo Middle East</h1>
                        <LocationP>
                            Clover bay tower<br />
    Office 1106 <br />
    Business bay <br />
    Dubai, UAE <br />
                        </LocationP>
                        <PhoneEmailP>
                            +971&nbsp;4&nbsp;232&nbsp;3957 <br />
                            <a href="mailto:info@dafo-middle-east.com ">info@dafo-middle-east.com </a>

                        </PhoneEmailP>
                    </div>
                </Box3>
                <Box4>
                    <SmeSupport>
                        <img src={smeDxbTxt} alt="Dafo supporting sme enterprise" />
                    </SmeSupport>
                    {/*   <Link to="/"> <h1>Dafo-middle-east.com/</h1></Link>
                    <Link to="/contact-us">Contact</Link><br />
                    <Link to="/site-map">Site-map</Link> */}
                </Box4>
            </Padding>
        </FooterContainer>
    )
}


const FooterContainer = styled.footer`
width:100%;
min-height:250px;
background:black;
font-size:0.8rem;
h1{
    font-size:1.2rem;
    margin: 0;
}
a{
    text-decoration:none;
    color:white;
    font-size:0.8rem;
    cursor: pointer;
}
`;
const Padding = styled.div`
padding:10px 5px;
display:flex;
flex-direction:row;
flex-wrap:wrap;
background:black;
color:white;
justify-content:center;
`
const Box1 = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items: center;
@media only screen and (min-width : 480px) {
    width:40%;
    margin:2%;
    display: flex;
    align-items: center;
}
@media only screen and (min-width : 678px) {
    width:24%;
    margin:2%;
}
@media only screen and (min-width : 2000px) {
    width:15%;
}`
const DafoBlackFoot = styled.img`
    width: 165px;
    padding-bottom: 20px;
`;
const SmeSupport = styled.section`
height: auto;
margin-left:5px;
flex-direction: column;
display: flex;
align-items: center;
@media only screen and (min-width : 480px) {
    margin-left:1px;
}
img{
    width:90px;
    margin: 0 auto;
    max-width: 250px;
    border: 1px solid #1c1c1c0f;
}
`;
const Box2 = styled.div`
width:90%;
margin:5%;
text-align:center;
@media only screen and (min-width : 480px) {
    width:40%;
    margin:2%;
    display: flex;
    justify-content: center;
    text-align: left;
    div{
    margin-left:15px;
}
}
@media only screen and (min-width : 678px) {
    width:20%;
    margin:2% 1%;
}
@media only screen and (min-width : 850px) {
    display: flex;
    justify-content: center;
}
@media only screen and (min-width : 2000px) {
    width:15%;
}
`;
const Box3 = styled.div`
text-align:center;
margin:5%;
div{
    width:auto;
    display:flex;
    flex-direction:column;
}
@media only screen and (min-width : 480px) {
    width:40%;
    margin:2%;
    display: flex;
    justify-content: flex-end;
    div{
        text-align: left;
    }
}
@media only screen and (min-width : 678px) {
    width:20%;
}
@media only screen and (min-width : 850px) {
    justify-content: center;
}
@media only screen and (min-width : 2000px) {
    width:15%;
}
`;
const LocationP = styled.p`
margin:0px;
`;

const PhoneEmailP = styled.p`
margin-top: 8px;
`;

const Box4 = styled.div`
width:90%;
margin:5%;
@media only screen and (min-width : 480px) {
    width:40%;
    margin:2%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}
@media only screen and (min-width : 678px) {
    width:20%;
    margin:2%;
}
@media only screen and (min-width : 2000px) {
    width:15%;
}
`;
