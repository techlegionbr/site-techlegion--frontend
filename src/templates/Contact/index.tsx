import ButtonToTop from "@/components/ButtonToTop"
import HorizontalLine from "@/components/HorizontalLine"
import Footer from "@/patterns/layout/Footer"
import Header from "@/patterns/layout/Header"

import { MainSection } from "./sections"
import Faq from "./sections/Faq"


const Contact = (): JSX.Element => {
  return (
    <>
      <ButtonToTop />
      <Header />
      <MainSection />
      <HorizontalLine />
      <Faq />
      <HorizontalLine />
      <Footer />
    </>
  )
}

export default Contact