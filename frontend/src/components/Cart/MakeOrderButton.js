import React from 'react';
import { connect } from 'react-redux';
import './Cart.css';
import { messages } from '../../constants';

const MakeOrderButton = ({ makeOrder, items, orderTotal, userId }) => {
  const getClassStyle = items => {
    if (items.length === 0) {
      return 'make-order m-o-disabled';
    }
    return 'make-order';
  };

  return (
    <div
      onClick={() => makeOrder(orderTotal, items, messages.MAKE_ORDER, userId)}
      className={getClassStyle(items)}
    >
      MAKE ORDER
    </div>
  );
};

const mapStateToProps = ({
  authorization: { userId }, 
}) => ({ userId });

export default connect(
  mapStateToProps,
  null,
)(MakeOrderButton);
