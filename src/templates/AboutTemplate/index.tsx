import CustomHead from "@/components/CustomHead"
import HorizontalLine from "@/components/HorizontalLine"
import { Layout } from "@/patterns/Layout"

import { MainSection, ServiceFlexSection, ValuesSection, VolunteersSection, YourMomentSection } from "./sections"

const AboutTemplate
  = (): JSX.Element => {
    return (
      <>
        <CustomHead
          title="Sobre - Tech Legion"
          description="A Tech Legion é uma empresa de prestação de serviços, desenvolvimento de site, lading page, ecommerce, aplicativo, design gráfico e muito mais."
          robots={["index", "follow", "max-image-preview:large", "max-snippet:-1", "max-video-preview:-1"]}
        />
        <Layout.Header />
        <MainSection />
        <HorizontalLine />
        <ServiceFlexSection />
        <HorizontalLine />
        <ValuesSection />
        <HorizontalLine />
        <VolunteersSection />
        <HorizontalLine />
        <YourMomentSection />
        <HorizontalLine />
        <Layout.Footer />
      </>
    )
  }

export default AboutTemplate
