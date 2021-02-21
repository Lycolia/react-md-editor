import App from './App';
import { ToggleBlock } from './components/ToggleBlock';

export const routes = [
  {
    path: '/',
    exact: true,
    component: App,
  },
  {
    path: '/toggleblock',
    exact: true,
    component: ToggleBlock,
  },
];
