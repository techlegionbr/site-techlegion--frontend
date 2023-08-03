
import FieldEditable from "./components/FieldEditable"
import ToolBar from "./components/Toolbar"
import TextEditorProvider from "./contexts/TextEditorContext"
import * as S from "./styles"

interface ITextEditorProps {
  className?: string
}

const TextEditor = ({ className }: ITextEditorProps): JSX.Element => {
  return (
    <S.TextEditor className={className}>
      <div className="text-editor">
        <TextEditorProvider>
          <ToolBar />
          <FieldEditable />
        </TextEditorProvider>
      </div>
    </S.TextEditor>
  )
}

export default TextEditor