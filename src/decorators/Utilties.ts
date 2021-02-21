import { ContentBlock } from 'draft-js';

/**
 * Decorate range of ContentBlock with RegEx
 * @param regex apply regex pattern
 * @param contentBlock content block (raw text)
 * @param decorateRange decorate callback, params of start and end is range for content block
 */
export const findDecorateRangeByRegex = (
  regex: RegExp,
  contentBlock: ContentBlock,
  decorateRange: (start: number, end: number) => void
) => {
  const rawText = contentBlock.getText();
  const matchItems = regex.exec(rawText);
  if (matchItems === null) return;
  const matchRange = getRegexMatchRange(matchItems);
  decorateRange(matchRange.start, matchRange.end);
};

/**
 * get string range from RegExpExecArray
 * @param matchArr RegExpExecArray
 */
export const getRegexMatchRange = (matchArr: RegExpExecArray) => {
  return {
    start: matchArr.index,
    end: matchArr.index + matchArr[0].length,
  };
};
