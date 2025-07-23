import { configureStore } from '@reduxjs/toolkit';
import { buyGoodsListCreateSlice, countCreateSlice } from './reducer';

/**
 * 关于@reduxjs/toolkit：
 * 1.现推荐使用的库是@reduxjs/toolkit；
 * 2.dispatch调用的方法: 创建片段name/方法名称，方法名称可重复，片段名称不可重复；
 *
 * @reduxjs/toolkit提供的API：
 * 1.configureStore: 接受命名选项参数，通过单个函数调用设置一个配置完善的redux store，合并reducer、添加thunk中间件以及设置redux Devtools集成。
 * 格式：
 * configureStore({
 *   reducer: {
 *     aliasName: reducerName.reducer
 *   }
 * })
 *
 * 2.createSlice: 使用Immer(https://immerjs.github.io/immer/)库来编写reducer；
 * 格式：
 * const reducerName = createSlice({
 *   name: 'xxx',
 *   initialState: 'value',
 *   reducers: {
 *     functionName(state, actions) {},
 *   },
 * })
 * export default reducerName;
 * export const {functionName} = reducerName.actions;
 *
 * ------------------------------- 以上为基础API -------------------------------
 * 3.createAsyncThunk: 抽象 "异步请求前后分发action" 的模式；
 * 4.createEntityAdapter: 提供预构建的reducer和selector用于状态管理规范化状态 (normalized state) 的CRUD操作；
 * 5.createSelector: 重新导出标准的Reselect API用于构建Memoized选择器；
 * 6.createListenerMiddleware: 一个副作用中间件，用于相应action时之行的某些逻辑；
 */
const store = configureStore({
  reducer: {
    buyGoodsListReducer: buyGoodsListCreateSlice.reducer,
    countReducer: countCreateSlice.reducer,
  },
});

export default store;
