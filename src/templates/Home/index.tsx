

import HorizontalLine from "@/components/HorizontalLine"
import HeadTemplate from "@/components/SEO/Head"
import { Layout } from "@/patterns/Layout"

import {
  MainSection,
  ServicesSection,
  BenefitsSection,
  AboutSection,
  StrikingPhraseSection,
  PrinciplesSection,
  ContactFormSection
} from "./sections"



const Home = (): JSX.Element => {
  return (
    <>
      <HeadTemplate
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
      <ContactFormSection />
      <HorizontalLine />
      <Layout.Footer />

    </>
  )
}

export default Home