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
          <p style={{ float: 'left' }}>Courier &emsp; </p>
          <div className="info-order-form-field">name &nbsp; +7 XXX XXX XX-XX</div>
        </div>

        <div>
          <p style={{ float: 'left' }}>Status &emsp; </p>
          <div className="info-order-form-field" style={{ float: 'left' }}>
            &nbsp; delivered &emsp;
          </div>
          <div>
            <p>
              <button className="button is-rounded is-small action-button" type="submit">
                <p style={{ fontSize: '11pt' }}>action</p>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCardOrder;
