import React from "react"
import { graphql } from 'gatsby'

import { FlexibleContentProps } from "../../interfaces"

export interface CarouselProps extends FlexibleContentProps {
  carouselTitle?: string
  carouselText?: string
  carouselBackgroundColor?: string
  carouselButton?: {
    target?: string
    title?: string
    url?: string
  }
  carouselCard?: []
}

const Carousel: React.FC<CarouselProps> = props => {
  const {
    title,
    // uri,
    // slug,
    // carouselTitle,
    // carouselText,
    // carouselBackgroundColor,
    // carouselButton,
    // carouselCard,
  } = props

  return (
    <>
      <h1>CAROUSEL</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default Carousel

export const fragment = graphql`
  fragment Carousel on WpDefaultTemplate_Flexiblecontent_ContentBlocks {
    ... on WpDefaultTemplate_Flexiblecontent_ContentBlocks_Carousel {
      fieldGroupName
      carouselTitle
      carouselText
      carouselBackgroundColor
      carouselButton {
        target
        title
        url
      }
      carouselCard {
        title
      }
    }
  }
`
