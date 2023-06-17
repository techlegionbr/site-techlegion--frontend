
import Button from "@/components/Button"

import * as S from "../styles"

const allAttrs = [
  "Sites Ilimitados*",
  "25DB SSD",
  "1GB RAM",
  "1 vCPU",
  "CDN Premium",
  "Otimização",
  "HTTPS Gratuito",
  "Suporte Técnico",
  "Backup Gratuito",
  "Prevenção de Blocklist",
  "3 caixas de E-mail de 5GB",
  "100k mail gateway gratuito"
] as const

type TAttrs = typeof allAttrs[number]


interface ICardPlanProps {
  name: string,
  title: string,
  value: number,
  attrsIncludes: TAttrs[],
  link: string
}


const CardPlan = ({ attrsIncludes, link, name, title, value }: ICardPlanProps): JSX.Element => {
  return (
    <S.CardPlan>
      <span className="status-plan">{name}</span>
      <i className='bx bxl-soundcloud icon-cloud'></i>
      <h4>{title}</h4>
      <div className="price">
        <span className="sub-price">MÊS</span>
        <span className="value-price">R${value}</span>
      </div>
      <ul>
        {
          allAttrs.map(attr => (
            <li key={name} className={attrsIncludes.includes(attr) ? "attr-include" : "attr-exclude"}>
              {attrsIncludes.includes(attr) ? <i className='bx bx-check'></i> : <i className='bx bx-x'></i>}
              <span>{attr}</span>
            </li>
          ))
        }
      </ul>
      <Button className="button-know-more" size="medium" href={link}>Saiba Mais</Button>
    </S.CardPlan>
  )
}

export default CardPlan