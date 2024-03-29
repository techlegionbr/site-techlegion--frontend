

import CustomHead from "@/components/CustomHead"
import HorizontalLine from "@/components/HorizontalLine"
import { Layout } from "@/patterns/Layout"
import { Section } from "@/patterns/Section"

import {
  MainSection,
  ServicesSection,
  BenefitsSection,
  AboutSection,
  StrikingPhraseSection,
  PrinciplesSection,
  ContactFormSection,
  ClientsSection,
} from "./sections"



const HomeTemplate = (): JSX.Element => {
  return (
    <>
      <CustomHead
        title="Tech Legion - Uma legião ao seu lado"
        description="A Tech Legion é uma empresa de prestação de serviços, desenvolvimento de site, lading page, ecommerce, aplicativo, design gráfico e muito mais."
        robots={["index", "follow", "max-image-preview:large", "max-snippet:-1", "max-video-preview:-1"]}
      />
      <Layout.Header />
      <MainSection />
      <HorizontalLine />
      <ServicesSection />
      <HorizontalLine />
      <BenefitsSection />
      <HorizontalLine />
      <AboutSection />
      <HorizontalLine />
      <StrikingPhraseSection />
      <HorizontalLine />
      <PrinciplesSection />
      <HorizontalLine />
      <ClientsSection />
      <HorizontalLine />
      <ContactFormSection />
      <HorizontalLine />
      <Section.Divider bgColor="primary" />
      <HorizontalLine />
      <Layout.Footer />

    </>
  )
}

export default HomeTemplate