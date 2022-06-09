import React from "react"
import { graphql } from 'gatsby'

import { FlexibleContentProps } from "../../interfaces"

export interface ThreeColumnsProps extends FlexibleContentProps {
  threeColumnsTitle?: string
  threeColumnsText?: string
  threeColumnsBackgroundColor?: string
  threeColumnsButton?: {
    target?: string
    title?: string
    url?: string
  }
  columns?: [
    {
      title?: string
      text?: string
      link?: {
        target?: string
        title?: string
        url?: string
      }
      image?: {}
      icon?: string
    },
    {
      title?: string
      text?: string
      link?: {
        target?: string
        title?: string
        url?: string
      }
      image?: {}
      icon?: string
    },
    {
      title?: string
      text?: string
      link?: {
        target?: string
        title?: string
        url?: string
      }
      image?: {}
      icon?: string
    }
  ]
}

const ThreeColumns: React.FC<ThreeColumnsProps> = props => {
  return (
    <>
      <h1>THREE COLUMNS</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default ThreeColumns

export const fragment = graphql`
  fragment ThreeColumns on WpDefaultTemplate_Flexiblecontent_ContentBlocks {
    ... on WpDefaultTemplate_Flexiblecontent_ContentBlocks_ThreeColumns {
      fieldGroupName
      threeColumnsTitle
      threeColumnsText
      threeColumnsBackgroundColor
      threeColumnsButton {
        target
        title
        url
      }
      columns {
        title
        text
        link {
          target
          title
          url
        }
        image {
          altText
        }
        icon
      }
    }
  }
`
