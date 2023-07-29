
import LegendItem from "@/components/LegendItem"

import Image from "next/image"

import * as S from "./styles"

interface ITitleHeadTemplateProps {
  title?: string,
  className?: string,
  logoSite?: {
    src: string,
    alt: string
  }
}

const TitleHeadTemplate = ({ className, title, logoSite }: ITitleHeadTemplateProps): JSX.Element => {


  return (
    <S.TitleHeadTemplate className={className}>
      <LegendItem legend={title} >
        <div className="head-tab">
          {
            logoSite && (
              <div className="logo-tab">
                <Image src={logoSite.src} alt={logoSite.alt} width={40} height={40} />
              </div>
            )
          }
          {title ? <span className="title">{title}</span> : <span className="line-default" style={{
            width: 100,
            height: 4
          }} />}
        </div>
      </LegendItem>
    </S.TitleHeadTemplate>
  )
}


export default TitleHeadTemplate