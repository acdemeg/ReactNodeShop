import React from 'react';
import { typeModalEnum } from '../../../constants';
import '../Profile.css';

const RedactFields = ({ openModal }) => (
  <div style={{ float: 'right' }}>
    <div
      onClick={() => openModal({ type: typeModalEnum.NAME, title: 'Enter your new Name' })}
      className="redact"
      style={{ fontSize: '20pt' }}
    >
      {' '}
      &#9997;{' '}
    </div>

    <div
      onClick={() => openModal({ type: typeModalEnum.PHONE, title: 'Enter your new Phone' })}
      className="redact"
      style={{ fontSize: '20pt' }}
    >
      {' '}
      &#9997;{' '}
    </div>

    <div
      onClick={() => openModal({ type: typeModalEnum.EMAIL, title: 'Enter your new Email' })}
      className="redact"
      style={{ fontSize: '20pt' }}
    >
      {' '}
      &#9997;{' '}
    </div>

    <div
      onClick={() => openModal({ type: typeModalEnum.FILL_UP, title: 'Fill up your balance' })}
      className="redact"
      style={{ fontSize: '15pt' }}
    >
      fill up
    </div>
  </div>
);

export default RedactFields;
