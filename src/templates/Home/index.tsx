
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
} from "./Sections"



const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Tech Legion</title>
      </Head>
      <Header />
      <MainSection />
      <ServicesSection />
      <BenefitsSection />
      <AboutSection />
      <StrikingPhraseSection />
      <PrinciplesSection />
      <ContactFormSection />
      <Footer />
    </>
  )
}

export default Home