import React from 'react';
import { scenesEnum } from '../../constants';

const AlertText = ({ scene, textAlert }) => {
  if (scene === scenesEnum.PRODUCT_LIST) {
    return (
      <div>
        {' '}
        Продукт <strong>{textAlert}</strong> добавлен в корзину{' '}
      </div>
    );
  }
  return <strong>{textAlert}</strong>;
};

export default AlertText;
