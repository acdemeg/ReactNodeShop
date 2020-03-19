import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import style from './styleNavBar';
import { Basket } from '../components/Cart';
import NavLinkComponent from './NavLinkComponent';

function NavigationForUnLogInUsers() {
  return (
    <>
      <ul>
        <li style={{ font: 'bold italic 120% serif' }}>
          <NavLink className="nav-link navbar-item" to="/">
            DIGITAL MARKET
          </NavLink>
        </li>
        <NavLinkComponent path="/productPage" title="Products" />
      </ul>
      <ul style={style.cartAndProfileStyle}>
        <NavLinkComponent path="/authorizationPage" title="Log In" />
        <Basket />
      </ul>
    </>
  );
}

export default NavigationForUnLogInUsers;
