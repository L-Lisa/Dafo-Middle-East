/* import React from "react"
import styled from 'styled-components/macro'
import JohanDafo from "..//images/JohanDafo.webp"
import UnceImage from "..//images/UnceImage.webp"
import Shadi from "..//images/Shadi.webp"
import contactUs from "..//images/contactUs.webp"

export const Sidebar = () => {
    return (
        <ContactUs>

            <h2>For more information</h2>
            <h3>Contact our representatives</h3>
            <Person src={JohanDafo} alt="Johan Larsson" />
            <div>
                <ContactList>
                    <li> <h3>Johan Larsson</h3></li>
                    <li>Dafo Middle East</li>
                    <li>General Manager</li>
                    <li>+971&nbsp;55&nbsp;143&nbsp;6088</li>
                    <MailLink href="mailto:johan.larsson@dafo-middle-east.com">johan.larsson@dafo-middle-east.com</MailLink>
                </ContactList>
            </div>
            <Person Shadi src={Shadi} alt="Shadi Abdulla" />
            <div>
                <ContactList>
                    <li> <h3>Shadi Abdulla</h3></li>
                    <li>Dafo Middle East</li>
                    <li>Regional Manager</li>
                    <li>+971&nbsp;55&nbsp;800&nbsp;5509</li>
                    <MailLink href="mailto:abdullah.shadi@dafo-middle-east.com">abdullah.shadi@dafo-middle-east.com</MailLink>
                </ContactList>
            </div>
            <Person src={contactUs} alt="Dafo Sales team" className="largerImg" />
            <div>
                <ContactList>
                    <li> <h3>Sales team</h3></li>
                    <li>Dafo Middle East</li>
                    <li>+971&nbsp;4&nbsp;232&nbsp;3957</li>
                    <MailLink href="mailto:sales@dafo-middle-east.com">sales@dafo-middle-east.com</MailLink>
                </ContactList>
            </div>
        </ContactUs>
    )
}

const MailLink = styled.a`
display:flex;
align-content:center;
line-height: normal;
width: 146px;
padding-bottom:5px;

`;
const ContactUs = styled.article`
box-sizing:border-box;
width:100%;
display:flex;
flex-direction: column;
align-items: center;
margin-bottom: 30px;
h2{
    color: white;
    font-weight:bold;
    background:black;
    width: max-content;
    width: 90%;
    text-align: center;
    padding-left: 4px;
    margin-block-start: 0;
    @media (min-width:676px){
        padding-bottom: 5px;
        width: 100%;
        max-width:250px;
    }
}
li{
    padding: 7px 2px;
}
h3{
    display: inline;
    text-align: center;
    margin-top: -10px;
}
div{
    padding-bottom: 10px;
}
a{
    text-decoration:none;
    color:#1c1c1c;
}
`;

export const Person = styled.img`
width:35%;
height: auto;
border: ${props => props.Shadi ? "solid 1px #b0b0b0c9" : " "};
    @media (min-width:676px){
        width:57%;
        max-width:250px;
    }
    @media (min-width:1200px){
        width:50%;
        max-width:250px;
    }
`;


const ContactList = styled.ul`
padding-bottom: 13px;
line-height: 7px;
list-style:none;
display: inline;
padding-bottom:5px;
`; */
