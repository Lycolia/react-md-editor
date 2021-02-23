import { Editor, EditorState } from 'draft-js';
import { useState } from 'react';
import { getClearedBlockState } from '../modifiers/blocks/Clear';
import { getHeaderBlockState } from '../modifiers/blocks/Header';

export const useEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const onChange = (ev: EditorState) => {
    const newState = getHeaderBlockState(ev);
    if (newState !== undefined) {
      setEditorState(newState);
    } else {
      setEditorState(getClearedBlockState(ev));
    }
  };

  return {
    editorState,
    onChange,
  };
};

export const ToggleBlock = () => {
  const editor = useEditor();

  return <Editor editorState={editor.editorState} onChange={editor.onChange} />;
};
