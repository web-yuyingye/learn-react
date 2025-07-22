import classNames from 'classnames/bind';
import styled from '../test-redux.module.css';

import store from '../store';

const cls = classNames.bind(styled);

function TestReduxCount() {
  function addCount() {
    store.dispatch({ type: 'addCount' });
  }
  function minusCount() {
    store.dispatch({ type: 'minusCount' });
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

export default TestReduxCount;
