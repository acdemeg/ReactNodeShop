import { actionsEnum } from '../../constants';

const updateOrders = (currentOrders, newOrders) => {
  return [...currentOrders, ...newOrders];
};

const updateOrdersList = (state, action) => {
  if (state === undefined) {
    return {
      orders: [],
      loading: false,
    };
  }

  switch (action.type) {
    // case actionsEnum.ORDERS_REQUESTED:
    //   return {
    //     orders: [],
    //     loading: true,
    //   };

    // case actionsEnum.ORDERS_LOADED:
    //   return {
    //     orders: action.payload,
    //     loading: false,
    //   };

    case actionsEnum.MAKE_ORDER:
      return {
        loading: false,
        orders: updateOrders(state.orderList.orders, action.payload),
      };

    default:
      return state.orderList;
  }
};

export default updateOrdersList;
