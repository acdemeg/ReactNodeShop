import React from 'react';
import './Cart.css';
import { messages } from '../../constants';

const MakeOrderButton = ({ makeOrder, items, orderTotal }) => {
  let getClassStyle = items => {
    if (items.length === 0) {
      return 'make-order m-o-disabled';
    }
    return 'make-order';
  };

  return (
    <div
      onClick={() => makeOrder(orderTotal, items, messages.MAKE_ORDER)}
      className={getClassStyle(items)}
    >
      MAKE ORDER
    </div>
  );
};

export default MakeOrderButton;
