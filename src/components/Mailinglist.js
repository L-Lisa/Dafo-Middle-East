/* import React, { Component } from 'react';
import Mailchimp from 'react-mailchimp-form'
import styled from 'styled-components';
import dafoMEred from "..//images/dafoMEred.webp"
import DafoBlack from "..//images/DafoBlack.webp"
import dafoFlame from "..//images/dafoFlame.webp"
import { Link } from "react-router-dom"

export const Mailinglist = () => {

    return (
        <MailchimpBox>

            <Mailchimp

                action={process.env.REACT_APP_MAILCHIMP_URL}
                fields={[
                    {
                        name: 'FNAME',
                        placeholder: 'First name',
                        type: 'text',
                        required: true
                    },
                    {
                        label: "Last name",
                        name: 'LNAME',
                        placeholder: 'Last name',
                        type: 'text',
                        required: true
                    },
                    {
                        label: "Email",
                        name: 'EMAIL',
                        placeholder: 'Email',
                        type: 'email',
                        required: true
                    },
                ]}
                messages={
                    {
                        sending: "Sending...",
                        success: "Thank you for subscribing!",
                        error: "An unexpected internal error has occurred.",
                        empty: "You must write an e-mail.",
                        duplicate: "Too many subscribe attempts for this email address",
                        button: "Get information"
                    }
                }
                className="ChimpForm" />

        </MailchimpBox>
    );
}

const MailchimpBox = styled.div`
display:flex;
flex-direction:column;
width:100%;
align-items: center;
.ChimpForm{
    padding:10px;
    width:90%;
    margin:0 auto;
    display:flex;
    flex-direction:column;
}
input{
    height:1.1rem;

    margin-bottom:5px;
}
label{
    color:black;
}
button{
align-self:center;
background-image: url(${dafoFlame});
background-position: left;
background-repeat: no-repeat;
background-size: contain;
width: 140px;
height: 20px;
border-style: solid;
border-radius: 2px;
border-color: lightgray;
text-align: center;
}
`;

const Logo = styled.div`
width:25px;
height:25px;

background-image:url(${dafoFlame});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`; */
