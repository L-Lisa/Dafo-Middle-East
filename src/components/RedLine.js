import React from "react";
import styled from "styled-components/macro";

const Red = styled.span`
width:${(props) => (props.width ? props.width : "50px")};
height: 4px;
background: #ee0201;
align-self: center;
margin: 2px 5px 2px 2px;
display: inline-block;
`;

export const RedLine = () => {
    return (
        <Red></Red>
    )
}

