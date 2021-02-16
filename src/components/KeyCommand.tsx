import {
  DraftEditorCommand,
  DraftHandleValue,
  Editor,
  EditorState,
  RichUtils,
} from 'draft-js';
import { useState } from 'react';

/**
 * Ctrl+Bなどのキーボードコマンドイベント
 * Ctrl+Returnや文字入力では反応しない
 */
export const KeyCommand = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleKeyCommand = (
    command: DraftEditorCommand,
    editorState: EditorState,
    eventTimeStamp: number
  ): DraftHandleValue => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return 'handled';
    }

    return 'not-handled';
  };

  return (
    <Editor
      editorState={editorState}
      onChange={setEditorState}
      handleKeyCommand={handleKeyCommand}
    />
  );
};
