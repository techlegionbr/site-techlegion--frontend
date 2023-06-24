import ButtonToTop from "@/components/ButtonToTop"
import HorizontalLine from "@/components/HorizontalLine"
import HeadTemplate from "@/components/SEO/Head"
import Footer from "@/patterns/layout/Footer"
import Header from "@/patterns/layout/Header"

import { BenefitsSection, ContactFormSection, MainSection, ManageTeamSection, SelectKommoSection } from "./sections"



const SellMore = (): JSX.Element => {
  return (
    <>
      <HeadTemplate
        title="Venda Mais - Tech Legion"
        robots={["index", "follow", "max-image-preview:large", "max-snippet:-1", "max-video-preview:-1"]}
      />
      <ButtonToTop />
      <Header />
      <MainSection />
      <HorizontalLine />
      <BenefitsSection />
      <HorizontalLine />
      <SelectKommoSection />
      <HorizontalLine />
      <ManageTeamSection />
      <HorizontalLine />
      <ContactFormSection />
      <HorizontalLine />
      <Footer />
    </>
  )
}


export default SellMore