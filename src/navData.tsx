import {Q} from './lazy';

export default  [
  {
    label: '首页',
    path: '/',
    exact: true,
    component: Q(() => import('./pages/main/index'))
  },
  {
    label: '第二页',
    path: '/page2',
    exact: true,
    component: Q(() => import('./pages/detail/index'))
  },
  {
    label: '第三页',
    path: '/page3',
    exact: true,
    component: Q(() => import('./pages/page3/index'))
  }
]