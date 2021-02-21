import { CompositeDecorator, Editor, EditorState } from 'draft-js';
import { useState } from 'react';
import { HeaderDecorator } from '../decorators/HeaderDecorator';

const compositeDecorator = new CompositeDecorator(HeaderDecorator);

const turnOffHandleDecorations = () => {
  return EditorState.set(EditorState.createEmpty(), {
    decorator: compositeDecorator,
  });
};

const useEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    turnOffHandleDecorations()
  );

  return {
    editorState,
    onChange: setEditorState,
  };
};

export const Decorator = () => {
  const editor = useEditor();

  return (
    <Editor
      editorState={editor.editorState}
      onChange={(ev) => editor.onChange(ev)}
    />
  );
};
