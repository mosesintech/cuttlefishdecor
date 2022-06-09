import React from "react"
import parse from 'html-react-parser'

import Carousel, { CarouselProps } from "./Carousel"
import Form, { FormProps } from "./Form"
import Hero, { HeroProps } from "./Hero"
import LatestArticles, { LatestArticlesProps } from "./LatestArticles"
import LinkBoxes, { LinkBoxesProps } from "./LinkBoxes"
import Location, { LocationProps } from "./Location"
import TextBlock, { TextBlockProps } from "./TextBlock"
import TextImage, { TextImageProps } from "./TextImage"
import ThreeColumns, { ThreeColumnsProps } from "./ThreeColumns"

interface Components {
  Carousel: React.FC<CarouselProps>
  Form: React.FC<FormProps>
  Hero: React.FC<HeroProps>
  LatestArticles: React.FC<LatestArticlesProps>
  LinkBoxes: React.FC<LinkBoxesProps>
  Location: React.FC<LocationProps>
  TextBlock: React.FC<TextBlockProps>
  TextImage: React.FC<TextImageProps>
  ThreeColumns: React.FC<ThreeColumnsProps>
}

interface Props {
  modules?: any
  data?: {
    title?: string
    uri?: string
    slug?: string
    content?: string
  }
}

const components: Components = {
  Carousel,
  Form,
  Hero,
  LatestArticles,
  LinkBoxes,
  Location,
  TextBlock,
  TextImage,
  ThreeColumns
}

const FlexibleContent: React.FC<Props> = props => {
  const { modules, data } = props

  if (!!modules) {
    return modules
      .filter((module: any) => !!module)
      .map((module: any, index: any) => {
        const { fieldGroupName } = module
        if (!fieldGroupName) {
          return null
        }

        const type: keyof Components = fieldGroupName.split("_").slice(-1)[0]

        const Component = components[type]

        return (
          Component && (
            <div key={index}>
              <Component {...module} {...data} />
            </div>
          )
        )
      })
  }
  return (
    <>
      {data.content && (<p>{parse(data.content)}</p>)}
    </>
  )
}

export default FlexibleContent