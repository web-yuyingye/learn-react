/**
 * 实现移动 dom 元素
 * @returns
 */
import { useRef, useState } from 'react';

import TestMoveDomStyle from './test-move-dom.module.css';
import classNames from 'classnames/bind';

const cls = classNames.bind(TestMoveDomStyle);

function TestMoveDom() {
  const moveItemDiv = useRef(null);

  const [canMove, setCanMove] = useState(false);
  const [stylePop, setStylePop] = useState({ top: '20%', left: '45%' });
  const [disTance, setDisTance] = useState({ disX: 0, disY: 0 });

  const mouseDown = (e) => {
    setCanMove(true);
    setDisTance({
      disX: e.clientX - moveItemDiv.current.offsetLeft,
      disY: e.clientY - moveItemDiv.current.offsetTop,
    });
  };

  const mouseMove = (e) => {
    if (!canMove) return;
    setStylePop({
      top: e.clientY - disTance.disY,
      left: e.clientX - disTance.disX,
    });
  };

  const mouseUp = () => {
    setCanMove(false);
    setDisTance({
      disX: 0,
      disY: 0,
    });
  };

  return (
    <div>
      <div
        ref={moveItemDiv}
        className={cls('move-item')}
        onMouseDown={mouseDown}
        onMouseMove={mouseMove}
        onMouseUp={mouseUp}
        onMouseLeave={mouseUp}
        style={stylePop}
      >
        <span>拖拽移动</span>
      </div>
    </div>
  );
}

export default TestMoveDom;
