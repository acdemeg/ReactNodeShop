import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Profile.css';

const Phone = ({ phone }) => {
  return (
    <div className="profile-field">
      <FontAwesomeIcon
        className="fas fa-phone-square-alt fa-lg"
        css={{
          color: 'black',
        }}
        icon="phone-square-alt"
      />{' '}
      &nbsp; Phone: &emsp;&nbsp;&nbsp;&nbsp; {phone}
    </div>
  );
};

export default Phone;
