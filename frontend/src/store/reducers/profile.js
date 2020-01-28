import { actionsEnum, typeModalEnum } from '../../constants';

const updateProfile = (state, action) => {
  if (state === undefined) {
    return {
      isOpenModal: false,
      balance: '500',
      email: 'nastya@gmail.com',
      phone: '+79954443369',
      name: 'Nastya',
      typeModal: undefined,
      titleModal: '',
    };
  }

  const updateInfo = (state, action) => {
    const { typeModal } = state.profile;

    if (typeModal === typeModalEnum.FILL_UP) {
      return {
        ...state.profile,
        balance: action.payload,
        isOpenModal: false,
      };
    }

    if (typeModal === typeModalEnum.EMAIL) {
      return {
        ...state.profile,
        email: action.payload,
        isOpenModal: false,
      };
    }

    if (typeModal === typeModalEnum.PHONE) {
      return {
        ...state.profile,
        phone: action.payload,
        isOpenModal: false,
      };
    }

    if (typeModal === typeModalEnum.NAME) {
      return {
        ...state.profile,
        name: action.payload,
        isOpenModal: false,
      };
    }
  };

  const openNeedModal = (state, action) => {
    return {
      isOpenModal: true,
      balance: state.profile.balance,
      email: state.profile.email,
      phone: state.profile.phone,
      name: state.profile.name,
      typeModal: action.payload.type,
      titleModal: action.payload.title,
    };
  };

  const cancelModal = state => {
    return {
      email: state.profile.email,
      phone: state.profile.phone,
      name: state.profile.name,
      balance: state.profile.balance,
      isOpenModal: false,
    };
  };

  switch (action.type) {
    case actionsEnum.OPEN_MODAL_WINDOW:
      return openNeedModal(state, action);

    case actionsEnum.CANCEL_MODAL_WINDOW:
      return cancelModal(state);

    case actionsEnum.SUBMIT_MODAL_WINDOW:
      return updateInfo(state, action);

    default:
      return state.profile;
  }
};

export default updateProfile;
