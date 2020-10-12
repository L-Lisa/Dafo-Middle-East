import React from "react"
import styled from "styled-components/macro"




export const MidDistributors = () => {

  return (
    <MidSection id="sectionMid" >

      <Header>
        Dafo Middle East authorized distributors and service providers
            </Header>

      <MainText>
        All our authorized distributors have trained personnel qualified for sales, installation & maintenance.
            </MainText>
    </MidSection>
  )
}


const MidSection = styled.section`
width: 100%;
background: #f5f5f5;
margin: 0 auto;
  /* font-size: 1rem; */
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-flex-direction: column;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-pack: center;
-webkit-justify-content: center;
-ms-flex-pack: center;
justify-content: center;
padding: 3px;
align-items:center;
`;


const Header = styled.h1`
margin-top: 35px;
text-align: center;
font-size: 1.3rem;
@media (min-width: 400px) {
text-align: left;
width: 88%;
}
@media (min-width: 400px) {
  margin-top: 50px;
}
@media (min-width: 1200px) {
  /*   font-size: 2.2rem; */
padding-bottom: 50px;
width: auto;
text-align: center;
  }
`;

const MainText = styled.article`
width: 90%;
line-height: 1.5rem;
padding: 0 10px 0 10px;
@media (min-width: 1200px) {
padding: 0 40px 0 40px;
margin: 0 auto;
    text-align: center;
  }
`;