import App from './App';
import { BasicEditor } from './components/BasicEditor';

export const routes = [
  {
    path: '/',
    exact: true,
    component: App,
  },
  {
    path: '/basic',
    exact: true,
    component: BasicEditor,
  },
];
