import React from 'react';
import InfoCardOrder from '../InfoCardOrder';
import Container from '../ProductList/styleProducts';
import { connect } from 'react-redux';
import Spinner from '../Spinner';
import './OrderList.css';

const OrderList = ({ orders }) => {
  return (
    <div>
      <div className="order-status-title">current orders</div>
      <Container>
        {orders.map(item => (
          <InfoCardOrder key={item.id} item={item} />
        ))}
      </Container>
      <div className="order-status-title">orders history</div>
    </div>
  );
};

const OrderListContainer = ({ orders, loading }) => {
  if (loading) {
    return <Spinner />;
  }

  return <OrderList orders={orders} />;
};

const mapStateToProps = ({ orderList: { orders, loading } }) => {
  return { orders, loading };
};

export default connect(
  mapStateToProps,
  null,
)(OrderListContainer);
