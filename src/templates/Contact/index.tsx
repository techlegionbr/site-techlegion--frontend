import ButtonToTop from "@/components/ButtonToTop"
import HorizontalLine from "@/components/HorizontalLine"
import HeadTemplate from "@/components/SEO/Head"
import Footer from "@/patterns/layout/Footer"
import Header from "@/patterns/layout/Header"
import SectionDivider from "@/patterns/sections/Divider"

import { MainSection } from "./sections"
import Faq from "./sections/Faq"


const Contact = (): JSX.Element => {
  return (
    <>
      <HeadTemplate
        title="Contato - Tech Legion"
        description="A Tech Legion é uma empresa de prestação de serviços, desenvolvimento de site, lading page, ecommerce, aplicativo, design gráfico e muito mais."
        robots={["index", "follow", "max-image-preview:large", "max-snippet:-1", "max-video-preview:-1"]}
      />
      <ButtonToTop />
      <Header />
      <MainSection />
      <HorizontalLine />
      <Faq />
      <HorizontalLine />
      <SectionDivider bgColor="primary" />
      <HorizontalLine />
      <Footer />
    </>
  )
}

export default Contact