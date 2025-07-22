import { NavLink } from 'react-router-dom';

import styled from './styled.module.css';
import classNames from 'classnames/bind';

const cls = classNames.bind(styled);

function Menu({ menuList }) {
  return (
    <div className={cls('menu-list')}>
      {menuList.map((item, index) => {
        return (
          <p key={`${item.menuName}${index}`}>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? cls('link-active') : cls('link-item')}`
              }
              to={item.path}
            >
              {item.menuName}
            </NavLink>
          </p>
        );
      })}
    </div>
  );
}

export default Menu;
