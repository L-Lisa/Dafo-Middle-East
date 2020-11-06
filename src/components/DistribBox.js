import React from "react"
import styled from "styled-components/macro"



const Container = styled.div`
display: flex;
min-width: 221px;
width: min-content;
flex-direction: column;
align-items: center;
justify-content: center;
justify-items: center;
align-content: center;
margin: 15px 6px 2px 6px;
justify-content: flex-start;
height: auto;
background: #fff;
padding-top: 5px;
-webkit-box-shadow: 0 0 5px 2px #9e9e9e69;
-moz-box-shadow: 0 0 5px 2px #9e9e9e69;
box-shadow: 0 0 35px 7px #9e9e9e69;
width: 30%;
max-width: 315px;
background: none;
height:410px;
@media(min-width:410px){
    width:50%;
}
@media(min-width:630px){
    width:30%;
    background:none;
}
`;
const Title = styled.h1`
width: 100%;
margin: 3px;
font-weight: 400;
text-transform: uppercase;
font-size: 1.1em;
padding-top: 9px;
text-align: center;
`;
const SecondaryText = styled.article`
width: 100%;
margin: 0px;
font-weight: 500;
font-size: 0.9rem;
text-align: left;
line-height: 1.5rem;
`;
const CoverImage = styled.img`
width: auto;
height: 200px;
@media (min-width: 1200px) {
    width: auto;
  }
`;
const Content = styled.div`
padding:2px;
`;
const ChildrenContent = styled.div`
width:100%;
`;
const SupportingTextBox = styled.div`
width:100%;
`;
const Button = styled.button`
width: max-content;
background: slategrey;
color: white;
margin: 20px;
font-size: 1rem;
`;
const ImageDiv = styled.div`
width: 100%;
height: 200px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
justify-items: center;
align-content: center;
@media (min-width: 1200px) {
height:auto;
}
`;
const MailLink = styled.a`
color:#1c1c1c;
padding: 2px;
font-size: 0.9em;
`;
const Phone = styled.div`
padding: 2px;
font-size: 0.9em;
`;
const ContactList = styled.ul`
list-style: none;
line-height: normal;
color: #1c1c1c;
padding: 04px;
width: 95%;
margin-top: 0;
@media (min-width: 446px) {
   text-align:center
}
@media (min-width: 630px) {
    width: 95%;
    text-align:left;
}
`;
export const DistribBox = ({ title, secondaryText1, secondaryText2, secondaryText3, secondaryText4, secondaryText5, coverImage, children, className, supportingText, buttonText, email1, mailto1, email2, mailto2, phone1, phone2, phone3, phone4 }) => {
    return (
        <Container className={className}>
            {coverImage && <ImageDiv><CoverImage src={coverImage} alt="Dafo Middle East" /></ImageDiv>}
            <ContactList>
                <li>{title && <Title>{title}</Title>}</li>
                <li>  {secondaryText1 && <SecondaryText>{secondaryText1}</SecondaryText>}</li>
                <li>  {secondaryText2 && <SecondaryText>{secondaryText2}</SecondaryText>}</li>
                <li>  {secondaryText3 && <SecondaryText>{secondaryText3}</SecondaryText>}</li>
                <li>  {secondaryText4 && <SecondaryText>{secondaryText4}</SecondaryText>}</li>
                <li>  {phone1 && <Phone>{phone1}</Phone>} </li>
                <li> {email1 && <MailLink href={mailto1}>{email1}</MailLink>}</li>
                <li>  {secondaryText5 && <SecondaryText>{secondaryText5}</SecondaryText>}</li>
                <li> {email2 && <MailLink href={mailto2}>{email2}</MailLink>}</li>
            </ContactList>
            {supportingText && <SupportingTextBox>{supportingText}</SupportingTextBox>}
            {buttonText && <Button>{buttonText}</Button>}
            <Content>
                {children && <ChildrenContent>{children}</ChildrenContent>}
            </Content>
        </Container>
    )
}