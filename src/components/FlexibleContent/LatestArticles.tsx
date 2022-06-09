import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { FlexibleContentProps } from "../../interfaces"

export interface LatestArticlesProps extends FlexibleContentProps {
  latestArticlesTitle?: string
  latestArticlesText?: string
  latestArticlesPostType?: string
  latestArticlesPostLimit?: string
  latestArticlesBackgroundColor?: string
  latestArticlesButton?: {
    target?: string
    title?: string
    url?: string
  }
}

const LatestArticles: React.FC<LatestArticlesProps> = props => {
  const usePostData = () => {
    const { allWpPost } = useStaticQuery(
      graphql`
        query PostQuery {
          allWpPost {
            nodes {
              title
            }
          }
        }
      `
    )
    return { allWpPost }
  }
  const allPosts = usePostData()

  if (
    !!props.latestArticlesPostType &&
    props.latestArticlesPostType.toLowerCase() === "post"
  ) {
    return (
      <>
        <h1>LATEST ARTICLES</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
        <pre>{JSON.stringify(allPosts, null, 2)}</pre>
      </>
    )
  }

  return (
    <>
      <h1>LATEST ARTICLES</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default LatestArticles

export const fragment = graphql`
  fragment LatestArticles on WpDefaultTemplate_Flexiblecontent_ContentBlocks {
    ... on WpDefaultTemplate_Flexiblecontent_ContentBlocks_LatestArticles {
      fieldGroupName
      latestArticlesTitle
      latestArticlesText
      latestArticlesBackgroundColor
    }
  }
`
