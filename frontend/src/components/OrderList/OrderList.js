import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Order from './Order';
import Spinner from '../Spinner';
import ErrorIndicator from '../Error-boundry/Error-indicator'
import { fetchOrders, UPDATE_ORDER } from '../../store/actions';
import appServiceData from '../../App/appServiceData';
import './OrderList.css';
import { scenesEnum } from '../../constants';
import ShowNotification from '../ShowNotification';

const OrderList = ({ orders, updateOrder, notifications, profile }) => (
  <div>
    <div className="order-status-title">current orders</div>
    {orders.map(order => (order.status === 'Delivering') ? (
      <Order key={order.id} order={order} updateOrder={updateOrder} profile={profile}/>
    ) : null )}
    <div className="order-status-title">orders history</div>
    {orders.map(order => (order.status !== 'Delivering') ? (
      <Order key={order.id} order={order} updateOrder={"disable"} profile={profile}/>
    ) : null )}
    <ShowNotification notifications={notifications} currentScene={scenesEnum.ORDER_LIST} />
  </div>
);

const OrderListContainer = ({ 
  orders, 
  loading, 
  error, 
  isLoggedIn, 
  userId, 
  fetchOrders, 
  updateOrder,
  notifications,
  profile
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

  return <OrderList
    profile={profile}
    orders={orders}
    updateOrder={updateOrder}
    notifications={notifications}/>;
};

const mapStateToProps = ({ 
  orderList: { orders, loading, error }, 
  authorization: { isLoggedIn, userId },
  notifications,
  profile
}) => ({ orders, loading, error, isLoggedIn, userId, notifications, profile });

const mapDispatchToProps = dispatch => ({
  fetchOrders: (userId) => fetchOrders(appServiceData, dispatch, userId),
  updateOrder: (id, newStatus, userId, profile, orderTotal) => {
    UPDATE_ORDER(id, newStatus, userId, profile, orderTotal, dispatch)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderListContainer);
