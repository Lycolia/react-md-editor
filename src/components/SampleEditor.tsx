import { Editor, EditorState } from 'draft-js';
import { useState } from 'react';
import { reduceBlockState } from '../modifiers/blocks/BlockReducer';

export const useEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const onChange = (ev: EditorState) => {
    setEditorState(reduceBlockState(ev));
  };

  return {
    editorState,
    onChange,
  };
};

export const SampleEditor = () => {
  const editor = useEditor();

  return <Editor editorState={editor.editorState} onChange={editor.onChange} />;
};
