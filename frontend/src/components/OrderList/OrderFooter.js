import React from 'react';
import ActionsButton from './ActionsButton';
import './Order.css';

const OrderFooter = ({ orderTotal, orderId, updateOrder }) => (
  <div className="order-footer">
    <div className="left">
      <span style={{ fontSize: '15pt' }}>
        &emsp;TOTAL &emsp; {`${orderTotal}$`}
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;
      </span>
    </div>
    <div className="right">
      <ActionsButton orderId={orderId} updateOrder={updateOrder}/>
    </div>
  </div>
);

export default OrderFooter;
