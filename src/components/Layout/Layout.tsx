import * as React from "react"

// import Seo from "../Seo"
import Header from "./Header"
import Footer from "./Footer"
// import "../../styles/index.css"

interface LayoutProps {
  children: React.ReactNode
  title?: string
  archivePath?: string
  isCategory?: boolean
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
}) => {
  return (
    <>
      {/* <Seo title={title} /> */}
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
