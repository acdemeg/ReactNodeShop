import { actionsEnum } from '../../constants';

const checkUserAuthorization = (state, action) => {
  if (state === undefined) {
    return {
      isLoggedIn: false,
    };
  }

  switch (action.type) {
    case actionsEnum.LOG_IN:
      return {
        isLoggedIn: true,
      };

    case actionsEnum.LOG_OUT:
      return {
        isLoggedIn: false,
      };

    default:
      return state.authorization;
  }
};

export default checkUserAuthorization;
