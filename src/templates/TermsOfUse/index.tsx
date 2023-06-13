
import ButtonToTop from "@/components/ButtonToTop"
import HorizontalLine from "@/components/HorizontalLine"
import HeadTemplate from "@/components/SEO/Head"
import Footer from "@/patterns/layout/Footer"
import Header from "@/patterns/layout/Header"

import { MainSection } from "./sections"


const TermsOfUse = (): JSX.Element => {
  return (
    <>
      <HeadTemplate
        title="Termos de Uso - Tech Legion"
        description="A Tech Legion é uma empresa de prestação de serviços, desenvolvimento de site, lading page, ecommerce, aplicativo, design gráfico e muito mais."
        robots={["index", "follow", "max-image-preview:large", "max-snippet:-1", "max-video-preview:-1"]}
      />
      <ButtonToTop />
      <Header />
      <MainSection />
      <HorizontalLine />
      <Footer />
    </>
  )
}

export default TermsOfUse