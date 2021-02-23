import { EditorState, Modifier } from 'draft-js';
import { getCaretAnchorBlockText } from '../Utils';

/**
 * get Blockquote block state
 * @param editorState
 */
export const getBlockquoteBlockState = (editorState: EditorState) => {
  const currentText = getCaretAnchorBlockText(editorState);
  const sharpMatch = currentText.match(/^> /);
  if (sharpMatch !== null) {
    const newContentState = Modifier.setBlockType(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      'blockquote'
    );
    return EditorState.push(editorState, newContentState, 'change-block-data');
  } else {
    return editorState;
  }
};
