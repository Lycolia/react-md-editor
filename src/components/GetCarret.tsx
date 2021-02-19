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
    console.log('row', sel.getAnchorKey(), 'col', sel.getAnchorOffset());
  });
  return <Editor editorState={editorState} onChange={setEditorState} />;
};
