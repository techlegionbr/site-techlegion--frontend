


import * as S from "./styles"

interface IUrlHeadTemplateProps {
  domain?: string,
  router?: {
    main: string,
    baseUrl: string
  },
  className?: string,
}


const UrlHeadTemplate = ({ className, domain, router }: IUrlHeadTemplateProps): JSX.Element => {
  const url = router ? `/${router.baseUrl}/${router.main}` : null
  return (
    <S.UrlHeadTemplate className={className}>
      <div className="router-utils">
        <i className='bx bx-shield-alt-2 icon-shield'></i>
        <i className='bx bx-lock-alt icon-lock' ></i>
        <span className="router">
          <span className="prefix-protocol">https://</span>
          {domain && (<span className="domain">{domain}</span>)}
          {url && (<span className="router-name">{url}</span>)}
        </span>
      </div>
    </S.UrlHeadTemplate>
  )
}


export default UrlHeadTemplate