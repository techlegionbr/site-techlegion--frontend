import ButtonToTop from "@/components/ButtonToTop"
import HorizontalLine from "@/components/HorizontalLine"
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
      <HorizontalLine />
      <ServiceFlexSection />
      <HorizontalLine />
      <ValuesSection />
      <HorizontalLine />
      <VolunteersSection />
      <HorizontalLine />
      <YourMomentSection />
      <HorizontalLine />
      <Footer />
    </>
  )
}

export default About