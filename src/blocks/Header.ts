import { EditorState, Modifier } from 'draft-js';
import { getCurrentBlockText } from './Utils';

export const getHeaderState = (editorState: EditorState) => {
  const currentText = getCurrentBlockText(editorState);
  const sharpMatch = currentText.match(/^(#+) /);
  if (sharpMatch === null) return;
  if (sharpMatch[1].length > 0) {
    console.log(sharpMatch[1].length);
    const newContentState = HeaderStates[sharpMatch[1].length - 1](editorState);
    return EditorState.push(editorState, newContentState, 'change-block-data');
  }
};

export const getHeaderOneState = (editorState: EditorState) => {
  return Modifier.setBlockType(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    'header-one'
  );
};

export const getHeaderTwoState = (editorState: EditorState) => {
  return Modifier.setBlockType(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    'header-two'
  );
};

export const getHeaderThreeState = (editorState: EditorState) => {
  return Modifier.setBlockType(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    'header-three'
  );
};

export const getHeaderFourState = (editorState: EditorState) => {
  return Modifier.setBlockType(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    'header-four'
  );
};

export const getHeaderFiveState = (editorState: EditorState) => {
  return Modifier.setBlockType(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    'header-five'
  );
};

export const getHeaderSixState = (editorState: EditorState) => {
  return Modifier.setBlockType(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    'header-six'
  );
};

export const HeaderStates = [
  getHeaderOneState,
  getHeaderTwoState,
  getHeaderThreeState,
  getHeaderFourState,
  getHeaderFiveState,
  getHeaderSixState,
];
