import { actionsEnum } from '../../constants';

const updateOrders = (currentOrders, newOrders) => {
  return [...currentOrders, ...newOrders];
};

const updateOrdersList = (state, action) => {
  if (state === undefined) {
    return {
      orders: [],
      loading: false,
      error: null,
    };
  }

  switch (action.type) {
    case actionsEnum.ORDERS_REQUESTED:
      return {
        orders: [],
        loading: true,
        error: null,
      };

    case actionsEnum.ORDERS_LOADED:
      return {
        orders: action.payload,
        loading: false,
        error: null,
      };

    case actionsEnum.ORDERS_ERROR:
      return {
        orders: [],
        loading: false,
        error: action.payload,
      };

    // case actionsEnum.MAKE_ORDER:
    //   return {
    //     loading: false,
    //     orders: updateOrders(state.orderList.orders, action.payload),
    //     error: null,
    //   };

    default:
      return state.orderList;
  }
};

export default updateOrdersList;
