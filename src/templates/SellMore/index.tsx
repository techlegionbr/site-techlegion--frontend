import ButtonToTop from "@/components/ButtonToTop"
import HorizontalLine from "@/components/HorizontalLine"
import Footer from "@/patterns/layout/Footer"
import Header from "@/patterns/layout/Header"

import { BenefitsSection, ContactFormSection, MainSection, ManageTeamSection, SelectKommoSection } from "./sections"



const SellMore = (): JSX.Element => {
  return (
    <>
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