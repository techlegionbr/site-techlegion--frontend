import ButtonToTop from "@/components/ButtonToTop"
import HorizontalLine from "@/components/HorizontalLine"
import Footer from "@/patterns/layout/Footer"
import Header from "@/patterns/layout/Header"

import { MainSection } from "./sections"


const Services = (): JSX.Element => {
  return (
    <>
      <ButtonToTop />
      <Header />
      <MainSection />
      <HorizontalLine />
      <Footer />
    </>
  )
}

export default Services