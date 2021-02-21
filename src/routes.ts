import App from './App';
import { Decorator } from './components/Decorator';
import { EditorBasic } from './components/EditorBasic';
import { GetCaret } from './components/GetCarret';
import { KeyCommand } from './components/KeyCommand';
import { ToggleBlock } from './components/ToggleBlock';

export const routes = [
  {
    path: '/',
    exact: true,
    component: App,
  },
  {
    path: '/basic',
    exact: true,
    component: EditorBasic,
  },
  {
    path: '/keyinput',
    exact: true,
    component: KeyCommand,
  },
  {
    path: '/getcaret',
    exact: true,
    component: GetCaret,
  },
  {
    path: '/decorator',
    exact: true,
    component: Decorator,
  },
  {
    path: '/toggleblock',
    exact: true,
    component: ToggleBlock,
  },
];
