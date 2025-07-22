import ReactBasic from './components/react-basic';
import TestClass from '@/components/test-class';
import TestFunction from '@/components/test-function';

import TestPractise from '@/components/test-practise/test-practise';
import TestTransitionCSS from '@/components/test-practise-css/test-practise-css';
import TestTransitionGroup from '@/components/test-transition-group/test-transition-group';
import TestMoveDom from '@/components/test-move-dom/test-move-dom';

import TestReduxIndex from '@/components/test-redux/test-redux-index';
import TestReduxList from '@/components/test-redux/components/test-redux-list';
import TestReduxBuyList from '@/components/test-redux/components/test-redux-buy-list';
import TestReduxCount from '@/components/test-redux/components/test-redux-count';

import TestReduxjsToolkitIndex from '@/components/test-reduxjs-toolkit/test-reduxjs-toolkit-index';
import TestReduxjsToolkitList from '@/components/test-reduxjs-toolkit/components/test-reduxjs-toolkit-list';
import TestReduxjsToolkitBuyList from '@/components/test-reduxjs-toolkit/components/test-reduxjs-toolkit-buy-list';
import TestReduxjsToolkitCount from '@/components/test-reduxjs-toolkit/components/test-reduxjs-toolkit-count';

export default [
  {
    path: '/react-practise',
    element: TestPractise,
  },
  {
    path: '/react-basic/*',
    element: ReactBasic,
    children: [
      {
        path: 'class',
        element: TestClass,
      },
      {
        path: 'function',
        element: TestFunction,
      },
    ],
  },
  {
    path: '/react-css',
    element: TestTransitionCSS,
  },
  {
    path: '/react-transition',
    element: TestTransitionGroup,
  },
  {
    path: '/react-dom',
    element: TestMoveDom,
  },
  {
    path: '/react-redux/*',
    element: TestReduxIndex,
    children: [
      {
        path: 'goodsList',
        element: TestReduxList,
      },
      {
        path: 'buyGoodsList',
        element: TestReduxBuyList,
      },
      {
        path: 'count',
        element: TestReduxCount,
      },
    ],
  },
  {
    path: '/react-reduxjs-toolkit/*',
    element: TestReduxjsToolkitIndex,
    children: [
      {
        path: 'goodsList',
        element: TestReduxjsToolkitList,
      },
      {
        path: 'buyGoodsList',
        element: TestReduxjsToolkitBuyList,
      },
      {
        path: 'count',
        element: TestReduxjsToolkitCount,
      },
    ],
  },
];
