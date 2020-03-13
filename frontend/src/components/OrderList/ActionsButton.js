import React, { useState } from 'react';
import './Order.css';
import { messages } from '../../constants';

const ActionsButton = ({ actions }) => {
  const [nameClass, setNameClass] = useState('dropdown');

  return (
    <div className="actions-order">
      <div className={nameClass}
           onClick={() => {(nameClass === 'dropdown') ? 
            setNameClass('dropdown is-active') : setNameClass('dropdown') }}
      >
        <span style={{marginLeft: '50px'}}>ACTIONS</span>
        <div className="dropdown-menu" id="dropdown-menu" role="menu" 
          style={{textAlign: 'left', paddingTop: 0,  minWidth: '170px'}}>
          <div className="dropdown-content">
            <a href="#" className="dropdown-item">
              Cancel
            </a>
            <a href="#" className="dropdown-item">
              Accomplish
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionsButton;
