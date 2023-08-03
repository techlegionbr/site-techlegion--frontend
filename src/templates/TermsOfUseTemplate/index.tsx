

import CustomHead from "@/components/CustomHead"
import HorizontalLine from "@/components/HorizontalLine"
import { Layout } from "@/patterns/Layout"

import { MainSection } from "./sections"


const TermsOfUseTemplate = (): JSX.Element => {
  return (
    <>
      <CustomHead
        title="Termos de Uso - Tech Legion"
        description="A Tech Legion é uma empresa de prestação de serviços, desenvolvimento de site, lading page, ecommerce, aplicativo, design gráfico e muito mais."
        robots={["index", "follow", "max-image-preview:large", "max-snippet:-1", "max-video-preview:-1"]}
      />
      <Layout.Header />
      <MainSection />
      <HorizontalLine />
      <Layout.Footer />
    </>
  )
}

export default TermsOfUseTemplate