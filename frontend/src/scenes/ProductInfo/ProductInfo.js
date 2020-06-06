import React, { useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { googleFont, wrapper, wrapperProductInfo, border } from './ProductInfo.scss'
import { fetchProductInfo, GOODS_ADDED_TO_CART, SHOW_ALERT } from '../../store/actions';
import { connect } from 'react-redux';
import { scenesEnum } from '../../constants';
import Spinner from '../../components/Spinner';
import ErrorIndicator from '../../components/Error-boundry/Error-indicator'; 
import ShowNotification from '../../components/ShowNotification';
import ProductInfoCard from './ProductInfoCard';

const ProductInfo = ({ 
  isLoggedIn, 
  notifications,
  product, 
  loading, 
  error,
  onAddedToCart,
  fetchProduct
}) => {

  const params = useParams();
  const productId = Number(params.id);
  if(!productId){
    return <Redirect to="/" />
  }

  useEffect(() => {
    fetchProduct(productId);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  if(!product){
    return (
    <div className={googleFont}>
      Impossible product page
    </div>);
  }

  return (
    <div className={wrapper}>
      <ProductInfoCard product={product} onAddedToCart={onAddedToCart} isLoggedIn={isLoggedIn}/>
      <hr className={border}></hr>
      <div className={wrapperProductInfo}>
        <div
          className={googleFont} 
          style={{ margin: "1% 1% 1% 0" , textAlign: "left"}} >
          <font size="30px"><b>Подробная информация о </b></font>
          <font color="crimson">
            {`${product.nameProduct}`}
          </font>
        </div>
        <big>
        Toughpower iRGB PLUS 1250W Titanium - TT Premium Edition - первый в мире блок питания с запатентованной кольцевой подсветкой вентилятора на 16.8 млн. цветов. Это технологически самый совершенный БП имеет сертификацию 80 PLUS Titanium в состав которого входят комплектующие самого высокого качества, что гарантирует высочайшую эффективность (КПД) и стабильную работу в течении долгого времени. Ключевой особенностью является наличие специального микропроцессора, позволяющего отслеживать основные параметры работы ПК.
Комбинация из Toughpower iRGB PLUS 1250W Titanium и трех интеллектуальных платформ: приложения для ПК DPS G PC App 2.0, облачного сервиса DPS G Smart Power Management (SPM) Cloud 1.0, и мобильного приложения DPS G Mobile App 1.0 позволяет пользователям оценить и оптимизировать электропотребление, тем самым уменьшить выбросы CO2 и сохранить землю для следующих поколений!


        </big>
      </div>
       <ShowNotification 
        notifications={notifications} 
        currentScene={scenesEnum.PRODUCT_INFO} 
       />
    </div>
  );
}

const mapStateToProps = ({
  notifications,
  authorization: { isLoggedIn },
  productInfo: { product, loading, error }
}) => ({
  notifications,
  isLoggedIn,
  product, 
  loading, 
  error,
});

const mapDispatchToProps = dispatch => ({
  fetchProduct: (id) => fetchProductInfo(id, dispatch),
  onAddedToCart: (id, nameProduct) => {
    dispatch(GOODS_ADDED_TO_CART(id));
    dispatch(SHOW_ALERT(scenesEnum.PRODUCT_INFO, nameProduct));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductInfo);