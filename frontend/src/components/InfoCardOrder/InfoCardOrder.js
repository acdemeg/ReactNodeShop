import React from 'react';
import './InfoCardOrder.css';

function InfoCardOrder({ item, status, count }) {
  const { nameProduct, price, pathImage } = item;

  return (
    <div className="info-order-form">
      <div className="image-place-order">
        <img src={`/upload/products/${pathImage}`} width="160px" height="160px" />
      </div>

      <div className="order-place">
        <div style={{ marginBottom: '6px' }}>
          <p>{nameProduct}</p>
        </div>

        <div style={{ marginBottom: '6px' }}>
          <p style={{ float: 'left' }}>Count &emsp; </p>
          <div className="info-order-form-field">
            {' '}
            &nbsp;&nbsp;&nbsp; {count}{' '}
          </div>
        </div>

        <div style={{ marginBottom: '6px' }}>
          <p style={{ float: 'left' }}>Total &emsp; </p>
          <div className="info-order-form-field">
            {' '}
            &nbsp;&nbsp;&nbsp; {`${price * count}`}{' '}
          </div>
        </div>

        <div>
          <p style={{ float: 'left' }}>Status &emsp; </p>
          <div
            className="info-order-form-field"
            style={{ float: 'left', color: status == 'Done' ? 'MediumSeaGreen' 
                    : status == 'Canceled' ? 'Crimson' : 'Deepskyblue'}}
          >
            &nbsp; {status} &emsp;
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCardOrder;
