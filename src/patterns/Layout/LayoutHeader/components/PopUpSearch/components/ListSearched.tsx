import { Fragment } from "react"

import { type TypeDivisionTopicsSarched } from "@/settings/search/types"

import { useRouter } from "next/router"

import * as S from "../styles"

interface PropsSearchedList {
  list: TypeDivisionTopicsSarched[] | null,
  searchedCharacter: string,
  onClose: () => void
}


const ListSearched = ({ list, searchedCharacter, onClose }: PropsSearchedList): JSX.Element => {
  const router = useRouter()

  const handleClickTopic = (redirect: string): void => {
    onClose()
    void router.push(redirect)
  }

  return (
    <S.ListSearched>
      {
        list?.length === 0 && (
          <li className="not-result">
            <i className='bx bx-search icon-search'></i>
            <p>Nenhum resultado para <span>{`"${searchedCharacter}"`}</span></p>
          </li>
        )
      }
      {
        !list && (<li className="not-searched">Nenhuma pesquisa recente</li>)
      }
      {
        list?.map(([typeTopic, topicsSearched]) => (
          <Fragment key={typeTopic}>
            <li className="type-resulteds-searched">{typeTopic}</li>
            {
              topicsSearched.map(topicSearched => (
                <li
                  key={topicSearched.name}
                  className="resulted-searched"
                  onClick={() => { handleClickTopic(topicSearched.redirect); }}
                >
                  {topicSearched.name}
                  <i className='bx bxs-share icon-arrow'></i>
                </li>
              ))
            }
          </Fragment>
        ))
      }
    </S.ListSearched>
  )
}

export default ListSearched