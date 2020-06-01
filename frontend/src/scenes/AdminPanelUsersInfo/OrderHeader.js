import React from 'react';
import style from './UsersInfo.scss';

const OrderHeader = () => (
  <div className={style.orderHeader}>
    <div>Name Product</div>
    <div>Price</div>
    <div>Status</div>
    <div>Total cost</div>
    <div>Action</div>
  </div>
);

export default OrderHeader;
