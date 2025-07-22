import classNames from 'classnames/bind';
import styled from '../test-reduxjs-toolkit.module.css';

import store from '../store';

const cls = classNames.bind(styled);

function TestReduxjsToolkitCount() {
  function addCount() {
    store.dispatch({ type: 'count/addCount' });
  }
  function minusCount() {
    store.dispatch({ type: 'count/minusCount' });
  }
  return (
    <div>
      <div className={cls('flex', 'count-buttons')}>
        <button onClick={minusCount}>count-1</button>
        <button onClick={addCount}>count+1</button>
      </div>
    </div>
  );
}

export default TestReduxjsToolkitCount;
