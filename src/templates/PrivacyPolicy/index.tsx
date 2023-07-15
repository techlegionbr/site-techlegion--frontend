import HorizontalLine from "@/components/HorizontalLine"
import HeadTemplate from "@/components/SEO/Head"
import { Layout } from "@/patterns/Layout"

import { MainSection } from "./sections"


const PrivacyPolicy = (): JSX.Element => {
  return (
    <>
      <HeadTemplate
        title="Política de Privacidade - Tech Legion"
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

export default PrivacyPolicy