import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Profile.css';

// Please check your all code for CopyPaste and fix it.
// --mrurenko 2020-01-14
const Balance = ({ balance }) => {
  return (
    <div className="profile-field">
      <FontAwesomeIcon
        className="fas fa-wallet fa-lg"
        css={{
          color: 'black',
        }}
        icon="wallet"
      />{' '}
      &nbsp; Balance: &emsp; {balance + '$'}
    </div>
  );
};

export default Balance;
