import { useState } from 'react';
import { panelList } from '../config.ts';

import classNames from 'classnames/bind';
import cssStyle from './test-transition-group-other.module.css';

const cls = classNames.bind(cssStyle);

function PanelTitle({ type, setPanelType }) {
  const [currentPanel, setType] = useState(type);

  function clickChangePanel(type) {
    setType(type);
    setPanelType(type);
  }

  function setPanelTag() {
    return panelList.map((titleInfo) => {
      return (
        <p
          key={`${titleInfo.name}${titleInfo.description}`}
          style={{ width: `${100 / panelList.length}%` }}
          className={cls(
            'panel-title-item',
            titleInfo.name === currentPanel ? 'current-panel-title' : ''
          )}
          onClick={clickChangePanel.bind(this, titleInfo.name)}
        >
          {titleInfo.description}
        </p>
      );
    });
  }

  return <div className={cls('panel-title-div')}>{setPanelTag()}</div>;
}

export default PanelTitle;
