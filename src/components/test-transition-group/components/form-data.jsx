import { useState, useEffect } from 'react';
import { defaultData } from '../config.ts';

import classNames from 'classnames/bind';
import cssStyle from './test-transition-group-other.module.css';

const cls = classNames.bind(cssStyle);

function FormData({
  typeName,
  operationName,
  name,
  data,
  formHidden,
  setData,
  addOrUpdate,
}) {
  const [info, setInfo] = useState({ ...data });

  useEffect(() => {
    setInfo({ ...data });
  }, [data]);

  function inputChange(key, event) {
    const newInfo = { ...info };
    newInfo[key] = event.target.value;
    setInfo(newInfo);
    setData(newInfo);
  }

  function cancel() {
    setInfo({ ...defaultData });
    setData({ ...defaultData });
    formHidden();
  }

  return (
    <div className={cls('form-data-content')}>
      <h3>
        {operationName}
        {typeName}
      </h3>
      <div className={cls('form-data-item')}>
        <p className={cls('item-name')}>商品名称：</p>
        <input
          type="text"
          name="goodsName"
          value={info.goodsName}
          onChange={inputChange.bind(this, 'goodsName')}
        />
      </div>
      <div className={cls('form-data-item')}>
        <p className={cls('item-name')}>{name}：</p>
        <input
          type="number"
          name="count"
          value={info.count}
          onChange={inputChange.bind(this, 'count')}
        />
      </div>
      <div className={cls('form-data-item')}>
        <button onClick={addOrUpdate}>确认{operationName}</button>
        <button onClick={cancel}>取消</button>
      </div>
    </div>
  );
}

export default FormData;
