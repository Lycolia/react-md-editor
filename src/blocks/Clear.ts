import { Modifier, EditorState } from 'draft-js';

/**
 * get cleared block state
 * @param editorState
 */
export const getClearedBlockState = (editorState: EditorState) => {
  const newContentState = Modifier.setBlockType(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    'unstyled'
  );
  return EditorState.push(editorState, newContentState, 'change-block-data');
};
