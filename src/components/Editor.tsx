import { Editor, EditorState, RichUtils } from 'draft-js';
import { useState } from 'react';

export const EditorSample = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  RichUtils.handleKeyCommand(editorState);

  return (
    <Editor
      editorState={editorState}
      onChange={setEditorState}
      handleKeyCommand={}
    />
  );
};
