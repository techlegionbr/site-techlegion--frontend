import ButtonToTop from "@/components/ButtonToTop"
import Footer from "@/patterns/layout/Footer"
import Header from "@/patterns/layout/Header"

import Head from "next/head"

import { MainSection, ServiceFlexSection, ValuesSection, VolunteersSection, YourMomentSection } from "../About/sections"

const About = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Sobre</title>
      </Head>
      <Header />
      <ButtonToTop />
      <MainSection />
      <ServiceFlexSection />
      <ValuesSection />
      <VolunteersSection />
      <YourMomentSection />
      <Footer />
    </>
  )
}

export default About