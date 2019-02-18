import {Q} from '../../lazy'

export default [
  {
    label: '首页',
    path: '/',
    exact: true,
    component: Q(() => import('./self/index'))
  }
]