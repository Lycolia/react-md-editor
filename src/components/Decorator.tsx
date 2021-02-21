import { CompositeDecorator, Editor, EditorState } from 'draft-js';
import { useState } from 'react';
import { HeaderDecorator } from '../decorators/HeaderDecorator';

const compositeDecorator = new CompositeDecorator(HeaderDecorator);

export const handleDecorations = () => {
  return EditorState.set(EditorState.createEmpty(), {
    decorator: compositeDecorator,
  });
};

export const useEditor = () => {
  const [editorState, setEditorState] = useState(() => handleDecorations());

  const onChange = (ev: React.SetStateAction<EditorState>) => {
    console.log(
      editorState.getLastChangeType(),
      editorState.getCurrentContent().getPlainText(),
      editorState.getCurrentContent().getBlockMap(),
      editorState.getCurrentContent()
    );
    setEditorState(ev);
  };

  return {
    editorState,
    onChange,
  };
};

export const Decorator = () => {
  const editor = useEditor();

  return <Editor editorState={editor.editorState} onChange={editor.onChange} />;
};
