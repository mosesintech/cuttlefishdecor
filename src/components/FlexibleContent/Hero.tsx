import React from "react"
import { graphql } from 'gatsby'

import { FlexibleContentProps } from "../../interfaces"

export interface HeroProps extends FlexibleContentProps {
  heroTitle?: string
  heroText?: string
  heroBackgroundColor?: string
  heroBackgroundVideo?: string
  heroBackgroundImage?: {}
  heroSingleImage?: {
    image?: {}
    location?: string
  }
  heroGallery?: []
  heroPrimaryButton?: {
    target?: string
    title?: string
    url?: string
  }
  heroSecondaryButton?: {
    target?: string
    title?: string
    url?: string
  }
}

const Hero: React.FC<HeroProps> = props => {
  return (
    <>
      <h1>HERO</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default Hero

export const fragment = graphql`
  fragment Hero on WpDefaultTemplate_Flexiblecontent_ContentBlocks {
    ... on WpDefaultTemplate_Flexiblecontent_ContentBlocks_Hero {
      fieldGroupName
      heroTitle
      heroText
      heroBackgroundColor
      heroBackgroundVideo
      heroBackgroundImage {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      heroGallery {
        altText
      }
    }
  }
`
