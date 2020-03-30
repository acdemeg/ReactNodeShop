const actionsEnum = Object.freeze({
  GOODS_LOADED: 'FETCH_GOODS_SUCCESS',
  GOODS_REQUESTED: 'FETCH_GOODS_REQUESTED',
  GOODS_ERROR: 'FETCH_GOODS_FAILURE',
  GOODS_ADDED_TO_CART: 'GOODS_ADDED_TO_CART',
  GOODS_REMOVED_FROM_CART: 'GOODS_REMOVED_FROM_CART',
  PROFILE_LOADED: 'FETCH_PROFILE_SUCCESS',
  PROFILE_ERROR: 'FETCH_PROFILE_FAILURE',
  ALL_GOODS_REMOVED_FROM_CART: 'ALL_GOODS_REMOVED_FROM_CART',
  ORDERS_LOADED: 'FETCH_ORDERS_SUCCESS',
  ORDERS_REQUESTED: 'FETCH_ORDERS_REQUESTED',
  ORDERS_ERROR: 'FETCH_ORDERS_FAILURE',
  SHOW_ALERT: 'SHOW_ALERT',
  HIDE_ALERT: 'HIDE_ALERT',
  OPEN_MODAL_WINDOW: 'OPEN_MODAL_WINDOW',
  CANCEL_MODAL_WINDOW: 'CANCEL_MODAL_WINDOW',
  SUBMIT_MODAL_WINDOW: 'SUBMIT_MODAL_WINDOW',
  FILL_UP_BALANCE: 'FILL_UP_BALANCE',
  MAKE_ORDER: 'MAKE_ORDER',
  UPDATE_ORDER: 'UPDATE_ORDER',
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT',
});

const scenesEnum = Object.freeze({
  PROFILE: 'Profile',
  PRODUCT_LIST: 'ProductList',
  CART: 'Cart',
  LOG_IN: 'Log-In',
  REG: 'Reg'
});

const typeModalEnum = Object.freeze({
  NAME: 'name_redact',
  PHONE: 'phone_redact',
  EMAIL: 'email_redact',
  FILL_UP: 'fill_up',
});

const messages = Object.freeze({
  MAKE_ORDER: 'Your order has accepted',
  FILL_UP: 'Your balance replenished',
  EMAIL_UPDATE: 'Your email updated',
  PHONE_UPDATE: 'Your phone updated',
  NAME_UPDATE: 'Your name updated',
  LOG_IN: 'You logged your account',
  LOG_OUT: 'You logout your account',
  LOG_IN_ERROR: 'Incorrect email or password',
  REG: 'You succses registered',
  REG_ERROR: 'Registraton failed',
});

export { actionsEnum, scenesEnum, typeModalEnum, messages };
