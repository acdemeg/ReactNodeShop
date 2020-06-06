import React from 'react';
import { 
  wrapperProductInfo,
  productInfo,
  photoWrapper,
  addToCartDisabled
} from './ProductInfo.scss'

const ProductInfoCard = ({ product, onAddedToCart, isLoggedIn }) => {
  const { id, nameProduct, count, description, price, pathImage } = product;

  return (
    <div className={wrapperProductInfo}>
      <div className={photoWrapper}>
      <img src={`/upload/products/${pathImage}`} alt="productPhoto" width="400px" height="400px"/>
      </div>
      <div className={productInfo}>
        <div>
          <p>
            Название:&emsp;
            <i style={{ color: 'blue' }}>{nameProduct}</i>
          </p>
        </div>
        <div>
          <p>
            Остаток на складе:&emsp;
            <i style={{ color: 'blue' }}>{count}</i>
          </p>
        </div>
        <div>
          <p>
          Цена:&emsp;
            <i style={{ color: 'blue' }}>{price}&#8381;</i>
          </p>
        </div>
        <div>
          Описание:&emsp;
            <i style={{ color: 'gray', overflowWrap: "anywhere"}}>{description}</i>
        </div>
        <div>
          <button
            onClick={() => onAddedToCart(id, nameProduct)}
            className={`button is-rounded is-small add-to-card 
              ${(isLoggedIn) ? null : addToCartDisabled}`}
            type="submit"
            value="Add to cart"
          >
            Добавить в корзину
          </button>
      </div>
      </div>
    </div>
  );
};

export default ProductInfoCard;