import ButtonToTop from "@/components/ButtonToTop"
import Footer from "@/patterns/layout/Footer"
import Header from "@/patterns/layout/Header"

import { MainSection, ServiceFlexSection, ValuesSection, VolunteersSection } from "../About/Sections"

const About = (): JSX.Element => {
  return (
    <>
      <Header />
      <ButtonToTop />
      <MainSection />
      <ServiceFlexSection />
      <ValuesSection />
      <VolunteersSection />
      <Footer />
    </>
  )
}

export default About