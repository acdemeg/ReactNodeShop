import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Order from './Order';
import Spinner from '../Spinner';
import { fetchOrders, UPDATE_ORDER } from '../../store/actions';
import appServiceData from '../../App/appServiceData';
import './OrderList.css';

const OrderList = ({ orders, updateOrder }) => (
  <div>
    <div className="order-status-title">current orders</div>
    {orders.map(order => (order.status === 'Delivering') ? (
      <Order key={order.id} order={order} updateOrder={updateOrder}/>
    ) : null )}
    <div className="order-status-title">orders history</div>
    {orders.map(order => (order.status !== 'Delivering') ? (
      <Order key={order.id} order={order} updateOrder={"disable"}/>
    ) : null )}
  </div>
);

const OrderListContainer = ({ orders, loading, error, fetchOrders, updateOrder }) => {
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

  return <OrderList orders={orders} updateOrder={updateOrder}/>;
};

const mapStateToProps = ({ orderList: { orders, loading, error } }) => ({ orders, loading, error });

const mapDispatchToProps = dispatch => ({
  fetchOrders: fetchOrders(appServiceData, dispatch),
  updateOrder: (id, newStatus) => {
    UPDATE_ORDER(id, newStatus, dispatch)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderListContainer);
