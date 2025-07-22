import styled from '../test-reduxjs-toolkit.module.css';
import classNames from 'classnames/bind';
import store from '../store';

const cls = classNames.bind(styled);

function TestReduxjsToolkitList() {
  const goodsList = [
    { goodsName: 'xxx电脑', price: 10000 },
    { goodsName: 'xxx手机', price: 6000 },
    { goodsName: 'sss手机', price: 5000 },
    { goodsName: 'sss平板', price: 8000 },
  ];

  function add(goods) {
    store.dispatch({ type: 'buyGoodsList/addGoods', goods });
  }

  return (
    <div>
      <ol>
        {goodsList.map((item, index) => {
          return (
            <li key={`${item.goodsName}${index}`}>
              <div className={cls('flex')}>
                <p>商品名称：{item.goodsName}</p>
                <p>商品价格：{item.price}</p>
                <button onClick={add.bind(this, item)}>加入购物车</button>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default TestReduxjsToolkitList;
