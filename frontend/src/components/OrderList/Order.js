import React, { useEffect } from 'react';
import InfoCardOrder from '../InfoCardOrder';
import Container from '../ProductList/styleProducts';
import OrderHeader from './OrderHeader';
import OrderFooter from './OrderFooter';
import './Order.css';

const Order = ({ order, updateOrder, profile}) => {

  return (
    <div className="order">
      <OrderHeader />
      <Container>
        {order.products.map(item => (
          <InfoCardOrder 
            key={item.id}
            item={item}
            status={order.status}
            count={order.productsInOrder.find(v => v.productId === item.id).count}  
            />
        ))}
      </Container>
      <OrderFooter 
        orderTotal={order.total}
        orderId={order.id}
        updateOrder={updateOrder} 
        profile={profile}/>
    </div>
  );
};

export default Order;
