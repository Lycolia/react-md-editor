import App from './App';
import { EditorBasic } from './components/EditorBasic';
import { KeyCommand } from './components/KeyCommand';

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
];
