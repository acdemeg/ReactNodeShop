import { actionsEnum } from '../constants';

const GOODS_LOADED = newGoods => {
  return {
    type: actionsEnum.GOODS_LOADED,
    payload: newGoods,
  };
};

const GOODS_REQUESTED = () => {
  return {
    type: actionsEnum.GOODS_REQUESTED,
  };
};

const GOODS_ERROR = error => {
  return {
    type: actionsEnum.GOODS_ERROR,
    payload: error,
  };
};

const ORDERS_LOADED = newOrders => {
  return {
    type: actionsEnum.ORDERS_LOADED,
    payload: newOrders,
  };
};

const ORDERS_REQUESTED = () => {
  return {
    type: actionsEnum.ORDERS_REQUESTED,
  };
};

const ORDERS_ERROR = error => {
  return {
    type: actionsEnum.ORDERS_ERROR,
    payload: error,
  };
};

const GOODS_ADDED_TO_CART = goodsId => {
  return {
    type: actionsEnum.GOODS_ADDED_TO_CART,
    payload: goodsId,
  };
};

const GOODS_REMOVED_FROM_CART = goodsId => {
  return {
    type: actionsEnum.GOODS_REMOVED_FROM_CART,
    payload: goodsId,
  };
};

const ALL_GOODS_REMOVED_FROM_CART = goodsId => {
  return {
    type: actionsEnum.ALL_GOODS_REMOVED_FROM_CART,
    payload: goodsId,
  };
};

const SHOW_ALERT = (scene, text, typeAlert = 'info') => {
  return {
    type: actionsEnum.SHOW_ALERT,
    payload: { scene, text, typeAlert },
  };
};

const HIDE_ALERT = () => {
  return {
    type: actionsEnum.HIDE_ALERT,
  };
};

const OPEN_MODAL_WINDOW = (type, title) => {
  return {
    type: actionsEnum.OPEN_MODAL_WINDOW,
    payload: { type, title },
  };
};

const CANCEL_MODAL_WINDOW = () => {
  return {
    type: actionsEnum.CANCEL_MODAL_WINDOW,
  };
};

const SUBMIT_MODAL_WINDOW = data => {
  return {
    type: actionsEnum.SUBMIT_MODAL_WINDOW,
    payload: data,
  };
};

const MAKE_ORDER = items => {
  return {
    type: actionsEnum.MAKE_ORDER,
    payload: items,
  };
};

const LOG_IN = () => {
  return {
    type: actionsEnum.LOG_IN,
  };
};

const LOG_OUT = () => {
  return {
    type: actionsEnum.LOG_OUT,
  };
};

const fetchGoods = (appServiceData, dispatch) => () => {
  dispatch(GOODS_REQUESTED());
  appServiceData
    .getProducts()
    .then(data => dispatch(GOODS_LOADED(data)))
    .catch(err => dispatch(GOODS_ERROR(err)));
};

const fetchOrders = (appServiceData, dispatch) => () => {
  dispatch(ORDERS_REQUESTED());
  appServiceData
    .getOrdersOfUser()
    .then(data => dispatch(ORDERS_LOADED(data)))
    .catch(err => dispatch(ORDERS_ERROR(err)));
};

export {
  fetchGoods,
  fetchOrders,
  GOODS_ADDED_TO_CART,
  GOODS_REMOVED_FROM_CART,
  ALL_GOODS_REMOVED_FROM_CART,
  SHOW_ALERT,
  HIDE_ALERT,
  OPEN_MODAL_WINDOW,
  CANCEL_MODAL_WINDOW,
  SUBMIT_MODAL_WINDOW,
  MAKE_ORDER,
  LOG_IN,
  LOG_OUT,
};
