import { Editor, EditorState } from 'draft-js';
import { useState } from 'react';

/**
 * 基本のエディタ
 */
export const EditorBasic = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return <Editor editorState={editorState} onChange={setEditorState} />;
};
