import { graphql } from "gatsby"

export const defaultFragment = graphql`
  fragment DefaultTemplateFragment on WpDefaultTemplate {
    templateName
    flexibleContent {
      contentBlocks {
        ...Carousel
        ...Form
        ...Hero
        ...LatestArticles
        ...LinkBoxes
        ...Location
        ...TextBlock
        ...TextImage
        ...ThreeColumns
      }
    }
  }
`
