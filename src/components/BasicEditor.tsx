import { Editor, EditorState } from 'draft-js';
import { useState } from 'react';

export const BasicEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return <Editor editorState={editorState} onChange={setEditorState} />;
};
