/* import React, { useState } from "react"
import styled from 'styled-components/macro'
import { Mailinglist } from "../components/Mailinglist"
import foldericon from "../images/foldericon.jpg"
import DafoRedFlame from "../images/DafoRedFlame.jpg"


export const Certifications = () => {

    const [email, setEmail] = useState("");
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [showInfo, setShowInfo] = useState(false)

    const handleSubmit = event => {
        event.preventDefault();

    };

    return (
        <DownloadsWrapper>
            {!showInfo ? (
                <Main>
                    <IntroDiv>
                        <h2>Certificates</h2> <p>Enter your details here to proceed to the Certifications document.</p>
                    </IntroDiv>
                    <FormBox>
                        <div id="mc_embed_signup">
                            <Form action="https://gmail.us17.list-manage.com/subscribe/post-json?u=ddf4337f8aa288503ec5cf4fb&amp;id=2b430cfaa9&c=?"

                                method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate"
                                target="hiddenFrame" novalidate
                            >
                                <div id="mc_embed_signup_scroll">
                                    <div className="mc-field-group">
                                        <label htmlFor="mce-EMAIL">Email Address
                                    </label>
                                        <input
                                            value={email}
                                            type="email"
                                            required
                                            name="EMAIL"
                                            className="required email"
                                            id="mce-EMAIL"
                                            onChange={event => setEmail(event.target.value)}
                                        />
                                    </div>
                                    <div className="mc-field-group">
                                        <label htmlFor="mce-FNAME">First Name </label>
                                        <input
                                            type="text"
                                            required
                                            value={fName}
                                            name="FNAME"
                                            className=""
                                            id="mce-FNAME"
                                            onChange={event => setFName(event.target.value)}
                                        />
                                    </div>
                                    <div className="mc-field-group">
                                        <label htmlFor="mce-LNAME">Last Name </label>
                                        <input
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
                                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe"
                                                className="button"
                                            />

                                        </div></div>
                                </div>
                            </Form>
                            <iframe onLoad={() => setShowInfo(true)} name="hiddenFrame" src="about:blank" style={{ display: 'none' }}></iframe>
                        </div>
                    </FormBox>
                </Main>

            ) : (
                    <DownloadsBox>
                        <FolderBox href="https://dafomiddleeast.sharepoint.com/sites/download/Shared%20Documents/Forms/AllItems.aspx?originalPath=aHR0cHM6Ly9kYWZvbWlkZGxlZWFzdC5zaGFyZXBvaW50LmNvbS86Zjovcy9kb3dubG9hZC9FazdGSm03ZE1EeEVnZURrc1ZwX21ud0JWdnotMmROWldOdE5xUVpzcVQzVElnP3J0aW1lPTJ3Vjczd1pKMkVn&viewid=893a2d4f%2D1a2b%2D41c8%2D909a%2Ddfc7245a2d53&id=%2Fsites%2Fdownload%2FShared%20Documents%2FDafo%20files%2FCertifications">
                            <Thanks>Welcome, please follow this link to download the Certifications document<AccessButton><img src={foldericon} alt="Dafo downloads" />Certificates</AccessButton></Thanks>

                        </FolderBox>
                    </DownloadsBox>
                )}

        </DownloadsWrapper >
    )
}


const DownloadsWrapper = styled.main`
box-sizing:border-box;
background-image: url(${DafoRedFlame});
margin-bottom: 40px;
margin: 0 auto;
width:90%;
max-width: 800px;
display:flex;
flex-direction: column;
align-content:center;
background-position: center;
background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
@media only screen and (min-width : 450px) {
  width:80%;
}
`;
const Main = styled.div`
display:flex;
margin: 0 auto;
flex-direction: column;
align-items: center;
@media only screen and (min-width : 676px) {
  flex-direction: column;
}
`
const FormBox = styled.section`
display:flex;
justify-content: center;
border: 1px solid #1c1c1c0f;
background: #1c1c1cc4;
width:auto;
padding: 30px;
margin-bottom: 20px;
box-shadow: 2px 2px 10px 2px rgb(207 204 204 / 70%);
@media only screen and (min-width : 400px) {

}
@media only screen and (min-width : 990px) {
  max-width: 550px;
}
`;

const IntroDiv = styled.div`
align-self: baseline;
padding: 16px;
p{
    width: 90%;
    max-width: 250px;
    margin: 0 0px -17px 0px;
    background: #ffffffd1;
    padding: inherit;
}
h2{
    margin: 0 auto;
    color: white;
    background:#1c1c1c;
    width: max-content;
    width: 90%;
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
}}
`;

const Form = styled.form`
width:100%;
div{
    display: flex;
    flex-wrap: wrap;
    line-height:0.9em;
    flex-direction: column;
}
label{
    display:flex;
    width: auto;
    text-transform:uppercase;
    margin-top: 15px;
    color:#ffff;
    margin: 0 auto;
}
input{
    margin: 16px;
    padding:1rem;
}
input.button{
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
}
`;
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
`; */
