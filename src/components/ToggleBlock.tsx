import { Editor, EditorState, Modifier } from 'draft-js';
import { useState } from 'react';
import { getHeaderState } from '../blocks/Header';
import { getCurrentBlockText } from '../blocks/Utils';

export const useEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const onChange = (ev: EditorState) => {
    const lineText = ev
      .getCurrentContent()
      .getBlockMap()
      .get(ev.getSelection().getAnchorKey())
      .getText();

    console.log(lineText);
    console.log(getCurrentBlockText(ev));
    getHeaderState(ev);

    if (lineText.match(/^# .+/) !== null) {
      const newContentState = Modifier.setBlockType(
        ev.getCurrentContent(),
        ev.getSelection(),
        'header-one'
      );
      const newEditorState = EditorState.push(
        ev,
        newContentState,
        'change-block-data'
      );
      setEditorState(newEditorState);
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
