
import { useState } from "react"

import * as S from "./styles"
import { type IAccordionsQuestProps, type IAccordionQuestProps } from "./types"



const Accordion = ({ item, show, onClick, modeTheme }: IAccordionQuestProps): JSX.Element => {
  const handleClick = (): void => {
    onClick(item.name)
  }

  return (
    <S.Accordion onClick={handleClick} show={show} modeTheme={modeTheme}>
      <div className="question">
        <h4>{item.question}</h4>
        <span className="arrow-icon"><i className='bx bxs-chevron-up'></i></span>
      </div>
      <div className="response">
        <p>{item.response}</p>
      </div>
    </S.Accordion>
  )
}


const AccordionsQuest = ({ items, modeTheme = "bluishGray" }: IAccordionsQuestProps): JSX.Element => {
  const accordionsEntriesDefault = Object.fromEntries(items.map(item => [item.name, false]))
  const [accordionsStatus, setAccordionsStatus] = useState<Record<string, boolean>>(accordionsEntriesDefault)

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
        items.map(item => (
          <Accordion
            item={item}
            key={item.name}
            modeTheme={modeTheme}
            onClick={handleClickAccordions}
            show={accordionsStatus[item.name]}
          />
        ))
      }
    </S.Accordions>
  )
}

export default AccordionsQuest