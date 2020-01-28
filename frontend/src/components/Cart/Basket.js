import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

function Basket() {
  return (
    <li>
      <div className="button" style={{ backgroundColor: 'inherit' }}>
        <NavLink className="nav-link" to="/cartPage">
          <FontAwesomeIcon
            className="fas fa-shopping-basket fa-lg"
            css={{
              color: 'black',
            }}
            icon="shopping-basket"
          />
        </NavLink>
      </div>
    </li>
  );
}

export default Basket;
