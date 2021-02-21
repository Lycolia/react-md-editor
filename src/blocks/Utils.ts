import { EditorState } from 'draft-js';

/**
 * get current inputed block text
 * @param editorState EditorState
 */
export const getCurrentBlockText = (editorState: EditorState) => {
  return editorState
    .getCurrentContent()
    .getBlockMap()
    .get(editorState.getSelection().getAnchorKey())
    .getText();
};
