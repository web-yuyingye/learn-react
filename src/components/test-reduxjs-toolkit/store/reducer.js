import { createSlice } from '@reduxjs/toolkit';

export const buyGoodsListCreateSlice = createSlice({
  name: 'buyGoodsList',
  initialState: [],
  reducers: {
    addGoods: (state, action) => {
      const list = [...state];
      const goods = { ...action.goods };
      const index = list.findIndex(
        (item) => item.goodsName === goods.goodsName
      );
      if (index < 0) list.push(goods);
      alert('添加成功');
      return list;
    },
    deleteGoods: (state, action) => {
      const list = [...state];
      const goods = { ...action.goods };
      const index = list.findIndex(
        (item) => item.goodsName === goods.goodsName
      );
      if (!(index < 0)) list.splice(index, 1);
      alert('删除成功');
      return list;
    },
  },
});
export const { addGoods, deleteGoods } = buyGoodsListCreateSlice.actions;

export const countCreateSlice = createSlice({
  name: 'count',
  initialState: 0,
  reducers: {
    addCount: (state) => {
      return (state += 1);
    },
    minusCount: (state) => {
      return (state -= 1);
    },
  },
});
export const { addCount, minusCount } = countCreateSlice.actions;
