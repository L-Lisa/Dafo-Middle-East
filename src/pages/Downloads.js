import React, { useState } from "react"
import styled from 'styled-components/macro'
import { Mailinglist } from "../components/Mailinglist"
import foldericon from "../images/foldericon.png"

import DafoRedFlame from "../images/DafoRedFlame.jpg"
import DafoRedFlameFade from "../images/DafoRedFlamefaded.jpg"

export const Downloads = () => {
    const [email, setEmail] = useState("");
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [showInfo, setShowInfo] = useState(false)

    const handleSubmit = event => {
        event.preventDefault();
        /*   setShowInfo("true"); */
    };

    return (
        <Color>
            <DownloadsWrapper>
                {!showInfo ? (
                    <Main>
                        <IntroDiv>
                            <h2>Downloads</h2> <p>Enter your details here to proceed to our download library and join our mailing list.</p>
                        </IntroDiv>
                        <FormBox>
                            <div id="mc_embed_signup">
                                <Form action="https://gmail.us17.list-manage.com/subscribe/post-json?u=ddf4337f8aa288503ec5cf4fb&amp;id=2b430cfaa9&c=?"
                                    /* action="https://dafo-middle-east.us4.list-manage.com/subscribe/post-json?u=4fc9766f7a3940cb4177774a4&amp;id=93f2cf16ba&c=?" */
                                    method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate"
                                    target="hiddenFrame" novalidate
                                >
                                    <div id="mc_embed_signup_scroll">
                                        <div className="mc-field-group">
                                            <label htmlFor="mce-EMAIL">
                                            </label>
                                            <input
                                                value={email}
                                                type="email"
                                                required
                                                placeholder="Email Address"
                                                name="EMAIL"
                                                className="required email"
                                                id="mce-EMAIL"
                                                onChange={event => setEmail(event.target.value)}
                                            />
                                        </div>
                                        <div className="mc-field-group">
                                            <label htmlFor="mce-FNAME"></label>
                                            <input
                                                type="text"
                                                placeholder="First Name"
                                                required
                                                value={fName}
                                                name="FNAME"
                                                className=""
                                                id="mce-FNAME"
                                                onChange={event => setFName(event.target.value)}
                                            />
                                        </div>
                                        <div className="mc-field-group">
                                            <label htmlFor="mce-LNAME"> </label>
                                            <input
                                                placeholder="Last Name"
                                                type="text"
                                                value={lName}
                                                name="LNAME"
                                                className=""
                                                id="mce-LNAME"
                                                onChange={event => setLName(event.target.value)} />
                                        </div>
                                        <div id="mce-responses" className="clear">
                                            <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                                            <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                                        </div>

                                        <div style={{ position: "absolute", left: "-5000px", }} aria-hidden="true">
                                            <input type="text"
                                                name="b_4fc9766f7a3940cb4177774a4_93f2cf16ba"
                                                tabIndex="-1"
                                                value=" " />
                                        </div>
                                        <div>
                                            <div className="clear" >
                                                <input type="submit" value="continue" name="subscribe" id="mc-embedded-subscribe"
                                                    className="button"
                                                />
                                                {/*  <div className="indicates-required"><span className="asterisk">*</span> indicates required</div> */}
                                                {/*  <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
                                        <script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);</script> */}
                                            </div></div>
                                    </div>
                                </Form>
                                <iframe onLoad={() => setShowInfo(true)} name="hiddenFrame" src="about:blank" style={{ display: 'none' }}></iframe>
                            </div>
                        </FormBox>
                    </Main>

                ) : (
                        <DownloadsBox>
                            <FolderBox href=" https://dafomiddleeast.sharepoint.com/sites/download/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2Fdownload%2FShared%20Documents%2FDafo%20files&p=true&originalPath=aHR0cHM6Ly9kYWZvbWlkZGxlZWFzdC5zaGFyZXBvaW50LmNvbS86Zjovcy9kb3dubG9hZC9FazdGSm03ZE1EeEVnZURrc1ZwX21ud0JWdnotMmROWldOdE5xUVpzcVQzVElnP3J0aW1lPTdSbUh5enM4MkVn">
                                <Thanks>Welcome, please follow this link to brows the downloadable files
                            <AccessButton><img src={foldericon} alt="Dafo downloads" />Download Library</AccessButton>
                                </Thanks>

                            </FolderBox>
                        </DownloadsBox>
                    )}

            </DownloadsWrapper >
        </Color>
    )
}

