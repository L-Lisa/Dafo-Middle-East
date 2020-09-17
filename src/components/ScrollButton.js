import React, { useState } from 'react'
import styled from "styled-components/macro"
/* import PropTypes from 'prop-types'; */



export const ScrollButton = () => {
    const [section, setSection] = useState("top")


    return (

        <Container >
            <Button onClick={e => setSection("top")}></Button>
            <Button onClick={e => setSection("sectionMid")}></Button>
            <Button onClick={e => setSection("sectionEnd")}></Button>
        </Container>
    )
}

const Container = styled.div`
width:20px;
height:50px;
z-index:200;
`;

const Button = styled.button`
height:9px;
width:9px;
border-radius:50px;
`;