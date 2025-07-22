/*
 * class 组件
 * 生命周期有：render（渲染函数），componentDidMount（已经挂载组件，需要请求数据也在这个周期），shouldComponentUpdate（是否重新渲染），componentDidUpdate（完成更新），componentWillUnmount（即将卸载）
 */
import React from 'react';

class TestClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 0,
      b: [1, 2, 3],
      c: { str: 'test' },
    };
  }
  showStatueB() {
    return this.state.b.map((item, key) => {
      return <p key={`state.b[${key}]`}>{`state.b[${key}] = ${item}`}</p>;
    });
  }
  showStatueC() {
    return Object.keys(this.state.c).map((key) => (
      <p key={`state.c[${key}]`}>{`state.c[${key}] = ${this.state.c[key]}`}</p>
    ));
  }
  render() {
    console.log('生命周期render');
    function TestClassAddCount() {
      this.props.addCount();
    }

    setTimeout(() => {
      this.setState({ a: 999 });
    }, 2000);

    return (
      <div>
        <h2>使用class方式</h2>
        <p>state = {JSON.stringify(this.state)}</p>
        <p>state a = {this.state.b}</p>
        {this.showStatueB()}
        {this.showStatueC()}
        <button onClick={TestClassAddCount}>
          class 组件按钮，点击count + 1
        </button>
      </div>
    );
  }
  componentDidMount() {
    console.log('生命周期componentDidMount');
  }
  shouldComponentUpdate() {
    console.log('生命周期shouldComponentUpdate');
    return false;
  }
  componentDidUpdate() {
    console.log('生命周期componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('生命周期componentWillUnmount');
  }
}

export default TestClass;
