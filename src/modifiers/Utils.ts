import { EditorState } from 'draft-js';

export const getCaretAnchorBlockText = (editorState: EditorState) => {
  return editorState
    .getCurrentContent()
    .getBlockMap()
    .get(getCaretAnchorKey(editorState))
    .getText();
};

export const getCaretAnchorKey = (editorState: EditorState) => {
  return editorState.getSelection().getAnchorKey();
};
