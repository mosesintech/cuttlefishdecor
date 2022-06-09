import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Parser from "html-react-parser"

import { ArticleItem } from "../../interfaces"
import Layout from "../../components/Layout/Layout"
import Edges from "../../components/Layout/Edges"

const PostArchive = (props: any) => {
  const {
    data: {
      page: {
        title,
        template: {
          flexibleContentModules: { contentModule },
        },
      },
      posts: { nodes: allPosts },
    },
  } = props
  const heroSection = contentModule[0]

  return (
    <>
      <Layout title={title}>
        <Edges size="lg">
          <div className="bg-white">
            <div className="max-w-7xl mx-auto pt-10 px-4 sm:pt-24 sm:px-6 md:px-8">
              <div className="text-center">
                {title && (
                  <h1
                    className="text-base font-semibold text-indigo-600 tracking-wide uppercase"
                    children={heroSection.heroTitle}
                  />
                )}
                {heroSection.heroText && (
                  <p
                    className="mt-1 text-4xl font-extrabold text-gray-900 sm:tracking-tight sm:text-[25px]"
                    children={heroSection.heroText}
                  />
                )}
              </div>
            </div>
          </div>

          {allPosts &&
            allPosts.map((post: ArticleItem) => {
              const image =
                post?.archiveThumbnail?.node?.localFile &&
                getImage(post.archiveThumbnail.node.localFile)

              return (
                <>
                  <div className="relative bg-white pt-10 sm:pt-24">
                    <div className="md:mx-auto md:max-w-7xl md:px-8 md:grid md:grid-cols-2 md:gap-24 md:items-start">
                      <div className="relative sm:pt-10 md:pt-0">
                        <div
                          aria-hidden="true"
                          className="hidden sm:block md:absolute md:inset-y-0 md:right-0 md:w-screen"
                        >
                          <svg
                            className="absolute top-8 left-1/2 -ml-3 md:-right-8 md:left-auto md:top-12"
                            width={404}
                            height={392}
                            fill="none"
                            viewBox="0 0 404 392"
                          >
                            <defs>
                              <pattern
                                id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
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
                              height={392}
                              fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                            />
                          </svg>
                        </div>
                        <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                          <figure>
                            <div className="aspect-w-12 aspect-h-7 md:aspect-none">
                              {image && (
                                <GatsbyImage
                                  image={image}
                                  alt={
                                    post?.archiveThumbnail?.node?.altText || ""
                                  }
                                  className="rounded-lg shadow-lg object-cover object-center"
                                />
                              )}
                            </div>
                          </figure>
                        </div>
                      </div>

                      <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 md:px-0">
                        <div className="pt-10 sm:pt-10 md:pt-20">
                          {post.title && (
                            <Link to={`${post.uri}`}>
                              <h2
                                children={post.title}
                                className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl"
                              />
                            </Link>
                          )}
                          {post.categories && (
                            <p className="text-sm font-medium pt-5">
                              {post.categories &&
                                post.categories.nodes.map(
                                  (
                                    cat: { name: string; uri: string },
                                    i: number
                                  ) => {
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
                          {post.excerpt && (
                            <div
                              className="mt-6 text-gray-500 space-y-6"
                              children={Parser(post.excerpt)}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
        </Edges>
      </Layout>
    </>
  )
}

export default PostArchive

export const pageQuery = graphql`
  query WordPressPostsArchive(
    $id: String!
    $postsPerPage: Int!
    $offset: Int!
  ) {
    page: wpPage(id: { eq: $id }) {
      title
      content
      uri
      template {
        ... on WpDefaultTemplate {
          ...DefaultTemplateFragment
        }
      }
    }

    posts: allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        ...PostFragment
      }
    }
    categories: allWpCategory {
      nodes {
        ...PostCategory
      }
    }
  }
`
