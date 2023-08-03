


import useAllEditorsQuery from "@/queries/editor/useAllEditorsQuery"
import usePanelStore from "@/stores/usePanelStore"


import EditorPreview from "../../components/EditorPreview"
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
                  <EditorPreview className="card-editor-preview" key={editor._id} editor={{
                    email: editor.email,
                    name: editor.name,
                    profile: editor.profile,
                    whatsapp: editor.whatsapp
                  }} />
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