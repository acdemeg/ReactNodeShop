import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchFullInfo, UPDATE_ORDER } from '../../store/actions';
import Spinner from '../../components/Spinner';
import ErrorIndicator from '../../components/Error-boundry/Error-indicator'
import style from './UsersInfo.scss';
import UserProfile from './UserProfile';
import UserOrders from './UserOrders';
import SearchBar from './SearchBar';
import { scenesEnum, usersRoleEnum } from '../../constants';
import ShowNotification from '../../components/ShowNotification';

const UsersInfo = ({
  role,
  isLoggedIn, 
  users: { users }, 
  orderList: { orders, error, loading }, 
  notifications, 
  fetchData,
  updateOrder,
 }) => {

  useEffect(() => {
    fetchData();
  }, []);

  const usersShop = users.sort((a, b) => a.id - b.id);
  const [user, setUser] = useState(usersShop[0]);


  if(role !== usersRoleEnum.ADMIN){
    return null;
  }


  if(!isLoggedIn){
    return null;
  }

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <div className={style.googleFont}>Users Info</div>
      <div className={style.wrapper}>
        <div className={style.wrapperUser}>
          <SearchBar users={usersShop} setUser={setUser} />
          <UserProfile user={user} orders={orders} />
        </div>
        <UserOrders user={user} orders={orders} updateOrder={updateOrder} />
      </div>
      <ShowNotification notifications={notifications} currentScene={scenesEnum.ADMIN_USERS_INFO} />
    </div>
  );
};

const mapStateToProps = ({
  notifications,
  orderList,
  users,
  profile: { role },
  authorization: { isLoggedIn }
}) => ({
  notifications,
  orderList,
  users,
  role,
  isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => fetchFullInfo(dispatch),
  updateOrder: (id, newStatus, userId, profile, orderTotal, scene) => {
    UPDATE_ORDER(id, newStatus, userId, profile, orderTotal, scene, dispatch)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersInfo);