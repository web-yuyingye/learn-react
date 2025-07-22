import { useState, useRef } from 'react';
import { defaultData, panelType, findPanelDescription } from './config.ts';
import { CSSTransition } from 'react-transition-group';

import FormData from './components/form-data';
import PanelTitle from './components/panel-title';
import PanelList from './components/panel-list';

import classNames from 'classnames/bind';
import cssStyle from './components/test-transition-group-other.module.css';
import './transition.css';

const cls = classNames.bind(cssStyle);

function TestTransitionGroup() {
  const [info, setInfo] = useState({ ...defaultData });
  const [showForm, setShowForm] = useState(false);
  const [selectPanelType, setPanelType] = useState(panelType.stock);

  const FormRef = useRef(null);
  const PanelListRef = useRef(null);

  function formHidden() {
    setShowForm(false);
  }

  function getCountName() {
    switch (selectPanelType) {
      case panelType.stock:
        return '库存';
      case panelType.goods:
        return '价格';
      default:
        return '';
    }
  }

  function clickAdd() {
    setInfo({ ...defaultData });
    setShowForm(true);
  }

  function addOrUpdate() {
    PanelListRef.current.clickChangeInfo(
      info,
      !(info.index < 0) ? info.index : undefined
    );
  }

  function clickUpdate() {
    setShowForm(true);
  }

  return (
    <div className={cls('content')}>
      <CSSTransition
        nodeRef={FormRef}
        in={showForm}
        timeout={1000}
        classNames="trans-form"
      >
        <div ref={FormRef} className={cls('trans-form')}>
          <FormData
            operationName={info.index < 0 ? '新增' : '修改'}
            typeName={findPanelDescription(selectPanelType)}
            name={getCountName()}
            data={info}
            formHidden={formHidden}
            setData={setInfo}
            addOrUpdate={addOrUpdate}
          ></FormData>
        </div>
      </CSSTransition>
      <PanelTitle
        type={selectPanelType}
        setPanelType={setPanelType}
      ></PanelTitle>
      <PanelList
        onRef={PanelListRef}
        type={selectPanelType}
        setInfo={setInfo}
        clickAdd={clickAdd}
        clickUpdate={clickUpdate}
      ></PanelList>
      <p className="tips">
        tips:
        react使用过渡动画react-transition-group，点击添加、修改、删除功能查看动画
      </p>
    </div>
  );
}

export default TestTransitionGroup;
