import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Profile.css';

const Name = ({ name }) => {
  return (
    <div className="profile-field">
      <FontAwesomeIcon
        className="fas fa-user fa-lg"
        css={{
          color: 'black',
        }}
        icon="user"
      />{' '}
      &nbsp; Name: &emsp;&emsp; {name}
    </div>
  );
};

export default Name;
