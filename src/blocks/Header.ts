import { EditorState, Modifier } from 'draft-js';
import { getCurrentBlockText } from './Utils';

export const getHeaderState = (editorState: EditorState) => {
  const currentText = getCurrentBlockText(editorState);
  console.log(currentText);
  const sharpMatches = currentText.match(/^(#+) /);
  if (sharpMatches === null) return;
  if (sharpMatches[1].length === 1) {
    const newContentState = HeaderStates[sharpMatches[1].length - 1](
      editorState
    );
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
