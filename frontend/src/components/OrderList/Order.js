import React from 'react';
import InfoCardOrder from '../InfoCardOrder';
import Container from '../ProductList/styleProducts';
import OrderHeader from './OrderHeader';
import OrderFooter from './OrderFooter';
import './Order.css';

const Order = ({ order }) => {
  return (
    <div className="order">
      <OrderHeader />
      <Container>
        {order.products.map(item => (
          <InfoCardOrder key={item.id} item={item} />
        ))}
      </Container>
      <OrderFooter orderTotal={order.total} />
    </div>
  );
};

export default Order;
