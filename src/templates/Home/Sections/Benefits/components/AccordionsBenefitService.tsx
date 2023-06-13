import { useMemo, useState } from "react"

import * as S from "../styles"
import { type TypeBenefit } from "../types"

type TypeBenefitParam = [
  service: string,
  show: boolean
]


interface PropsCardBenefitService {
  benefit: TypeBenefit
  showDescription: boolean,
  onClick: (benefit: TypeBenefitParam) => void
}

const CardBenefitService = ({ benefit, showDescription, onClick }: PropsCardBenefitService): JSX.Element => {
  const { description, icon, service } = benefit

  const handleShowDescription = (): void => {
    onClick([benefit.service, showDescription])
  }


  return (
    <S.CardBenefitService
      showDescription={showDescription ? "true" : "false"}
      onClick={handleShowDescription}
    >
      <div className="column-icon">
        <div className="square-icon">
          {icon}
        </div>
      </div>
      <div className="benefit-content">
        <div className="title-benefit">
          <h4>{service}</h4>
          <span className="watch-more"></span>
        </div>
        <div className="description-benefit">
          <p>
            {description}
          </p>
        </div>
      </div>
    </S.CardBenefitService>
  )
}

interface PropsAccordionsBenefitService {
  benefits: TypeBenefit[]
}

const AccordionsBenefitService = ({ benefits }: PropsAccordionsBenefitService): JSX.Element => {
  const benefitsStatus = useMemo(() => {
    const benefitsMapEntries = benefits.map((benefit) => (
      [benefit.service, false]
    ))
    return Object.fromEntries(benefitsMapEntries)
  }, [benefits])

  const [accordionsStatus, setAccordionsStatus] = useState(benefitsStatus)
  const handleClickAccordions = ([service, show]: TypeBenefitParam): void => {
    setAccordionsStatus((prevAccStatus: any) => {
      const accordionsClose = Object.entries(prevAccStatus).map(([service]) => [service, false])
      return {
        ...accordionsClose, [service]: !show
      }
    })
  }
  return (
    <S.AccordionsBenefitService>
      {
        benefits.map(({ description, icon, service }) => (
          <CardBenefitService
            showDescription={accordionsStatus[service]}
            key={service}
            onClick={handleClickAccordions}
            benefit={{
              description,
              icon,
              service
            }} />
        ))
      }
    </S.AccordionsBenefitService>
  )
}

export default AccordionsBenefitService