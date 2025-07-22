import { useState, useEffect } from 'react';
import styled from '../test-reduxjs-toolkit.module.css';
import classNames from 'classnames/bind';
import store from '../store';

const cls = classNames.bind(styled);

function TestReduxjsToolkitBuyList() {
  const [buyGoodsList, setBuyGoodsList] = useState(
    store.getState().buyGoodsListReducer
  );
  useEffect(() => {
    // 数据订阅
    store.subscribe(() => {
      setBuyGoodsList(store.getState().buyGoodsListReducer);
    });
  }, []);

  function del(goods) {
    store.dispatch({ type: 'buyGoodsList/deleteGoods', goods });
  }

  return (
    <div>
      {buyGoodsList.length ? (
        buyGoodsList.map((goods) => {
          return (
            <div key={`buy${goods.goodsName}`} className={cls('flex')}>
              <p>商品名称：{goods.goodsName}</p>
              <p>商品价格：{goods.price}</p>
              <button onClick={del.bind(this, goods)}>删除</button>
            </div>
          );
        })
      ) : (
        <p>暂无数据，请去商品列表添加商品到购物车</p>
      )}
    </div>
  );
}

export default TestReduxjsToolkitBuyList;
