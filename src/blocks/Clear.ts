import { Modifier, EditorState } from 'draft-js';

export const clearBlockState = (editorState: EditorState) => {
  const newContentState = Modifier.setBlockType(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    'unstyled'
  );
  return EditorState.push(editorState, newContentState, 'change-block-data');
};
