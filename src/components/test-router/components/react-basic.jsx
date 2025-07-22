import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import styled from './styled.module.css';
import classNames from 'classnames/bind';

const cls = classNames.bind(styled);

function ReactBasic({ children }) {
  const [count, setCount] = useState(0);
  function addCount() {
    setCount((count) => count + 1);
  }

  return (
    <div>
      <div className={cls('basic-content-nav', 'menu-list')}>
        <NavLink
          className={({ isActive }) =>
            isActive ? cls('basic-link-active') : ''
          }
          to="/react-basic/class"
        >
          class写法
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? cls('basic-link-active') : ''
          }
          to="/react-basic/function"
        >
          function写法
        </NavLink>
      </div>
      <div>
        <Routes>
          {(children ?? []).map((item) => {
            return (
              <Route
                path={item.path}
                element={<item.element count={count} addCount={addCount} />}
              ></Route>
            );
          })}
        </Routes>
      </div>
    </div>
  );
}

export default ReactBasic;
