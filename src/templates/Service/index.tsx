


import ButtonToTop from "@/components/ButtonToTop"
import HorizontalLine from "@/components/HorizontalLine"
import HeadTemplate from "@/components/SEO/Head"
import Footer from "@/patterns/layout/Footer"
import Header from "@/patterns/layout/Header"

import { AnyQuestionsSection, InfosSection, MainSection } from "./sections"
import { type TypeService } from "./types"


interface PropsService {
  service: TypeService,
  SectionPlans?: () => JSX.Element
}

const Service = ({ service, SectionPlans }: PropsService): JSX.Element => {
  return (
    <>
      <HeadTemplate
        title={`${service.name} - Tech Legion`}
        description="A Tech Legion é uma empresa de prestação de serviços, desenvolvimento de site, lading page, ecommerce, aplicativo, design gráfico e muito mais."
        robots={["index", "follow", "max-image-preview:large", "max-snippet:-1", "max-video-preview:-1"]}
      />
      <Header />
      <ButtonToTop />
      <MainSection service={{
        image: service.image,
        name: service.name,
        icon: service.icon
      }} />
      <HorizontalLine />
      <InfosSection service={{
        benefits: service.benefits,
        commonQuestions: service.commonQuestions,
        introduction: service.introduction,
        value: service.value
      }} />
      <HorizontalLine />
      {SectionPlans && (
        <>
          <SectionPlans />
          <HorizontalLine />
        </>
      )}
      <AnyQuestionsSection />
      <HorizontalLine />
      <Footer />
    </>
  )
}

export default Service