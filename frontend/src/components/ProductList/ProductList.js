import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import InfoCardProduct from '../InfoCardProduct';
import { fetchGoods, GOODS_ADDED_TO_CART, SHOW_ALERT } from '../../store/actions';
import Spinner from '../Spinner';
import ErrorIndicator from '../Error-boundry/Error-indicator';
import { scenesEnum } from '../../constants';
import ShowNotification from '../ShowNotification';
import appServiceData from '../../App/appServiceData';
import { container, productListWrapper } from './ProductList.scss';
import SideBar from './SideBar';

const ProductsList = ({ goods, onAddedToCart, notifications }) => 
{
  const [goodsList, setGoodsList] = useState(goods);

  return (
    <div className={productListWrapper}>
      <SideBar goods={goods} setGoodsList={setGoodsList}/>
      <div
        style={{     
          paddingLeft: "1%",
          paddingTop: "1%",
          marginLeft: "15%" 
        }} 
        className={container}
      >
        {goodsList.map(item => (
          <InfoCardProduct
            key={item.id}
            item={item}
            onAddedToCart={() => {
              onAddedToCart(item.id, item.nameProduct);
            }}
          />
        ))}
        <ShowNotification notifications={notifications} currentScene={scenesEnum.PRODUCT_LIST} />
      </div>
    </div>
  );
};

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
