import { useMemo, useState } from "react"

import * as S from "../styles"

type TypeBenefitParam = [
  service: string,
  show: boolean
]

interface PropsCardBenefitService {
  benefit: {
    service: string,
    description: string,
    icon: React.ReactNode,
  }
  showDescription: boolean,
  onClick: (benefit: TypeBenefitParam) => void
}

const CardBenefitService = ({ benefit, showDescription, onClick }: PropsCardBenefitService): JSX.Element => {
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
          {benefit.icon}
        </div>
      </div>
      <div className="benefit-content">
        <div className="title-benefit">
          <h4>{benefit.service}</h4>
          <span className="watch-more">
            <i className='bx bx-chevrons-up'></i>
          </span>
        </div>
        <div className="description-benefit">
          <p>
            {benefit.description}
          </p>
        </div>
      </div>
    </S.CardBenefitService>
  )
}

interface TypeBenefits {
  icon: React.ReactNode,
  service: string,
  description: string
}

interface PropsAccordionsBenefitService {
  benefits: TypeBenefits[]
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