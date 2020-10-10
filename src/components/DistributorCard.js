import React from "react"
import styled from "styled-components/macro"
/* import PropTypes from 'prop-types'; */


const Container = styled.div`
    margin: 35px;
    border-top: solid 2px #ee0201;
    background: #ffff;
    padding: 30px 3px;
    @media(min-width:410px){
    }
    @media(min-width:700px){
       width: calc(100% / 5);
}
`;

const TitleDtitleD = styled.h1`
    width: 100%;
    margin: 0px;
    font-size: 23px;
    font-weight: 600;
    text-transform: capitalize;
`;

const SecondaryTextD = styled.h2`
width: 100%;
padding: 0 4px;
font-size: 20px;
font-weight: 400;   
`;


const CoverLogoD = styled.img`
width: inherit;
    padding: 2px 10px 2px 10px;
  /*   @media (min-width: 1200px) {
       
  } */
`;

const Content = styled.div`

`;
const P1 = styled.p`
width:100%;
`;

const ChildrenDchildrenDContent = styled.div`
width:100%;
`;
const SupportingTextDsupportingTextDBox = styled.div`
width:100%;
`;
const Button = styled.button`
font-size: 1rem;
` ;
const ImageDiv = styled.div`
width: 100%;
 
    @media (min-width: 1200px) {
 height:auto;
  }
`;
const MailLink = styled.a`
color:#1c1c1c;

`;
const Phone = styled.div`
padding: 2px;

`;

const ContactList = styled.ul`
list-style: none;
list-style: none;
    display: flex;
    flex-direction: column;
    padding-inline-start: 0px;
`;

export const DistributorCard = ({ titleD, secondaryTextD, secondaryTextD2, coverImageD, childrenD, classNameD, supportingTextD, buttonTextD, email1D, mailto1D, email2D, mailto2D, phone1D, phone2D, phone3D, phone4D, p1, p2, p3 }) => {
    return (

        <Container classNameD={classNameD}>
            {coverImageD && <ImageDiv><CoverLogoD src={coverImageD} alt="Dafo Distributer Tebra" /></ImageDiv>}
            <ContactList>
                <li>{titleD && <TitleDtitleD>{titleD}</TitleDtitleD>}</li>

                <li>  {secondaryTextD && <SecondaryTextD>{secondaryTextD}</SecondaryTextD>}</li>
                {p1 && <P1>{p1}</P1 >}
                {p2 && <P1>{p2}</P1 >}
                {p3 && <P1>{p3}</P1 >}
                <li>  {phone1D && <Phone>{phone1D}</Phone>} </li>

                <li> {email1D && <MailLink href={mailto1D}>{email1D}</MailLink>}</li>

                <li>  {secondaryTextD2 && <SecondaryTextD>{secondaryTextD2}</SecondaryTextD>}</li>

                <li> {email2D && <MailLink href={mailto2D}>{email2D}</MailLink>}</li>
            </ContactList>

            {supportingTextD && <SupportingTextDsupportingTextDBox>{supportingTextD}</SupportingTextDsupportingTextDBox>}

            {buttonTextD && <Button>{buttonTextD}</Button>}

            <Content>
                {childrenD && <ChildrenDchildrenDContent>{childrenD}</ChildrenDchildrenDContent>}
            </Content>
        </Container>
    )
}