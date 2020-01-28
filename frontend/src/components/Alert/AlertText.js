import React from 'react';
import { scenesEnum } from '../../constants';

const AlertText = ({ scene, textAlert }) => {
  if (scene === scenesEnum.PRODUCT_LIST) {
    return (
      <div>
        {' '}
        Product <strong>{textAlert}</strong> added to Cart{' '}
      </div>
    );
  }
  return <strong>{textAlert}</strong>;
};

export default AlertText;
