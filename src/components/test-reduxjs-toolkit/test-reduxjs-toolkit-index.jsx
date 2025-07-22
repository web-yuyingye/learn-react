import { Routes, Route, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import store from './store';

import classNames from 'classnames/bind';
import styled from './test-reduxjs-toolkit.module.css';

const cls = classNames.bind(styled);

function TestReduxjsToolkitIndex({ children }) {
  const menuList = [
    { name: '商品列表', path: '/react-reduxjs-toolkit/goodsList' },
    { name: '购物车', path: '/react-reduxjs-toolkit/buyGoodsList' },
    { name: 'count', path: '/react-reduxjs-toolkit/count' },
  ];

  const [count, setCount] = useState(store.getState().countReducer);

  useEffect(() => {
    store.subscribe(() => {
      setCount(store.getState().countReducer);
    });
  }, []);

  return (
    <div className={cls('index')}>
      <div className={cls('menu-list', 'flex')}>
        {menuList.map((menuItem) => {
          return (
            <NavLink
              key={`menu${menuItem.path}`}
              className={({ isActive }) => (isActive ? cls('link-active') : '')}
              to={menuItem.path}
            >
              {menuItem.name}
            </NavLink>
          );
        })}
      </div>
      <p>当前count的值为：{count}</p>
      <Routes>
        {children.map((item) => {
          return (
            <Route
              key={`route${item.path}`}
              path={item.path}
              element={<item.element />}
            ></Route>
          );
        })}
      </Routes>
    </div>
  );
}

export default TestReduxjsToolkitIndex;
