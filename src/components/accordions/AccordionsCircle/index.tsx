import { useState } from "react"

// import { type TypeBenefit } from "./settings/types"
import * as S from "./styles"
import { type IAccordionCircleProps, type TAccordionParam, type IAccordionsCircleProps } from "./types"

const Accordion = ({ item, showDescription, onClick, modeTheme }: IAccordionCircleProps): JSX.Element => {
  const { description, icon, title } = item

  const handleShowDescription = (): void => {
    onClick([item.title, showDescription])
  }

  return (
    <S.Accordion
      showDescription={showDescription}
      onClick={handleShowDescription}
      modeTheme={modeTheme}
    >
      <div className="column-icon">
        <div className="square-icon">
          {icon}
        </div>
      </div>
      <div className="accordion-content">
        <div className="title">
          <h4>{title}</h4>
          <span className="watch-more"></span>
        </div>
        <div className="description">
          <p>
            {description}
          </p>
        </div>
      </div>
    </S.Accordion>
  )
}

const AccordionsCircle = ({ items, modeTheme = "primary" }: IAccordionsCircleProps): JSX.Element => {
  const benefitsStatus = Object.fromEntries(
    items.map((Iitem) => [Iitem.title, false])
  )

  const [accordionsStatus, setAccordionsStatus] = useState<Record<string, boolean>>(benefitsStatus)
  const handleClickAccordions = ([item, show]: TAccordionParam): void => {

    setAccordionsStatus(prevAccStatus => ({
      ...Object.fromEntries(Object.entries(prevAccStatus).map(([title]) => [title, false])),
      [item]: !show
    }))

  }
  return (
    <S.Accordions>
      {
        items.map(({ description, icon, title }) => (
          <Accordion
            modeTheme={modeTheme}
            showDescription={accordionsStatus[title]}
            key={title}
            onClick={handleClickAccordions}
            item={{
              description,
              icon,
              title
            }} />
        ))
      }
    </S.Accordions>
  )
}

export default AccordionsCircle