import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import style from './styleNavBar';
import { Basket } from '../components/Cart';
import LogOut from '../components/LogIn/LogOut'
import NavLinkComponent from './NavLinkComponent';

function NavigationForLogInUsers({ userName }) {
  return (
    <>
      <ul>
        <li style={{ font: 'bold italic 110% serif' }}>
          <NavLink className="nav-link navbar-item" to="/">
            Digital Market
          </NavLink>
        </li>
        <NavLinkComponent path="/productPage" title="Products" />
        <NavLinkComponent path="/ordersPage" title="Orders" />
      </ul>
      <ul style={style.cartAndProfileStyle}>
        <NavLinkComponent path="/profilePage" title={userName}/>
        <LogOut />
        <Basket />
      </ul>
    </>
  );
}

export default NavigationForLogInUsers;

