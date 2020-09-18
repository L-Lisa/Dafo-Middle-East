import React from "react"
import styled from 'styled-components/macro'
import PowerGenMainImage from "..//images/Kompressor.JPG"
import { Sidebar } from "components/Sidebar"

export const PowerGenPage = () => {
    return (
        <Wrapper>
            <FlexDiv1>
                <Intro>
                    <img src={PowerGenMainImage} alt="Dafo power-generator" />
                    <MainText>
                        <h1>Special applications</h1>
                        <p>Many business operations rely on emergency generators to secure critical functions within their organization. 	Same content as bus page
                        It is easy to ignore the fact that, as these units are driven by combustible engines,
                        they also constitute a significant fire hazard. <br />Dafo Forrex Fire Suppression Systems response
                        rapidly to any increase in temperature. The Dafo system is developed to use worldwide in both cold and hot climate.
                        It ensures maximum protection while being much more economical than previously available
solutions like water sprinkler, dry chemical or CO2-systems</p>
                    </MainText>
                </Intro>
            </FlexDiv1>
            <FlexDiv2>
                <Sidebar />
            </FlexDiv2>
        </Wrapper>
    )
}


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


