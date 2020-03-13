import React, { useEffect } from 'react';
import Order from './Order';
import { connect } from 'react-redux';
import Spinner from '../Spinner';
import { fetchOrders } from '../../store/actions';
import appServiceData from '../../App/appServiceData';
import './OrderList.css';

const OrderList = ({ orders }) => {
  return (
    <div>
      <div className="order-status-title">current orders</div>
      {orders.map(order => (
        <Order key={order.id} order={order} />
      ))}
      <div className="order-status-title">orders history</div>
    </div>
  );
};

const OrderListContainer = ({ orders, loading, error, fetchOrders }) => {
  console.log('In Order List');
  console.log(orders);
  useEffect(() => {
    fetchOrders();
  }, []);

  console.log('In Order List');
  console.log(orders);
  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return <OrderList orders={orders} />;
};

const mapStateToProps = ({ orderList: { orders, loading, error } }) => {
  return { orders, loading, error };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: fetchOrders(appServiceData, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderListContainer);
