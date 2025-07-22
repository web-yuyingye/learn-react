// import { useState } from 'react';
import './App.css';

// import TestFunction from './components/test-function';
// import TestClass from './components/test-class';
// import TestPractise from './components/test-practise/test-practise';
// import TestPractiseCss from './components/test-practise-css/test-practise-css';
// import TestTransitionGroup from './components/test-transition-group/test-transition-group';
// import TestMoveDom from './components/test-move-dom/test-move-dom';
import TestRouter from './components/test-router/test-router';

function App() {
  // const [count, setCount] = useState(0);
  // function addCount() {
  //   setCount((count) => count + 1);
  // }

  return (
    <>
      {/* <TestTransitionGroup></TestTransitionGroup>
      <TestPractiseCss></TestPractiseCss>
      <TestPractise></TestPractise>
      <TestFunction count={count} addCount={addCount}></TestFunction>
      <TestClass count={count} addCount={addCount}></TestClass>
      <TestMoveDom></TestMoveDom> */}
      <TestRouter></TestRouter>
    </>
  );
}

export default App;
