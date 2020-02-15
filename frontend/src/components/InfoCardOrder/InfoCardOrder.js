import React from 'react';
import './InfoCardOrder.css';

function InfoCardOrder({ item }) {
  const { nameProduct, count, total, pathImage } = item;

  return (
    <div className="info-order-form">
      <div className="image-place-order">
        <img src={`/upload/${pathImage}`} width="160px" height="160px" />
      </div>

      <div className="order-place">
        <div style={{ marginBottom: '6px' }}>
          <p>{nameProduct}</p>
        </div>

        <div style={{ marginBottom: '6px' }}>
          <p style={{ float: 'left' }}>Count &emsp; </p>
          <div className="info-order-form-field"> &nbsp;&nbsp;&nbsp; {count} </div>
        </div>

        <div style={{ marginBottom: '6px' }}>
          <p style={{ float: 'left' }}>Total &emsp; </p>
          <div className="info-order-form-field"> &nbsp;&nbsp;&nbsp; {`${total}$`} </div>
        </div>

        <div style={{ marginBottom: '6px' }}>
          <p style={{ float: 'left' }}>Nastya&emsp; </p>
          <div className="info-order-form-field"> +7 XXX XXX XX-XX</div>
        </div>

        <div>
          <p style={{ float: 'left' }}>Status &emsp; </p>
          <div className="info-order-form-field" style={{ float: 'left' }}>
            &nbsp; delivered &emsp;
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCardOrder;
