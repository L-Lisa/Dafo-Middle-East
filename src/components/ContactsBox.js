import React from "react"
import styled from "styled-components/macro"
/* import PropTypes from 'prop-types'; */


const Container = styled.div`
box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0,0,0,.12);
margin-bottom: 20px;
border-radius: 3px;
background: whitesmoke;
width: 200px;
margin: 8px;
`;

const Title = styled.h1`
font-size: 1.1rem;
`;
const SecondaryText = styled.h2`
font-size: 1rem;
`;

const TitleBar = styled.div`
display: flex;
align-items: center;
margin:10px;
height: 30px;
`;

const CoverImage = styled.img`
width: 100%;
height:auto;
`;

const Content = styled.div`
padding:20px;
`;

const ChildrenContent = styled.div`
border: 1px solid slategrey;
margin:20px;
padding:20px;
`;
const SupportingTextBox = styled.div`
width:100%;
padding:10px;
background:ghostwhite;
height: 150px;
`
const Button = styled.button`
width: max-content;
background: slategrey;
color: white;
margin: 20px;
font-size: 1rem;
` ;
const ImageDiv = styled.div`
height:280px;
display:flex;
align-items:center;
justify-content:center;
`;

export const ContactsBox = ({ title, secondaryText, coverImage, children, className, supportingText, buttonText }) => {
    return (

        <Container className={className}>
            <TitleBar>

                <div>
                    {title && <Title>{title}</Title>}
                    {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
                </div>
            </TitleBar>

            {coverImage && <ImageDiv><CoverImage src={coverImage} /></ImageDiv>}

            {supportingText && <SupportingTextBox>{supportingText}</SupportingTextBox>}

            {buttonText && <Button>{buttonText}</Button>}

            <Content>
                {children && <ChildrenContent>{children}</ChildrenContent>}
            </Content>
        </Container>
    )
}