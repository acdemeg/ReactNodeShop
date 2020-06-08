import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { scenesEnum, usersRoleEnum } from '../../constants';
import { ADD_GOODS } from '../../store/actions';
import { connect } from 'react-redux';
import ImageUpload from './ImageUpload'
import { googleFont, addGoods, addProductInfo } from './AddGoods.scss'
import MainProductInfo from "./MainProductInfo";
import ShowNotification from '../../components/ShowNotification';


function AddGoods({ 
  notifications,
  profile,
  isLoggedIn,
  uploadProduct 
}){
  const [picture, setPicture] = useState();

  if(!isLoggedIn || profile.role !== usersRoleEnum.ADMIN){
    return <Redirect to="/authorizationPage" />
  }

  return (
    <div>
      <div className={googleFont}>
        <b>Добавление товара</b>
      </div>
      <form
        id="AddProductForm" 
        onSubmit={e => uploadProduct(e, picture)}>  
        <div className={addGoods}>
          <MainProductInfo />
          <div className={addProductInfo}>
              <ImageUpload setPicture={setPicture}/>
            <textarea 
              name="detail"
              style={{ marginTop: "5%"}}
              className="textarea" 
              placeholder="Подробное описание">
            </textarea>
          </div>
        </div>
        <button className="submitButton" 
          type="submit" 
          onClick={e => uploadProduct(e, picture)}
        >
            Сохранить товар
        </button>
      </form>
      <ShowNotification notifications={notifications} currentScene={scenesEnum.ADD_PRODUCT} />
    </div>
  );
}

const mapStateToProps = ({
  notifications,
  profile,
  authorization: { isLoggedIn }
}) => ({
  notifications,
  profile,
  isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  uploadProduct: (event, picture) => ADD_GOODS(event, dispatch, picture)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddGoods);