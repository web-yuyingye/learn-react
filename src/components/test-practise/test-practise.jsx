import { useState } from 'react';
// import './test-practise.css'; // 这种引用全局一起使用
import TestPractiseStyle from './test-practise.module.css';

function TestPractise() {
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

  const [showType, changShowType] = useState('goods');
  const [list, changList] = useState(
    JSON.parse(JSON.stringify(shopData[showType] ?? []))
  );

  function selectPanel(type) {
    console.log('type =', type);
    changShowType(type);
    const newList = JSON.parse(JSON.stringify(shopData[type] ?? []));
    changList(newList);
  }

  function deleteItem(index) {
    delete list[index];
    const newList = list.filter((item) => item);
    changList(newList);
    const stock = JSON.parse(JSON.stringify(shopData.stock ?? []));
    const goods = JSON.parse(JSON.stringify(newList ?? []));
    changShopData({ stock, goods });
  }

  function showDetailItem(item, index) {
    if (showType === 'stock') return <p>商品库存：{item?.stock}</p>;
    if (showType === 'goods') {
      return (
        <div className={TestPractiseStyle['flex']}>
          <p>商品价格：{item?.price}</p>
          <button onClick={deleteItem.bind(this, index)}>删除</button>
        </div>
      );
    }
  }

  function showList() {
    if (!list?.length) return <span>暂无数据</span>;
    return (
      <ol>
        {list?.map((item, index) => {
          return (
            <li key={`${item.goodsName}`}>
              <div className={TestPractiseStyle['flex']}>
                <p>商品名称：{item.goodsName}</p>
                {showDetailItem(item, index)}
              </div>
            </li>
          );
        })}
      </ol>
    );
  }

  return (
    <div className={TestPractiseStyle['practise-content']}>
      <div className={TestPractiseStyle['flex']}>
        <p
          className={`${TestPractiseStyle['panel-title']} ${
            showType === 'stock' ? TestPractiseStyle['panel-title-active'] : ''
          }`}
          onClick={selectPanel.bind(this, 'stock')}
        >
          库存
        </p>
        <p
          className={`${TestPractiseStyle['panel-title']} ${
            showType === 'goods' ? TestPractiseStyle['panel-title-active'] : ''
          }`}
          onClick={selectPanel.bind(this, 'goods')}
        >
          商品
        </p>
      </div>
      {showList()}
      <p className="tips">
        tips: react练习循环渲染、条件渲染、事件绑定等，附带css用法。
      </p>
    </div>
  );
}

export default TestPractise;
