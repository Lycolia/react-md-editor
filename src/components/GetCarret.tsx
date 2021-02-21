import { Editor, EditorState } from 'draft-js';
import { useEffect, useState } from 'react';

/**
 * get caret position
 */
export const GetCaret = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  useEffect(() => {
    const sel = editorState.getSelection();
    const con = editorState.getCurrentContent();
    console.log(
      'row',
      sel.getAnchorKey(),
      'col',
      sel.getAnchorOffset(),
      'con',
      con.getBlockForKey(sel.getAnchorKey()).getText()
    );
  });
  return <Editor editorState={editorState} onChange={setEditorState} />;
};
