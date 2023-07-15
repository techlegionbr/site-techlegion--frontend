import HorizontalLine from "@/components/HorizontalLine"
import HeadTemplate from "@/components/SEO/Head"
import { Layout } from "@/patterns/Layout"
import { Section } from "@/patterns/Section"

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
      <Layout.Header />
      <MainSection />
      <HorizontalLine />
      <Faq />
      <HorizontalLine />
      <Section.Divider bgColor="primary" />
      <HorizontalLine />
      <Layout.Footer />
    </>
  )
}

export default Contact