import { Editor, EditorState, Modifier } from 'draft-js';
import { useState } from 'react';
import { getHeaderState } from '../blocks/Header';

export const useEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const onChange = (ev: EditorState) => {
    const newState = getHeaderState(ev);
    if (newState !== undefined) {
      setEditorState(newState);
    } else {
      const newContentState = Modifier.setBlockType(
        ev.getCurrentContent(),
        ev.getSelection(),
        'unstyled'
      );
      const newEditorState = EditorState.push(
        ev,
        newContentState,
        'change-block-data'
      );
      setEditorState(newEditorState);
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
