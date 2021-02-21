import { EditorState, Modifier } from 'draft-js';
import { getCurrentBlockText } from './Utils';

/**
 * get headding block state
 * @param editorState
 */
export const getHeaddingBlockState = (editorState: EditorState) => {
  const currentText = getCurrentBlockText(editorState);
  const sharpMatch = currentText.match(/^(#+) /);
  if (sharpMatch === null) return;
  if (sharpMatch[1].length > 0) {
    console.log(sharpMatch[1].length);
    const newContentState = HeaddingStates[sharpMatch[1].length - 1](
      editorState
    );
    return EditorState.push(editorState, newContentState, 'change-block-data');
  }
};

export const getHeaddingOneBlockState = (editorState: EditorState) => {
  return Modifier.setBlockType(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    'header-one'
  );
};

export const getHeaddingTwoBlockState = (editorState: EditorState) => {
  return Modifier.setBlockType(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    'header-two'
  );
};

export const getHeaddingThreeBlockState = (editorState: EditorState) => {
  return Modifier.setBlockType(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    'header-three'
  );
};

export const getHeaddingFourBlockState = (editorState: EditorState) => {
  return Modifier.setBlockType(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    'header-four'
  );
};

export const getHeaddingFiveBlockState = (editorState: EditorState) => {
  return Modifier.setBlockType(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    'header-five'
  );
};

export const getHeaddingSixBlockState = (editorState: EditorState) => {
  return Modifier.setBlockType(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    'header-six'
  );
};

export const HeaddingStates = [
  getHeaddingOneBlockState,
  getHeaddingTwoBlockState,
  getHeaddingThreeBlockState,
  getHeaddingFourBlockState,
  getHeaddingFiveBlockState,
  getHeaddingSixBlockState,
];
