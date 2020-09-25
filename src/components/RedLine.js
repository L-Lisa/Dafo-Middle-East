import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";


export const RedLine = () => {

    return (
        <Red></Red>
    )
}

const Red = styled.span`
width: 50px;
    height: 2px;
    background: red;
    align-self: center;
    margin: 2px 5px 2px 2px;

`;