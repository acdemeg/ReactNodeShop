import React from 'react';
import MakeOrderButton from './MakeOrderButton';
import './Cart.css';

const CartFooter = ({ orderTotal, makeOrder, items }) => {
  return (
    <div className="cart-footer">
      <div className="left">
        <span style={{ fontSize: '15pt' }}>
          &emsp;Order &nbsp; summary &emsp; {`${orderTotal}$`}
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;
        </span>
      </div>
      <div className="right">
        <MakeOrderButton makeOrder={makeOrder} items={items} orderTotal={orderTotal} />
      </div>
    </div>
  );
};

export default CartFooter;
