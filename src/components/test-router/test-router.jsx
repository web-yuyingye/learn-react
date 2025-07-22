import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/menu';
import RouterList from './router';

function TestRouter() {
  const menuList = [
    { menuName: 'React基础', path: '/react-basic' },
    { menuName: 'React练习', path: '/react-practise' },
    { menuName: 'React CSS', path: '/react-css' },
    { menuName: 'React使用过渡动画', path: '/react-transition' },
    { menuName: 'React使用Dom', path: '/react-dom' },
    { menuName: 'React使用Redux', path: '/react-redux' },
    { menuName: 'React使用@reduxjs-toolkit', path: '/react-reduxjs-toolkit' },
  ];

  return (
    <>
      <BrowserRouter>
        <Menu menuList={menuList}></Menu>
        <Routes>
          {RouterList.map((item) => {
            if (item.children) {
              return (
                <Route
                  path={item.path}
                  element={<item.element children={item.children} />}
                ></Route>
              );
            }
            return <Route path={item.path} element={<item.element />}></Route>;
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default TestRouter;
