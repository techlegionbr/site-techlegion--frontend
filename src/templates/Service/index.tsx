

import ButtonToTop from "@/components/ButtonToTop"
import Footer from "@/patterns/layout/Footer"
import Header from "@/patterns/layout/Header"

import { InfosSection, MainSection, PlansSection } from "./sections"
import { type TypeService } from "./types"


interface PropsService {
  service: TypeService
}

const Service = ({ service }: PropsService): JSX.Element => {
  return (
    <>
      <Header />
      <ButtonToTop />
      <MainSection service={{
        image: service.image,
        name: service.name,
        icon: service.icon
      }} />
      <InfosSection service={{
        benefits: service.benefits,
        commonQuestions: service.commonQuestions,
        introduction: service.introduction,
        value: service.value
      }} />
      <PlansSection />
      <Footer />
    </>
  )
}

export default Service