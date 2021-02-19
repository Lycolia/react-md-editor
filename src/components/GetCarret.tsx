import { Editor, EditorState } from 'draft-js';
import { useEffect, useState } from 'react';

/**
 * 基本のエディタ
 */
export const GetCarret = () => {
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
