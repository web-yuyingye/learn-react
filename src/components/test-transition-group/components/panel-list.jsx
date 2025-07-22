import { useState, useImperativeHandle } from 'react';
import { panelType, findPanelDescription } from '../config.ts';

import classNames from 'classnames/bind';
import cssStyle from './test-transition-group-other.module.css';

const cls = classNames.bind(cssStyle);

function PanelList({ type, onRef, setInfo, clickAdd, clickUpdate }) {
  const [shopData, setShopData] = useState({
    stock: [
      { goodsName: '电脑', stock: 100 },
      { goodsName: '手机', stock: 100 },
      { goodsName: '平板', stock: 100 },
    ],
    goods: [
      { goodsName: 'xxx电脑', price: 10000 },
      { goodsName: 'xxx手机', price: 6000 },
      { goodsName: 'sss手机', price: 5000 },
      { goodsName: 'sss平板', price: 8000 },
    ],
  });

  function deleteItem(index) {
    delete shopData.goods[index];
    const stock = shopData.stock;
    const goods = shopData.goods.filter((item) => item);
    setShopData({ stock, goods }, () => {
      alert('删除成功');
    });
  }

  function updateItem(index) {
    const item = shopData[type].find((item, idx) => idx === index);
    const newInfo = { goodsName: item.goodsName, index };
    if (type === panelType.stock) newInfo.count = item.stock;
    else if (type === panelType.goods) newInfo.count = item.price;
    setInfo(newInfo);
    clickUpdate();
  }

  function showStockPanel() {
    return (
      <ol className={cls('panel-ol')}>
        {shopData.stock.map((info, index) => {
          return (
            <li key={`${info.goodsName}${info.stock}`}>
              <div className={cls('panel-list-item')}>
                <p>
                  {index + 1}. 商品名称：{info.goodsName}
                </p>
                <p>库存：{info.stock}</p>
                <button onClick={updateItem.bind(this, index)}>修改</button>
              </div>
            </li>
          );
        })}
      </ol>
    );
  }

  function showGoodsPanel() {
    return (
      <ol className={cls('panel-ol')}>
        {shopData.goods.map((info, index) => {
          return (
            <li key={`${info.goodsName}${info.price}`}>
              <div className={cls('panel-list-item')}>
                <p>
                  {index + 1}. 商品名称：{info.goodsName}
                </p>
                <p>价格：{info.price}</p>
                <button onClick={deleteItem.bind(this, index)}>删除</button>
                <button onClick={updateItem.bind(this, index)}>修改</button>
              </div>
            </li>
          );
        })}
      </ol>
    );
  }

  function clickChangeInfo(newInfo, index) {
    const data = [...shopData[type]];
    const obj = { goodsName: newInfo.goodsName };
    let stock, goods;
    if (type === panelType.stock) {
      obj.stock = newInfo.count;
      index === undefined ? data.push(obj) : (data[newInfo.index] = obj);
      goods = shopData.goods;
      stock = data;
    } else if (type === panelType.goods) {
      obj.price = newInfo.count;
      index === undefined ? data.push(obj) : (data[newInfo.index] = obj);
      goods = data;
      stock = shopData.stock;
    }
    setShopData({ stock, goods });
  }

  //用useImperativeHandle暴露一些外部ref能访问的属性
  useImperativeHandle(onRef, () => {
    // 需要将暴露的接口返回出去
    return {
      clickChangeInfo,
    };
  });
  return (
    <div>
      <div className={cls('panel-list-div')}>
        <div className={type === panelType.stock ? '' : cls('panel-hidden')}>
          {showStockPanel()}
        </div>
        <div className={type === panelType.goods ? '' : cls('panel-hidden')}>
          {showGoodsPanel()}
        </div>
      </div>
      <button onClick={clickAdd}>添加{findPanelDescription(type)}</button>
    </div>
  );
}

export default PanelList;
