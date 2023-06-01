import ButtonToTop from "@/components/ButtonToTop"
import Footer from "@/patterns/layout/Footer"
import Header from "@/patterns/layout/Header"

import { MainSection } from "./sections"


const Services = (): JSX.Element => {
  return (
    <>
      <ButtonToTop />
      <Header />
      <MainSection />
      <Footer />
    </>
  )
}

export default Services