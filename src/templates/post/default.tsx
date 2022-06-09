import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Parser from "html-react-parser"

import Edges from "../../components/Layout/Edges"
import Layout from "../../components/Layout/Layout"

export default function DefaultPostTemplate(props: any) {
  const {
    data: {
      wpPost: { title, content, featuredImage, categories },
    },
    pageContext: { archivePath },
  } = props
  const image =
    featuredImage?.node?.localFile && getImage(featuredImage.node.localFile)

  return (
    <Layout title={title} archivePath={archivePath}>
      <Edges size="lg">
        <div className="relative py-16 bg-white overflow-hidden">
          <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
            <div
              className="relative h-full text-lg max-w-prose mx-auto"
              aria-hidden="true"
            >
              <svg
                className="absolute top-12 left-full transform translate-x-32"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
                />
              </svg>
              <svg
                className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                />
              </svg>
              <svg
                className="absolute bottom-12 left-full transform translate-x-32"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="d3eb07ae-5182-43e6-857d-35c643af9034"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
                />
              </svg>
            </div>
          </div>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mx-auto">
              <h1>
                <span
                  className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                  children={title}
                />
              </h1>
              <p className="mt-8 text-xl text-gray-500 leading-8">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                id at vitae feugiat egestas ac. Diam nulla orci at in viverra
                scelerisque eget. Eleifend egestas fringilla sapien.
              </p>
              {image && (
                <GatsbyImage
                  image={image}
                  alt={featuredImage?.node?.altText || ""}
                  className="rounded-lg shadow-lg object-cover object-center"
                />
              )}
              {categories && (
                <p className="text-sm font-medium pt-5">
                  {categories &&
                    categories.nodes.map(
                      (cat: { name: string; uri: string }, i: number) => {
                        return (
                          <Link
                            to={cat.uri}
                            className={`${
                              i === 0 ? "" : "ml-[5px]"
                            } text-indigo-600 hover:text-indigo-600`}
                            children={cat.name}
                          />
                        )
                      }
                    )}
                </p>
              )}
            </div>
            <div
              className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto"
              children={Parser(content)}
            />
          </div>
        </div>
      </Edges>
    </Layout>
  )
}

export const PostSingleQuery = graphql`
  query Post($id: String!) {
    wpPost(id: { eq: $id }) {
      ...PostFragment
    }
    posts: allWpPost {
      nodes {
        ...PostFragment
      }
    }
  }
`
