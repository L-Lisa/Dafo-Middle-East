import React from "react"
import styled from "styled-components/macro"
/* import PropTypes from 'prop-types'; */


const Container = styled.div`
/* box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0,0,0,.12);
margin-bottom: 20px;
border-radius: 3px;
width: 200px;
margin: 8px; */
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
    -webkit-box-shadow: 0 0 5px 2px #e8dcdc;
    -moz-box-shadow: 0 0 5px 2px #e8dcdc;
    box-shadow: 0 0 35px 7px #e8dcdc;
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
    margin: 0px;
   /*  font-size: 20px; */
    font-weight: 500;
`;
const SecondaryText = styled.h2`
width: 100%;
    margin: 0px;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 1.1em;
 /*    font-size: medium; */
    padding-top: 9px;
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
` ;
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
  @media (min-width: 1200px) {
    width: 84%;
  }
`;

export const ContactsBox = ({ title, secondaryText, secondaryText2, coverImage, children, className, supportingText, buttonText, email1, mailto1, email2, mailto2, phone1, phone2, phone3, phone4 }) => {
    return (

        <Container className={className}>
            {coverImage && <ImageDiv><CoverImage src={coverImage} /></ImageDiv>}
            <ContactList>
                <li>{title && <Title>{title}</Title>}</li>
                <li>  {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}</li>
                <li>  {phone1 && <Phone>{phone1}</Phone>} </li>
                <li> {email1 && <MailLink href={mailto1}>{email1}</MailLink>}</li>
                <li>  {secondaryText2 && <SecondaryText>{secondaryText2}</SecondaryText>}</li>
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