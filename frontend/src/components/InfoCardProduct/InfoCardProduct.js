import React from 'react';
import style from './styleInfoCardProduct';
import './InfoCardProduct.css';

function InfoCardProduct({ item, onAddedToCart }) {
  const { nameProduct, description, price, pathImage } = item;

  return (
    <div style={style.infoCardForm}>
      <div style={style.imagePlace}>
        <img src={`/upload/${pathImage}`} width="180px" height="180px" />
      </div>
      <div style={style.titleProduct}>
        <div style={{ marginLeft: '10px' }}>
          <p style={style.titleProduct.name}>{nameProduct}</p>
          <p style={style.titleProduct.description}>{description}</p>
        </div>
      </div>
      <div style={style.price}>
        <p style={style.price.product}>{`${price}$`}</p>
      </div>
      <div style={style.addToCardButton}>
        <button
          onClick={onAddedToCart}
          className="button is-rounded is-small add-to-card"
          type="submit"
          value="Add to cart"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default InfoCardProduct;
