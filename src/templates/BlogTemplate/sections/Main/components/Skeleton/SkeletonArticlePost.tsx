import styled from "styled-components"


const SkeletonArticlePostStyled = styled.div`
  width: 100%;
  opacity: .3;
  @keyframes skeletonLoading {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
  .cover-skeleton{
    width: 100%;
    height: 150px;
    border-radius: .4rem;
    margin-bottom: 1rem;
  }
  .title-skeleton, .sub-title-skeleton, .prev-description-skeleton div, .button-skeleton, .cover-skeleton{
    background-color: #ffffff;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: skeletonLoading 2s infinite;
  }
  .title-skeleton{
    width: 60%;
    height: 5px;
  }
  .sub-title-skeleton{
    width: 30%;
    height: 3px;
    margin-top: 1.2rem;
  }
  .prev-description-skeleton{
    margin-top: .7rem;
    display: flex;
    flex-direction: column;
    gap: .4rem;
    div{
      width: 100%;
      height: 4px;
      
    }
  }
  .button-skeleton{
    margin-top: .8rem;
    width: 50px;
    height: 7px;
  }
  
`
interface ISkeletonArticlePostProps {
  cover?: boolean
}

const SkeletonArticlePost = ({ cover = false }: ISkeletonArticlePostProps): JSX.Element => {
  return (
    <SkeletonArticlePostStyled>
      {cover && (<div className="cover-skeleton" />)}
      <div className="title-skeleton" />
      <div className="sub-title-skeleton" />
      <div className="prev-description-skeleton">
        <div />
        <div />
        <div />
      </div>
      <div className="button-skeleton" />
    </SkeletonArticlePostStyled>
  )
}

export default SkeletonArticlePost