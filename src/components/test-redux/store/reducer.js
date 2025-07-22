import { combineReducers } from 'redux';

function buyGoodsListReducer(state = [], action) {
  const list = [...state];
  const goods = { ...action.goods };
  const index = list.findIndex((item) => item.goodsName === goods.goodsName);
  switch (action.type) {
    case 'addGoods':
      if (index < 0) list.push(goods);
      alert('添加成功');
      return list;
    case 'deleteGoods':
      if (!(index < 0)) list.splice(index, 1);
      alert('删除成功');
      return list;
    default:
      return state;
  }
}

function countReducer(state = 0, action) {
  let count = state;
  switch (action.type) {
    case 'addCount':
      count += 1;
      return count;
    case 'minusCount':
      count -= 1;
      return count;
    default:
      return count;
  }
}

// 单个reducer直接导出，多个则使用combineReducers合并后导出，获取数据使用.getState()
export default combineReducers({ buyGoodsListReducer, countReducer });
