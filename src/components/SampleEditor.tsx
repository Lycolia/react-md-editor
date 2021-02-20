import { Editor, EditorState, SelectionState } from 'draft-js';
import { useEffect, useState } from 'react';

export const getCaret = (selection: SelectionState) => {
  return {
    row: selection.getAnchorKey(),
    column: selection.getAnchorOffset(),
  };
};

/**
 * 基本のエディタ
 */
export const SampleEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  useEffect(() => {
    const sel = editorState.getSelection();
    const con = editorState.getCurrentContent();
    console.log(
      'row',
      sel.getAnchorKey(),
      'col',
      sel.getAnchorOffset(),
      'con',
      con.getBlockForKey(sel.getAnchorKey()).getText()
    );
  });
  return <Editor editorState={editorState} onChange={setEditorState} />;
};
