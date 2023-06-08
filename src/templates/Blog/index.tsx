import HorizontalLine from "@/components/HorizontalLine"
import Footer from "@/patterns/layout/Footer"
import Header from "@/patterns/layout/Header"

import { MainSection } from "./sections"

const Blog = (): JSX.Element => {
  return (
    <>
      <Header />
      <MainSection />
      <HorizontalLine />
      <Footer />
    </>
  )
}

export default Blog