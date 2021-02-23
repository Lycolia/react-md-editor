import Draft, { EditorState, SelectionState } from 'draft-js';
import { getCaretAnchorBlockText } from './Utils';

const testCaseItems = [
  {
    name: 'get text from unstyled',
    target: {
      entityMap: {},
      blocks: [
        {
          key: '1qaz',
          text: 'foo',
          type: 'unstyled',
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
          data: {},
        },
      ],
    },
    result: 'foo',
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
    name: 'get text from header-one',
    target: {
      entityMap: {},
      blocks: [
        {
          key: '1qaz',
          text: 'bar',
          type: 'header-one',
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
          data: {},
        },
      ],
    },
    result: 'bar',
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
    name: 'get text from header-two',
    target: {
      entityMap: {},
      blocks: [
        {
          key: '1qaz',
          text: 'baz',
          type: 'header-two',
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
          data: {},
        },
      ],
    },
    result: 'baz',
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
    name: 'get text from header-three',
    target: {
      entityMap: {},
      blocks: [
        {
          key: '1qaz',
          text: 'foobar',
          type: 'header-three',
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
          data: {},
        },
      ],
    },
    result: 'foobar',
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
    name: 'get text from header-four',
    target: {
      entityMap: {},
      blocks: [
        {
          key: '1qaz',
          text: 'foobarbaz',
          type: 'header-four',
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
          data: {},
        },
      ],
    },
    result: 'foobarbaz',
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
    name: 'get text from header-five',
    target: {
      entityMap: {},
      blocks: [
        {
          key: '1qaz',
          text: 'foobar2000',
          type: 'header-five',
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
          data: {},
        },
      ],
    },
    result: 'foobar2000',
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
    name: 'get text from header-six',
    target: {
      entityMap: {},
      blocks: [
        {
          key: '1qaz',
          text: 'fb2k',
          type: 'header-six',
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
          data: {},
        },
      ],
    },
    result: 'fb2k',
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

describe('getCaretAnchorBlockText', () => {
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
      const resultText = getCaretAnchorBlockText(editorState);
      // state equals result
      expect(resultText).toBe(item.result);
    });
  });
});
