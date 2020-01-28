import React from 'react';
import InfoCardDelivery from '../InfoCardDelivery';
import Container from '../ProductList/styleProducts';
import { connect } from 'react-redux';
import Spinner from '../Spinner';
import './DeliveryList.css';

const DeliveryList = ({ orders }) => {
  return (
    <div>
      <div className="delivery-status-title">current orders</div>
      <Container>
        {orders.map(item => (
          <InfoCardDelivery key={item.id} item={item} />
        ))}
      </Container>
      <div className="delivery-status-title">orders history</div>
    </div>
  );
};

const DeliveryListContainer = ({ orders, loading }) => {
  if (loading) {
    return <Spinner />;
  }

  return <DeliveryList orders={orders} />;
};

const mapStateToProps = ({ orderList: { orders, loading } }) => {
  return { orders, loading };
};

export default connect(
  mapStateToProps,
  null,
)(DeliveryListContainer);
