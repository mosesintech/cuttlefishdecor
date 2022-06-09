import { PageProps } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"

interface ArticleItem {
  title: string
  excerpt: string
  uri: string
  categories: { nodes: any }
  thumbnail: {
    node: { localFile: IGatsbyImageData; altText: string }
  }
  archiveThumbnail: {
    node: { localFile: IGatsbyImageData; altText: string }
  }
}

interface FlexibleContentProps extends PageProps {
  title?: string
  slug?: string
}

interface TemplatePageProps extends PageProps {
  data: {
    page: {
      title?: string
      uri?: string
      slug?: string
      template?: any
    }
  }
}

export { ArticleItem, FlexibleContentProps, TemplatePageProps }
