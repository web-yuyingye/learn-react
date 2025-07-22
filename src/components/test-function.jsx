/*
 * function 组件
 * 生命周期使用 react 重的 useEffect（class 组件中生命周期的 componentDidMount 和 componentDidUpdate 的结合体），接收参数有两个，即：useEffect(() => {}, [])，
 * 第一个参数是函数，发生改变后调用；
 * 第二个参数是数组类型，传空数组则为 componentDidMount 周期，传改变对象则为 componentDidUpdate 周期；
 *
 */
import { useState } from 'react';

function TestFunction({ count, addCount }) {
  function TestFunctionAddCount() {
    addCount();
  }

  const [bool, changBool] = useState(true);

  function buttonDescription() {
    let desc = '隐藏';
    if (bool) desc = '显示';
    return desc;
  }

  function buttonOnclick(event) {
    console.log(event);
    const newBool = !bool;
    changBool(newBool);
  }

  function showBoolDetail() {
    return (
      <div>
        当前 bool = {`${bool}`}，按钮显示文字为：{buttonDescription()}
      </div>
    );
  }

  return (
    <div>
      <h2>使用function方式</h2>
      {showBoolDetail()}
      <button onClick={buttonOnclick}>{buttonDescription()}</button>
      <p>这是 function 组件 count = {count}</p>
      <button onClick={TestFunctionAddCount}>
        function组件按钮，点击count+1
      </button>
    </div>
  );
}

export default TestFunction;
