import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Order from './Order';
import Spinner from '../Spinner';
import ErrorIndicator from '../Error-boundry/Error-indicator'
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

const OrderListContainer = ({ 
  orders, 
  loading, 
  error, 
  isLoggedIn, 
  userId, 
  fetchOrders, 
  updateOrder
 }) => {
  useEffect(() => {
    fetchOrders(userId);
  }, []);

  if(!isLoggedIn){
    return null;
  }

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return <OrderList orders={orders} updateOrder={updateOrder}/>;
};

const mapStateToProps = ({ 
  orderList: { orders, loading, error }, 
  authorization: { isLoggedIn, userId } 
}) => ({ orders, loading, error, isLoggedIn, userId });

const mapDispatchToProps = dispatch => ({
  fetchOrders: (userId) => fetchOrders(appServiceData, dispatch, userId),
  updateOrder: (id, newStatus, userId) => {
    UPDATE_ORDER(id, newStatus, dispatch, userId)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderListContainer);
