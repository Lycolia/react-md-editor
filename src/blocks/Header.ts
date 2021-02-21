import { EditorState, Modifier } from 'draft-js';
import { getCurrentBlockText } from './Utils';

export const getHeaderBlockState = (editorState: EditorState) => {
  const currentText = getCurrentBlockText(editorState);
  const sharpMatch = currentText.match(/^(#+) /);
  if (sharpMatch === null) return;
  if (sharpMatch[1].length > 0) {
    console.log(sharpMatch[1].length);
    const newContentState = HeaderStates[sharpMatch[1].length - 1](editorState);
    return EditorState.push(editorState, newContentState, 'change-block-data');
  }
};

export const getHeaderOneBlockState = (editorState: EditorState) => {
  return Modifier.setBlockType(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    'header-one'
  );
};

export const getHeaderTwoBlockState = (editorState: EditorState) => {
  return Modifier.setBlockType(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    'header-two'
  );
};

export const getHeaderThreeBlockState = (editorState: EditorState) => {
  return Modifier.setBlockType(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    'header-three'
  );
};

export const getHeaderFourBlockState = (editorState: EditorState) => {
  return Modifier.setBlockType(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    'header-four'
  );
};

export const getHeaderFiveBlockState = (editorState: EditorState) => {
  return Modifier.setBlockType(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    'header-five'
  );
};

export const getHeaderSixBlockState = (editorState: EditorState) => {
  return Modifier.setBlockType(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    'header-six'
  );
};

export const HeaderStates = [
  getHeaderOneBlockState,
  getHeaderTwoBlockState,
  getHeaderThreeBlockState,
  getHeaderFourBlockState,
  getHeaderFiveBlockState,
  getHeaderSixBlockState,
];
