
import { useState } from "react"

import * as S from "./styles"
import { type TypeAccoridion } from "./types"


interface PropsAccordion {
  accordion: TypeAccoridion,
  show: boolean,
  onClick: (name: string) => void
}

const Accordion = ({ accordion, show, onClick }: PropsAccordion): JSX.Element => {
  const handleClick = (): void => {
    onClick(accordion.name)
  }

  return (
    <S.Accordion onClick={handleClick} show={show} >
      <div className="question">
        <h4>{accordion.question}</h4>
        <span className="arrow-icon"><i className='bx bxs-chevron-up'></i></span>
      </div>
      <div className="response">
        <p>{accordion.response}</p>
      </div>
    </S.Accordion>
  )
}


interface PropsAccordions {
  accordions: TypeAccoridion[]
}


const Accordions = ({ accordions }: PropsAccordions): JSX.Element => {
  const accordionsEntriesDefautl = Object.fromEntries(accordions.map(accordion => [accordion.name, false]))
  const [accordionsStatus, setAccordionsStatus] = useState<Record<string, boolean>>(accordionsEntriesDefautl)
  const handleClickAccordions = (name: string): void => {
    setAccordionsStatus(prevAccStatus => {
      const accordionsClose = Object.fromEntries(
        Object.entries(prevAccStatus)
          .map(([name]) => [name, false])
      )
      return {
        ...accordionsClose, [name]: !prevAccStatus[name]
      }
    })
  }
  return (
    <S.Accordions>
      {
        accordions.map(accordion => (
          <Accordion
            accordion={accordion}
            key={accordion.name}
            onClick={handleClickAccordions}
            show={accordionsStatus[accordion.name]}
          />
        ))
      }
    </S.Accordions>
  )
}

export default Accordions