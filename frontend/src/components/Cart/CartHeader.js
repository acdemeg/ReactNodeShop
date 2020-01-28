import React from 'react';
import './Cart.css';

const CartHeader = () => {
  return (
    <div className="cart-header">
      <span style={{ fontSize: '15pt' }}>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Count &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;Title
        &emsp;&emsp;&emsp;&emsp;&emsp;Total&nbsp;price
      </span>
    </div>
  );
};

export default CartHeader;
