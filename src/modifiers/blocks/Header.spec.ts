import Draft, { EditorState, SelectionState } from 'draft-js';
import { getHeaderBlockState } from './Header';

const testCaseItems = [
  {
    name: 'single `#` is rendered unstyled',
    target: {
      entityMap: {},
      blocks: [
        {
          key: '1qaz',
          text: '#',
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
          text: '#',
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
    name: '`# ` is rendered Header 1',
    target: {
      entityMap: {},
      blocks: [
        {
          key: '1qaz',
          text: '# ',
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
          text: '# ',
          type: 'header-one',
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
    name: '`## ` is rendered Header 2',
    target: {
      entityMap: {},
      blocks: [
        {
          key: '1qaz',
          text: '## ',
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
          text: '## ',
          type: 'header-two',
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
    name: '`### ` is rendered Header 3',
    target: {
      entityMap: {},
      blocks: [
        {
          key: '1qaz',
          text: '### ',
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
          text: '### ',
          type: 'header-three',
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
    name: '`#### ` is rendered Header 4',
    target: {
      entityMap: {},
      blocks: [
        {
          key: '1qaz',
          text: '#### ',
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
          text: '#### ',
          type: 'header-four',
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
    name: '`##### ` is rendered Header 5',
    target: {
      entityMap: {},
      blocks: [
        {
          key: '1qaz',
          text: '##### ',
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
          text: '##### ',
          type: 'header-five',
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
    name: '`###### ` is rendered Header 6',
    target: {
      entityMap: {},
      blocks: [
        {
          key: '1qaz',
          text: '###### ',
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
          text: '###### ',
          type: 'header-six',
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

describe('getHeaderBlockState', () => {
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
      const resultEditorState = getHeaderBlockState(editorState);
      expect(resultEditorState).not.toBeUndefined();
      if (resultEditorState === undefined) return;
      expect(Draft.convertToRaw(resultEditorState.getCurrentContent())).toEqual(
        item.result
      );
    });
  });
});
