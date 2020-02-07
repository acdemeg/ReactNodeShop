import React, { useEffect, Component } from 'react';
import InfoCardProduct from '../InfoCardProduct';
import Container from './styleProducts';
import { connect } from 'react-redux';
import { fetchGoods, GOODS_ADDED_TO_CART, SHOW_ALERT } from '../../store/actions';
import Spinner from '../Spinner';
import ErrorIndicator from '../Error-boundry/Error-indicator';
import { scenesEnum } from '../../constants';
import ShowNotification from '../ShowNotification';
import appServiceData from '../../App/appServiceData';


const ProductsList = ({ goods, onAddedToCart, notifications }) => {
  return (
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
};

// 1. Why you have used classComponent? Why not functional?
// 2. Please remove all not shared components from ./component folder. Place them where they are needed.
// --mrurenko 2020-01-14

class ProductsListContainer extends Component {
  componentDidMount() {
    this.props.fetchGoods();
  }

  render() {
    const { goods, loading, error, notifications, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      console.log(error);
      return <ErrorIndicator />;
    }
    return (
      <ProductsList goods={goods} onAddedToCart={onAddedToCart} notifications={notifications} />
    );
  }
}

//******  Not Working! */
/********* */
/* const ProductsListContainer = ({ goods, loading, error, notifications, onAddedToCart, fetchGoods }) => {
  useEffect(() => {
    fetchGoods();
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }
  return (
    <ProductsList goods={goods} onAddedToCart={onAddedToCart} notifications={notifications} />
  );
} */

const mapStateToProps = ({ goodsList: { goods, loading, error }, notifications }) => {
  return { goods, loading, error, notifications };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGoods: fetchGoods(appServiceData, dispatch),
    onAddedToCart: (id, nameProduct) => {
      dispatch(GOODS_ADDED_TO_CART(id));
      dispatch(SHOW_ALERT(scenesEnum.PRODUCT_LIST, nameProduct));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsListContainer);
