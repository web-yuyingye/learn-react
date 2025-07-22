import { useState } from 'react';
import TestPractiseCssStyle from './test-practise-css.module.css';
import classNames from 'classnames/bind';

const cls = classNames.bind(TestPractiseCssStyle);

/*
 * 局部使用css方式：
 * 1.css-module：
 *  独立css文件，文件命名为：xxx.module.css，引入文件后，标签使用方式，className={xxx['定义的className'] / xxx.定义的className}，这个方式需要拼接字符串
 *
 * 2.classnames：
 *  通过第三方库把css库独立引用，
 *  安装库命令：npm i classnames --save
 *  (1) 引入：
 *  import xxxStyle from 'xxx.module.css'
 *  import classNames from 'classnames.bind'
 *  const cls = classNames.bind(xxxStyle)
 *  (2) 使用：
 *  标签内的className={cls('样式1名称', '样式2名称')}
 *  注意：样式名称不需要加'.'
 *
 * 3.styled:
 *  通过第三方库创建自带样式的组件，
 *  安装库命令：npm i styled-components --save
 *  (1) 引入：
 *  import StyledComponents from 'styled-components'
 *  const 组件名 = StyledComponents.标签名称`使用的css样式`；
 *  (2) 使用：
 *  <组件名></组件名>
 *  例：
 *  const testStyledComponentsH1 = StyledComponents.h1`border: 1px solid red`
 *  <testStyledComponentsH1></testStyledComponentsH1>
 *
 *
 */

function TestPractiseCss() {
  const [shopData, changShopData] = useState({
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
  const panelType = {
    stock: 'stock',
    goods: 'goods',
  };
  const panelList = [
    { name: panelType.stock, description: '库存' },
    { name: panelType.goods, description: '商品' },
  ];
  const [currentPanel, changePanel] = useState(panelType.stock);

  function clickChangePanel(type) {
    changePanel(type);
  }

  function showPanelTitle() {
    return (
      <div className={cls('panel-title-div')}>
        {panelList.map((item) => {
          return (
            <p
              key={`${item.name}${item.description}`}
              style={{ width: `${100 / panelList.length}%` }}
              className={cls(
                'panel-title-item',
                item.name === currentPanel ? 'current-panel-title' : ''
              )}
              onClick={clickChangePanel.bind(this, item.name)}
            >
              {item.description}
            </p>
          );
        })}
      </div>
    );
  }

  function showStockData() {
    const list = shopData.stock ?? [];
    return (
      <ol>
        {list.map((item) => {
          return (
            <li key={`${item.goodsName}${item.stock}`}>
              <div className={cls('li-item')}>
                <p>商品名称：{item.goodsName}</p>
                <p>库存：{item.stock}</p>
              </div>
            </li>
          );
        })}
      </ol>
    );
  }

  function deleteItem(index) {
    delete shopData.goods[index];
    const stock = shopData.stock;
    const goods = shopData.goods.filter((item) => item);
    changShopData({ stock, goods }, () => {
      alert('删除成功');
    });
  }

  function showGoodsData() {
    const list = shopData.goods ?? [];
    return (
      <ol>
        {list.map((item, index) => {
          return (
            <li key={`${item.goodsName}${item.price}`}>
              <div className={cls('li-item')}>
                <p>商品名称：{item.goodsName}</p>
                <p>价格：{item.price}</p>
                <button onClick={deleteItem.bind(this, index)}>删除</button>
              </div>
            </li>
          );
        })}
      </ol>
    );
  }

  return (
    <div className={cls('test-css-content')}>
      {showPanelTitle()}
      <div className={cls('panel-div')}>
        <div
          className={
            currentPanel === panelType.stock ? '' : cls('panel-hidden')
          }
        >
          {showStockData()}
        </div>
        <div
          className={
            currentPanel === panelType.goods ? '' : cls('panel-hidden')
          }
        >
          {showGoodsData()}
        </div>
      </div>
      <p className="tips">tips: 练习react使用css，使用classnames第三方库。</p>
    </div>
  );
}

export default TestPractiseCss;
