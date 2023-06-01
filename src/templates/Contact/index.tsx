import ButtonToTop from "@/components/ButtonToTop"
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
      <Faq />
      <Footer />
    </>
  )
}

export default Contact