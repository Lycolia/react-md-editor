import { ContentBlock, ContentState } from 'draft-js';
import { findDecorateRangeByRegex } from './Utilties';

export const header1Strategy = (
  contentBlock: ContentBlock,
  decorateRange: (start: number, end: number) => void,
  contentState: ContentState
) => {
  findDecorateRangeByRegex(/^# .+/g, contentBlock, decorateRange);
};
export const header1 = ({ children }: { children: JSX.Element }) => {
  return <h1>{children}</h1>;
};

export const header2Strategy = (
  contentBlock: ContentBlock,
  decorateRange: (start: number, end: number) => void,
  contentState: ContentState
) => {
  findDecorateRangeByRegex(/^## .+/g, contentBlock, decorateRange);
};
export const header2 = ({ children }: { children: JSX.Element }) => {
  return <h2>{children}</h2>;
};

export const header3Strategy = (
  contentBlock: ContentBlock,
  decorateRange: (start: number, end: number) => void,
  contentState: ContentState
) => {
  findDecorateRangeByRegex(/^### .+/g, contentBlock, decorateRange);
};
export const header3 = ({ children }: { children: JSX.Element }) => {
  return <h3>{children}</h3>;
};

export const header4Strategy = (
  contentBlock: ContentBlock,
  decorateRange: (start: number, end: number) => void,
  contentState: ContentState
) => {
  findDecorateRangeByRegex(/^#### .+/g, contentBlock, decorateRange);
};
export const header4 = ({ children }: { children: JSX.Element }) => {
  return <h4>{children}</h4>;
};

export const header5Strategy = (
  contentBlock: ContentBlock,
  decorateRange: (start: number, end: number) => void,
  contentState: ContentState
) => {
  findDecorateRangeByRegex(/^##### .+/g, contentBlock, decorateRange);
};
export const header5 = ({ children }: { children: JSX.Element }) => {
  return <h5>{children}</h5>;
};

export const header6Strategy = (
  contentBlock: ContentBlock,
  decorateRange: (start: number, end: number) => void,
  contentState: ContentState
) => {
  findDecorateRangeByRegex(/^###### .+/g, contentBlock, decorateRange);
};
export const header6 = ({ children }: { children: JSX.Element }) => {
  return <h6>{children}</h6>;
};

export const HeaderDecorator = [
  {
    strategy: header1Strategy,
    component: header1,
  },
  {
    strategy: header2Strategy,
    component: header2,
  },
  {
    strategy: header1Strategy,
    component: header1,
  },
  {
    strategy: header3Strategy,
    component: header3,
  },
  {
    strategy: header4Strategy,
    component: header4,
  },
  {
    strategy: header5Strategy,
    component: header5,
  },
  {
    strategy: header6Strategy,
    component: header6,
  },
];
