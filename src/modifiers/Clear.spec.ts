import Draft, { EditorState, SelectionState } from 'draft-js';
import { getClearedBlockState } from './Clear';

const testCaseItems = [
  {
    name: 'input return key after hedding',
    target: {
      entityMap: {},
      blocks: [
        {
          key: '1qaz',
          text: '',
          type: 'header-one',
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
          data: {},
        },
      ],
    },
    result: {
      entityMap: {},
      blocks: [
        {
          key: '1qaz',
          text: '',
          type: 'unstyled',
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
          data: {},
        },
      ],
    },
    selection: new SelectionState({
      anchorKey: '1qaz',
      anchorOffset: 0,
      focusKey: '1qaz',
      focusOffset: 0,
      isBackward: false,
      hasFocus: true,
    }),
  },
];

describe('getClearedBlockState', () => {
  testCaseItems.map((item) => {
    it(item.name, () => {
      // get target state
      const contentState = Draft.convertFromRaw(item.target);
      // render by selection
      const editorState = EditorState.forceSelection(
        EditorState.createWithContent(contentState),
        item.selection
      );

      // get cleared state
      const resultEditorState = getClearedBlockState(editorState);
      // cleared state equals result
      expect(Draft.convertToRaw(resultEditorState.getCurrentContent())).toEqual(
        item.result
      );
    });
  });
});
