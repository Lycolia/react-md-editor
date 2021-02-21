import Draft, { EditorState, SelectionState } from 'draft-js';
import { getClearedBlockState } from './Clear';

const testCaseItems = [
  {
    name: 'headdingされた状態でエンターキーが押された想定',
    before: {
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
    after: {
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
      // 前回の状態で作成
      const contentState = Draft.convertFromRaw(item.before);
      // selectionで強制的にレンダリング
      const editorState = EditorState.forceSelection(
        EditorState.createWithContent(contentState),
        item.selection
      );

      // 処理を実行し結果を取得
      const afterEditorState = getClearedBlockState(editorState);
      // 処理結果が、処理前結果と一致しない
      expect(afterEditorState).not.toEqual(editorState);
      // 処理結果が、想定値に一致する
      expect(Draft.convertToRaw(afterEditorState.getCurrentContent())).toEqual(
        item.after
      );
    });
  });
});