/* const Wrapper = styled.main`
width: 100%;
height:100wh;
background:#1c1c1c;
background-color: #dcd8d8;
padding: 20px;
box-sizing: border-box;
div{
                    background:#ffff;
    padding:40px;
}
` */
const Color = styled.div`
background-color:#fff;
height:100vh;
margin-top: -38px;
display:flex;
align-content:center;
justify-items:center;
@media only screen and (min-width : 767px) {
 background-image: url(${DafoRedFlameFade});
    background-position: center;
background-repeat: no-repeat;
    background-size: contain;
}
`;

const DownloadsWrapper = styled.main`
/* background-image: url(${""}); */
background-position: center;
background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
margin-bottom: 40px;
margin: 0 auto;
width:90%;
max-width: 800px;
display:flex;
flex-direction: column;
align-content:center;
@media only screen and (min-width : 450px) {
  width:80%;
}

`;
const Main = styled.div`
display:flex;
margin: 0 auto;
flex-direction: column;
padding: 30px;
align-items: center;
background:#ffffff5c;
box-shadow: 0 0 35px 7px #fff;
-webkit-box-shadow: 0 0 5px 2px #fff;
    -moz-box-shadow: 0 0 5px 2px #fff;
    box-shadow: 0 0 35px 7px #fff;
    margin: 25px;
   /*  background-image: url(${DafoRedFlame});
    background-position: center;
background-repeat: no-repeat;
    background-size: contain; */
@media only screen and (min-width : 768px) {
    background-image:unset;
}
`
const FormBox = styled.section`
padding: 10px;
display:flex;
justify-content: center;
border: 1px solid #1c1c1c0f;
background: #fff;
box-shadow: 2px 2px 10px 2px rgb(207 204 204 / 70%);
@media only screen and (min-width : 400px) {
    width: 80%;
}
@media only screen and (min-width : 990px) {
  max-width: 550px;
}
`;

const IntroDiv = styled.div`

p{
    width:90%;
    max-width:250px;
    margin: 10px 10px 40px 15px;
    background: #ffffff5c;
    border-radius: 5px;
}
h2{
    margin: 0 auto;
    color: white;
    background:#1c1c1c;
    width: max-content;
    
    text-align: center;
    padding: 5px;
    max-width: 250px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    margin-block-start: 0;
    @media (min-width:676px){
        padding-bottom: 5px;
        max-width:250px;
        width: 90%;
}}
`;

const Form = styled.form`
width:100%;
div{
    display: flex;
    flex-wrap: wrap;
    line-height:1rem;
    flex-direction: column;
}
label{
    display:flex;
    width: 110px;
    margin-top: 15px;
}
input{
    border: none;
    background: lightgray;
    height: 2rem;
    text-transform: uppercase;
    padding-left: 5px;
}
input.button{
    margin: 15px; 
}
`
const DownloadsBox = styled.section`
width:auto;
margin: 30px;
`;
const FolderBox = styled.a`
background-image: url(${foldericon});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
text-decoration:none;
color:#1c1c1c;
`;

const AccessButton = styled.button`
width: 6.2rem;
height:5.5rem;
margin:15px;
img{
    height: 30px;
}
`;
const Thanks = styled.h2`
padding: 30px;
margin: 0 auto;
    border: 1px solid #1c1c1c0f;
    box-shadow: 2px 2px 10px 2px rgb(207 204 204 / 70%);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction:column;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 50px 0;
    height:300px;
    width: 70%;
    max-width: 500px;
    margin: 0 auto;
    @media(min-width:676px){
    flex-direction:row;
    height:200px;
}
`;