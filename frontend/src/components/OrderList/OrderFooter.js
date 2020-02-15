import React from 'react';
import Actions from './ActionsButton';
import './Order.css';

const OrderFooter = ({ orderTotal, actions }) => {
  return (
    <div className="order-footer">
      <div className="left">
        <span style={{ fontSize: '15pt' }}>
          &emsp;TOTAL &emsp; {`${orderTotal}$`}
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;
        </span>
      </div>
      <div className="right">
        <Actions makeOrder={actions} />
      </div>
    </div>
  );
};

export default OrderFooter;
