import React from "react"
import { graphql } from 'gatsby'

import { FlexibleContentProps } from "../../interfaces"

export interface LocationProps extends FlexibleContentProps {
  locationTitle?: string
  locationText?: string
  locationBackgroundColor?: string
  locationButton?: {
    target?: string
    title?: string
    url?: string
  }
  locationMap?: string
  locationAddress?: string
  locationPhoneNumber?: string
  locationHours?: string
}

const Location: React.FC<LocationProps> = props => {
  return (
    <>
      <h1>LOCATION</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default Location

export const fragment = graphql`
  fragment Location on WpDefaultTemplate_Flexiblecontent_ContentBlocks {
    ... on WpDefaultTemplate_Flexiblecontent_ContentBlocks_Location {
      fieldGroupName
      locationTitle
      locationText
      locationBackgroundColor
    }
  }
`
