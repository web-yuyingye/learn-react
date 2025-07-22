import { configureStore } from '@reduxjs/toolkit';
import { buyGoodsListCreateSlice, countCreateSlice } from './reducer';

/**
 * 1.现推荐使用的库是@reduxjs/toolkit；
 * 2.dispatch调用的方法：创建片段name/方法名称，方法名称可重复，片段名称不可重复；
 */
const store = configureStore({
  reducer: {
    buyGoodsListReducer: buyGoodsListCreateSlice.reducer,
    countReducer: countCreateSlice.reducer,
  },
});

export default store;
