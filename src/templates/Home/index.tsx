
import ButtonToTop from "@/components/ButtonToTop"
import HorizontalLine from "@/components/HorizontalLine"
import Footer from "@/patterns/layout/Footer"
import Header from "@/patterns/layout/Header"

import Head from "next/head"

import {
  MainSection,
  ServicesSection,
  BenefitsSection,
  AboutSection,
  StrikingPhraseSection,
  PrinciplesSection,
  ContactFormSection
} from "./sections"



const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Tech Legion</title>
      </Head>
      <ButtonToTop />
      <Header />
      <MainSection />
      <HorizontalLine />
      <ServicesSection />
      <HorizontalLine />
      <BenefitsSection />
      <HorizontalLine />
      <AboutSection />
      <HorizontalLine />
      <StrikingPhraseSection />
      <HorizontalLine />
      <PrinciplesSection />
      <HorizontalLine />
      <ContactFormSection />
      <HorizontalLine />
      <Footer />
    </>
  )
}

export default Home