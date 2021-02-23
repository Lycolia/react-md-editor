import Draft, { EditorState, SelectionState } from 'draft-js';
import { getBlockquoteBlockState } from './Blockquote';

const testCaseItems = [
  {
    name: 'single `>` is rendered unstyled',
    target: {
      entityMap: {},
      blocks: [
        {
          key: '1qaz',
          text: '>',
          type: 'unstyled',
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
          text: '>',
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
  {
    name: '`> ` is rendered blockquote',
    target: {
      entityMap: {},
      blocks: [
        {
          key: '1qaz',
          text: '> ',
          type: 'unstyled',
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
          text: '> ',
          type: 'blockquote',
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

describe('getBlockquoteBlockState', () => {
  // eslint-disable-next-line array-callback-return
  testCaseItems.map((item) => {
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
      const resultEditorState = getBlockquoteBlockState(editorState);
      expect(resultEditorState).not.toBeUndefined();
      if (resultEditorState === undefined) return;
      expect(Draft.convertToRaw(resultEditorState.getCurrentContent())).toEqual(
        item.result
      );
    });
  });
});
