import React, { useState, useCallback, useEffect } from "react";


import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { stateToHTML } from "draft-js-export-html";

import dynamic from "next/dynamic";

import * as S from "./styles"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

interface ITextEditorProps {
  onChangeHTML?: (valueInHTML: string) => void,
  reset?: boolean,
  className?: string,
  helperText?: string
}

const getEditorContentAsHtml = (state: EditorState): string => {
  const contentState = state.getCurrentContent();
  const contentAsRaw = convertToRaw(contentState);
  const contentAsContentState = convertFromRaw(contentAsRaw);
  const contentAsHtml = stateToHTML(contentAsContentState);
  return contentAsHtml;
};

const DynamicEditor = dynamic(async () => await import("react-draft-wysiwyg").then((mod) => mod.Editor), {
  ssr: false,
});

const TextEditor = ({ onChangeHTML, reset, className, helperText }: ITextEditorProps): JSX.Element => {
  const initialEditorState = EditorState.createEmpty();
  const [editorState, setEditorState] = useState(initialEditorState);

  const onEditorStateChange = useCallback((newEditorState: EditorState) => {
    setEditorState(newEditorState);
    if (onChangeHTML) {
      onChangeHTML(getEditorContentAsHtml(newEditorState))
    }
  }, [onChangeHTML]);

  useEffect(() => {
    if (reset) {
      setEditorState(initialEditorState)
    }
  }, [reset, initialEditorState])



  return (
    <S.TextEditor className={className}>
      <div className="text-editor">
        <DynamicEditor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
        />
      </div>
      {helperText && (<span className="helper-text">{helperText}</span>)}
    </S.TextEditor>
  );
};

export default TextEditor;
