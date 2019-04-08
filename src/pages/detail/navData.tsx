import {Q} from '../../lazy'

export default [
  {
    label: '2页子页面',
    path: 'self',
    exact: true,
    component: Q(() => import('./self/index'))
  }
]