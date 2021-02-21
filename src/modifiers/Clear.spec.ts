import Draft, { EditorState, SelectionState } from 'draft-js';
import { getClearedBlockState } from './Clear';

const succeedCaseItems = [
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
  // eslint-disable-next-line array-callback-return
  succeedCaseItems.map((item) => {
    // eslint-disable-next-line jest/valid-title
    it(item.name, () => {
      // get target state
      const contentState = Draft.convertFromRaw(item.target);
      // render by selection
      const editorState = EditorState.forceSelection(
        EditorState.createWithContent(contentState),
        item.selection
      );

      // get state
      const resultEditorState = getClearedBlockState(editorState);
      // state equals result
      expect(Draft.convertToRaw(resultEditorState.getCurrentContent())).toEqual(
        item.result
      );
    });
  });
});
