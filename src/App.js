import React from 'react'
import { Directions } from "components/Directions"
import TagManager from 'react-gtm-module'

// analytics?
const tagManagerArgs = {
  gtmId: 'G-4VK34CQH61'
}
TagManager.initialize(tagManagerArgs)

export const App = () => {
  // analytics
  window.dataLayer.push({
    event: 'pageview'
  });
  return (
    <Directions />
  )
}


