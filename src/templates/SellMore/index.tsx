import HorizontalLine from "@/components/HorizontalLine"
import HeadTemplate from "@/components/SEO/Head"
import { Layout } from "@/patterns/Layout"
import { Section } from "@/patterns/Section"

import { BenefitsSection, ContactFormSection, KommoStampSection, MainSection, ManageTeamSection, SelectKommoSection } from "./sections"



const SellMore = (): JSX.Element => {
  return (
    <>
      <HeadTemplate
        title="Venda Mais - Tech Legion"
        robots={["index", "follow", "max-image-preview:large", "max-snippet:-1", "max-video-preview:-1"]}
      />
      <Layout.Header />
      <MainSection />
      <HorizontalLine />
      <BenefitsSection />
      <HorizontalLine />
      <SelectKommoSection />
      <HorizontalLine />
      <KommoStampSection />
      <HorizontalLine />
      <ManageTeamSection />
      <HorizontalLine />
      <ContactFormSection />
      <HorizontalLine />
      <Section.Divider bgColor="primary" />
      <HorizontalLine />
      <Layout.Footer />
    </>
  )
}


export default SellMore