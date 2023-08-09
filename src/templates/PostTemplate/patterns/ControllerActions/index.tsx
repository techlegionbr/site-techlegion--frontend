import TitleItem from "@/components/TitleItem"

import * as S from "./styles"

interface IControllerActionsProps {
  quantity: {
    views: number,
    shares: number,
    likes: number,
    deslikes: number
  }
}

const ControllerActions = ({ quantity: { likes, deslikes, shares, views } }: IControllerActionsProps): JSX.Element => {
  return (
    <S.ControllerActions>
      <TitleItem title="Curtidas">
        <button><i className='bx bxs-like' ></i>{likes}</button>
      </TitleItem>
      <TitleItem title="Dislikes">
        <button><i className='bx bxs-dislike' ></i>{deslikes}</button>
      </TitleItem>
      <TitleItem title="Compartilhamentos">
        <button className="selected"><i className='bx bxs-share-alt' ></i>{shares}</button>
      </TitleItem>
      <span className="display-views">{views} Visualizações</span>

    </S.ControllerActions>
  )
}

export default ControllerActions