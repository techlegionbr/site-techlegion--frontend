import { useEffect, useState } from 'react';


import { EditorState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


import dynamic from 'next/dynamic';

import { customStyleMap, toolbarConfigTextEditor } from './options';
import * as S from "./styles"
import { textEditorUtil } from './utils';


const Editor = dynamic(async () => await import('react-draft-wysiwyg').then(mod => mod.Editor), {
  ssr: false
});

interface ITextEditorProps {
  className?: string,
  onChangeContentRawString?: (contentRawString: string) => void,
  reset?: boolean,
  contentRawString?: string,
  readOnly?: boolean
  toolbarHidden?: boolean,
  helperText?: string,
  modePost?: boolean
}

const TextEditor = ({ className, onChangeContentRawString, reset, contentRawString, helperText, modePost, ...restProps }: ITextEditorProps): JSX.Element => {
  const [editorState, setEditorState] = useState(contentRawString ? textEditorUtil.convertContentRawStringInEditorState(contentRawString) : EditorState.createEmpty());

  const onEditorStateChange = (newEditorState: EditorState): void => {
    setEditorState(newEditorState);
    if (onChangeContentRawString) {
      onChangeContentRawString(textEditorUtil.convertContentRawInString(newEditorState))
    }
  };

  useEffect(() => {
    if (reset) {
      setEditorState(EditorState.createEmpty())
    }
  }, [reset])


  return (
    <S.TextEditor className={className}>
      {
        modePost ? (
          <div className="text-editor-preview">
            <Editor
              editorClassName="field-editor-content"
              editorState={editorState}
              onEditorStateChange={onEditorStateChange}
              toolbar={toolbarConfigTextEditor}
              customStyleMap={customStyleMap}
              {...restProps}
              toolbarHidden
              readOnly

            />
          </div>
        ) : (
          <>
            <div className="text-editor">
              <div className="text-editor-content">
                <Editor
                  editorClassName="field-editor-content"
                  editorState={editorState}
                  onEditorStateChange={onEditorStateChange}
                  toolbar={toolbarConfigTextEditor}
                  customStyleMap={customStyleMap}
                  {...restProps}
                />
              </div>
            </div>
            {helperText && <span className="helper-text">{helperText}</span>}
          </>
        )
      }

    </S.TextEditor>
  )
}

export default TextEditor