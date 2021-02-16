import App from './App';
import { SimpleEditor } from './components/SimpleEditor';

export const routes = [
  {
    path: '/',
    exact: true,
    component: App,
  },
  {
    path: '/simple_editor',
    exact: true,
    component: SimpleEditor,
  },
];
