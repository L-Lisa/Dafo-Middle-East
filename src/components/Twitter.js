import React, { useState, useEffect } from "react";
import styled from 'styled-components/macro'
import { Timeline } from "react-twitter-widgets";

const TwitterBox = styled.div`
overflow: scroll;
margin: 0 auto;
width: inherit;
`;

export const TwitterFeed = () => {
        const [twitterLoaded, settwitterLoaded] = useState(false);
        useEffect(() => {
                if (twitterLoaded) {
                        const scrollingCss =
                                " div.timeline-Viewport {overflow: hidden;} div.timeline-Viewport ol {position:relative; top:0;animation: scroll 120s linear 0.5s infinite;} @keyframes scroll {95% { top: -1000%; } 100%{top:0;}}";
                        const iframes = document.querySelectorAll("[id^=twitter-widget]");
                        for (let index = 0; index < iframes.length; index++) {
                                const iframe = iframes[index];
                                const innerDoc =
                                        iframe.contentDocument || iframe.contentWindow.document;
                                const styleElement = document.createElement("style");
                                styleElement.innerText = scrollingCss;
                                innerDoc.head.appendChild(styleElement);
                        }
                }
        }, [twitterLoaded]);
        return (
                <TwitterBox>
                        <Timeline
                                renderError={(_err) => <p>Could not load Twitter</p>}
                                dataSource={{
                                        sourceType: "profile",
                                        screenName: "Dafovehicle",
                                        width: "100%",
                                }}
                                options={{
                                        height: "700",
                                }}
                                onLoad={() => settwitterLoaded(true)}
                        />
                </TwitterBox>
        )
}


