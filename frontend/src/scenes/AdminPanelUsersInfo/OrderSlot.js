import React from 'react';
import style from './UsersInfo.scss';
import { orderStatusEnum } from '../../constants';
import ButtonRound from '../../components/buttons/ButtonRound';
import OrderHeader from './OrderHeader';
import ProductsImages from './ProductsImages';

const OrderSlot = ({ order,user, updateOrder, scene }) => {
  const { id, total, status, products } = order;

  return (
    <div className={style.orderSlotWrapper}>
      <OrderHeader />
      <div className={style.orderSlot}>
        <ProductsImages products={products}/>
        <div className={style.orderInfo}>
          <div className={style.fieldSpace}>
            {products.map(item => (
              <div key={item.id}>
                {item.nameProduct}
              </div> 
            ))}
          </div>
          <div className={style.fieldSpace}>
            {products.map(item => (
              <i key={item.id}>
                <b>{`${item.price}$`}</b>
              </i>
           ))}
          </div>  
          <div className={style.orderField}>
            <i
              style={{
                color: `${(() => {
                  if (status === orderStatusEnum.CANCELED) {
                    return 'crimson';
                  }
                  if (status === orderStatusEnum.DONE) {
                    return 'mediumspringgreen';
                  }
                  return 'blue';
                })()}`,
              }}
            >
              <b>{status}</b>
            </i>
          </div>
          <div className={style.orderField}>
            <i><b>{`${total}$`}</b></i>
          </div>
          <div className={style.fieldSpace}>
            <ButtonRound 
              title="cancel order" 
              handler={() => updateOrder(
                id, orderStatusEnum.CANCELED, user.id, user, total, scene
                )} 
            />
            <ButtonRound 
              color="is-success"
              title="accomplish order" 
              handler={() => updateOrder(
                id, orderStatusEnum.DONE, user.id, user, total, scene
                )} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSlot;
