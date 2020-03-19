import { actionsEnum } from '../constants';
import appServiceData from '../App/appServiceData';

const GOODS_LOADED = newGoods => ({
  type: actionsEnum.GOODS_LOADED,
  payload: newGoods,
});

const GOODS_REQUESTED = () => ({
  type: actionsEnum.GOODS_REQUESTED,
});

const GOODS_ERROR = error => ({
  type: actionsEnum.GOODS_ERROR,
  payload: error,
});

const ORDERS_LOADED = newOrders => ({
  type: actionsEnum.ORDERS_LOADED,
  payload: newOrders,
});

const ORDERS_REQUESTED = () => ({
  type: actionsEnum.ORDERS_REQUESTED,
});

const ORDERS_ERROR = error => ({
  type: actionsEnum.ORDERS_ERROR,
  payload: error,
});

const GOODS_ADDED_TO_CART = goodsId => ({
  type: actionsEnum.GOODS_ADDED_TO_CART,
  payload: goodsId,
});

const GOODS_REMOVED_FROM_CART = goodsId => ({
  type: actionsEnum.GOODS_REMOVED_FROM_CART,
  payload: goodsId,
});

const ALL_GOODS_REMOVED_FROM_CART = goodsId => ({
  type: actionsEnum.ALL_GOODS_REMOVED_FROM_CART,
  payload: goodsId,
});

const SHOW_ALERT = (scene, text, typeAlert = 'info') => ({
  type: actionsEnum.SHOW_ALERT,
  payload: { scene, text, typeAlert },
});

const HIDE_ALERT = () => ({
  type: actionsEnum.HIDE_ALERT,
});

const OPEN_MODAL_WINDOW = (type, title) => ({
  type: actionsEnum.OPEN_MODAL_WINDOW,
  payload: { type, title },
});

const CANCEL_MODAL_WINDOW = () => ({
  type: actionsEnum.CANCEL_MODAL_WINDOW,
});

const SUBMIT_MODAL_WINDOW = data => ({
  type: actionsEnum.SUBMIT_MODAL_WINDOW,
  payload: data,
});

const LOG_IN = () => ({
  type: actionsEnum.LOG_IN,
});

const LOG_OUT = () => ({
  type: actionsEnum.LOG_OUT,
});

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

const MAKE_ORDER = (orderTotal, items) => {
  const order = {
    userId: 3,
    total: orderTotal,
    products: items.map(item => ({
      productId: item.id,
      orderId: undefined,
      count: item.count,
    })),
  };

  appServiceData.createOrder(order).then(() => {});

  return {
    type: actionsEnum.MAKE_ORDER,
  };
};

const UPDATE_ORDER = (id, newStatus, dispatch) => {
  appServiceData.updateOrder(id, newStatus).then(() => {
    dispatch(ORDERS_REQUESTED());
    appServiceData
    .getOrdersOfUser()
    .then(data => dispatch(ORDERS_LOADED(data)))
    .catch(err => dispatch(ORDERS_ERROR(err)));
  });
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
  UPDATE_ORDER,
  LOG_IN,
  LOG_OUT,
};
