/**
 * 关于redux的前言：
 * 1.redux 通用于所有的前端框架；
 * 2.createStore已经废弃，但是仍然可以使用；
 * 3.dispatch调用的方法只能通过actions的名称区分，所以名称不可重复；
 *
 * redux提供以下API：
 * 1.createStore：创建一个redux存储实例；
 * 2.combineReducers：将多个reducer函数合并成为一个更大的reducer函数；
 * 3.applyMiddleware：将多个中间组件合并成一个store增强器；
 * 4.compose：将多个store增强器合并成一个单一的store增强器；
 */
import reducer from './reducer';

// 1. 老版使用redux方法
import { createStore } from 'redux';
const store = createStore(reducer);
export default store;
