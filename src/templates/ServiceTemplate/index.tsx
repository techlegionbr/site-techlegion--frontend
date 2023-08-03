



import CustomHead from "@/components/CustomHead"
import HorizontalLine from "@/components/HorizontalLine"
import { Layout } from "@/patterns/Layout"
import { Section } from "@/patterns/Section"

import { AnyQuestionsSection, InfosSection, MainSection } from "./sections"
import { type TypeService } from "./types"


interface PropsService {
  service: TypeService,
  SectionPlans?: () => JSX.Element
}

const ServiceTemplate = ({ service, SectionPlans }: PropsService): JSX.Element => {
  return (
    <>
      <CustomHead
        title={`${service.name} - Tech Legion`}
        description="A Tech Legion é uma empresa de prestação de serviços, desenvolvimento de site, lading page, ecommerce, aplicativo, design gráfico e muito mais."
        robots={["index", "follow", "max-image-preview:large", "max-snippet:-1", "max-video-preview:-1"]}
      />
      <Layout.Header />
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
      <AnyQuestionsSection bgColor={SectionPlans ? "bluishGray" : "primary"} />
      <HorizontalLine />
      {
        SectionPlans && (
          <>
            <Section.Divider bgColor="primary" />
            <HorizontalLine />
          </>
        )
      }
      <Layout.Footer />
    </>
  )
}

export default ServiceTemplate