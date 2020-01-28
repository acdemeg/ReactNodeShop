import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import style from './styleNavBar';
import { Basket } from '../components/Cart';
import NavLinkComponent from './NavLinkComponent';

function NavigationForUnLogInUsers() {
  return (
    <Fragment>
      <ul>
        <li style={{ font: 'bold italic 110% serif' }}>
          <NavLink className="nav-link navbar-item" to="/">
            Delivery
          </NavLink>
        </li>
        <NavLinkComponent path={'/productPage'} title={'Products'} />
      </ul>
      <ul style={style.cartAndProfileStyle}>
        <NavLinkComponent path={'/authorizationPage'} title={'Log In'} />
        <Basket />
      </ul>
    </Fragment>
  );
}

export default NavigationForUnLogInUsers;
