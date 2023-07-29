


import useAllEditorsQuery from "@/queries/editor/useAllEditorsQuery"
import usePanelStore from "@/stores/usePanelStore"

import Image from "next/image"

import CardFeatureStyled from "../../styles/CardFeature"
import * as S from "./styles"

const AllEditors = ({ order = 0 }: { order?: number }): JSX.Element => {
  const allEditors = usePanelStore(state => state.allEditors)
  const { isLoading: isLoadingFetchAllEditors, isError: isErrorFetchAllEditors } = useAllEditorsQuery()

  return (
    <CardFeatureStyled order={order}>
      <S.AllEditors>
        <h4>Todos os redatores <span>| 03</span></h4>
        {
          !allEditors && isLoadingFetchAllEditors ? (
            <p>Loading</p>
          ) : <></>
        }
        {
          allEditors?.length === 0 && (
            <p>Não há editores</p>
          )
        }
        {
          isErrorFetchAllEditors || !allEditors && (
            <p>Ocorreu um erro!</p>
          )
        }
        {
          allEditors && allEditors.length !== 0 ? (
            <ul className="editors-list">
              {
                allEditors.map(editor => (
                  <li key={editor._id}>
                    <span className="stamp"><i className='bx bxs-pen'></i></span>
                    <div className="profile">
                      <Image src={editor.profile} alt={editor.name} width={50} height={50} />
                    </div>
                    <div className="infos-personal">
                      <span className="name">{editor.name}</span>
                      <span className="email">{editor.email}</span>
                      <span className="whatsapp">{editor.whatsapp}</span>
                    </div>
                  </li>
                ))
              }

            </ul>
          ) : <></>
        }

      </S.AllEditors>
    </CardFeatureStyled>
  )
}

export default AllEditors