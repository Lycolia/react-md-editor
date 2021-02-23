import { EditorState, Modifier } from 'draft-js';
import { getCaretAnchorBlockText } from '../Utils';

/**
 * get Header block state
 * @param editorState
 * @returns match header then new header state else current state
 */
export const getHeaderBlockState = (editorState: EditorState) => {
  const currentText = getCaretAnchorBlockText(editorState);
  const sharpMatch = currentText.match(/^(#+) /);
  if (sharpMatch !== null) {
    const newContentState = HeaderStates[sharpMatch[1].length - 1](editorState);
    return EditorState.push(editorState, newContentState, 'change-block-data');
  } else {
    return editorState;
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
