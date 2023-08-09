import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';

import { type IDataImageEntity } from './types';

const convertContentRawInString = (editorState: EditorState): string => {
  const contentState = editorState.getCurrentContent();
  const contentRawString = JSON.stringify(convertToRaw(contentState));
  return contentRawString;
};

const convertContentRawStringInEditorState = (
  contentRaw: string
): EditorState => {
  if (!contentRaw) return EditorState.createEmpty();
  const contentState = convertFromRaw(JSON.parse(contentRaw));
  const editorState = EditorState.createWithContent(contentState);
  return editorState;
};

const extractTextFromContentRawString = (contentRawString: string): string => {
  const editorState = convertContentRawStringInEditorState(contentRawString);
  const contentState = editorState.getCurrentContent();
  const contentRaw = convertToRaw(contentState);
  return contentRaw.blocks.map((block) => `${block.text}`).join('\n');
};

const extractImagesFromContentRawString = (
  contentRawString: string
): IDataImageEntity[] => {
  const editorState = convertContentRawStringInEditorState(contentRawString);
  const contentState = editorState.getCurrentContent();
  const { entityMap } = convertToRaw(contentState);

  const entityMapTrated = Object.entries(entityMap).map(([, entity]) => entity);

  const entityMapImage = entityMapTrated.filter(
    (entity) => entity.type === 'IMAGE'
  );

  const imagesSelecteds = entityMapImage.map((entity) => entity.data);

  return imagesSelecteds as IDataImageEntity[];
};

export const textEditorUtil = {
  convertContentRawInString,
  convertContentRawStringInEditorState,
  extractTextFromContentRawString,
  extractImagesFromContentRawString
};
