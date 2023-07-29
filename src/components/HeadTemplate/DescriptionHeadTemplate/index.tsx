
import Image from "next/image"

import * as S from "./styles"

interface IDescriptionHeadTemplateProps {
  title?: string,
  description?: string,
  logoSite?: {
    src: string,
    alt: string
  },
  domain?: string,
  url?: string
}

const DescriptionHeadTemplate = ({ logoSite, title, description, domain, url }: IDescriptionHeadTemplateProps): JSX.Element => {

  return (
    <S.DescriptionHeadTemplate>
      <div className="description-content">
        <div className="header-site">
          {
            logoSite ? (
              <div className="logo-site">
                <Image src={logoSite.src} alt={logoSite.alt} width={40} height={40} />
              </div>
            ) : (<span className="circle-default" style={{
              width: 35,
              height: 35
            }} />)
          }
          <div className="infos-site">
            {domain ? (<span className="domain">{domain}</span>) : (<span className="line-default" style={{
              width: 100,
              height: 4
            }} />)}
            {url ? (<span className="url">{url}</span>) : (<span className="line-default" style={{
              width: 150,
              height: 4,
            }} />)}
          </div>
        </div>
        {title ? (<span className="title">{title}</span>) : (<span className="line-default" style={{
          width: 300,
          height: 10,
          marginTop: 20
        }} />)}
        {description ? (<span className="description">{description}</span>) : (<span className="line-default" style={{
          width: 600,
          height: 4,
          marginTop: 10
        }} />)}
      </div>
    </S.DescriptionHeadTemplate>
  )
}


export default DescriptionHeadTemplate