import { EditorState, Modifier } from 'draft-js';
import { getCurrentBlockText } from './Utils';

/**
 * get Header block state
 * @param editorState
 */
export const getHeaderBlockState = (editorState: EditorState) => {
  const currentText = getCurrentBlockText(editorState);
  const sharpMatch = currentText.match(/^(#+) /);
  if (sharpMatch === null) return;
  if (sharpMatch[1].length > 0) {
    const newContentState = HeaderStates[sharpMatch[1].length - 1](editorState);
    return EditorState.push(editorState, newContentState, 'change-block-data');
  }
};

const getHeaderOneBlockState = (editorState: EditorState) => {
  return Modifier.setBlockType(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    'header-one'
  );
};

const getHeaderTwoBlockState = (editorState: EditorState) => {
  return Modifier.setBlockType(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    'header-two'
  );
};

const getHeaderThreeBlockState = (editorState: EditorState) => {
  return Modifier.setBlockType(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    'header-three'
  );
};

const getHeaderFourBlockState = (editorState: EditorState) => {
  return Modifier.setBlockType(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    'header-four'
  );
};

const getHeaderFiveBlockState = (editorState: EditorState) => {
  return Modifier.setBlockType(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    'header-five'
  );
};

const getHeaderSixBlockState = (editorState: EditorState) => {
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
