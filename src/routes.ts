import App from './App';
import { Decorator } from './components/Decorator';
import { EditorBasic } from './components/EditorBasic';
import { GetCarret } from './components/GetCarret';
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
  {
    path: '/getcarret',
    exact: true,
    component: GetCarret,
  },
  {
    path: '/decorator',
    exact: true,
    component: Decorator,
  },
];
