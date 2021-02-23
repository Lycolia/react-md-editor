import { EditorState } from 'draft-js';
import { getBlockquoteBlockState } from './Blockquote';
import { getHeaderBlockState } from './Header';

/**
 * reduce blockstate
 * @param sourceState
 */
export const reduceBlockState = (sourceState: EditorState) => {
  const headerState = getHeaderBlockState(sourceState);
  const blockquoteState = getBlockquoteBlockState(headerState);
  return blockquoteState;
};
