import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import InfoCardProduct from '../InfoCardProduct';
import Container from './styleProducts';
import { fetchGoods, GOODS_ADDED_TO_CART, SHOW_ALERT } from '../../store/actions';
import Spinner from '../Spinner';
import ErrorIndicator from '../Error-boundry/Error-indicator';
import { scenesEnum } from '../../constants';
import ShowNotification from '../ShowNotification';
import appServiceData from '../../App/appServiceData';

const ProductsList = ({ goods, onAddedToCart, notifications }) => (
  <div>
    <Container>
      {goods.map(item => (
        <InfoCardProduct
          key={item.id}
          item={item}
          onAddedToCart={() => {
            onAddedToCart(item.id, item.nameProduct);
          }}
        />
      ))}
      <ShowNotification notifications={notifications} currentScene={scenesEnum.PRODUCT_LIST} />
    </Container>
  </div>
);

const ProductsListContainer = ({
  goods,
  loading,
  error,
  notifications,
  onAddedToCart,
  fetchGoods,
}) => {
  useEffect(() => {
    fetchGoods();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }
  return <ProductsList goods={goods} onAddedToCart={onAddedToCart} notifications={notifications} />;
};

const mapStateToProps = ({ goodsList: { goods, loading, error }, notifications }) => ({
  goods,
  loading,
  error,
  notifications,
});

const mapDispatchToProps = dispatch => ({
  fetchGoods: fetchGoods(appServiceData, dispatch),
  onAddedToCart: (id, nameProduct) => {
    dispatch(GOODS_ADDED_TO_CART(id));
    dispatch(SHOW_ALERT(scenesEnum.PRODUCT_LIST, nameProduct));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsListContainer);
