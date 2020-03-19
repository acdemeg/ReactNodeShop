import React from 'react';
import PropTypes from 'prop-types';
import { typeModalEnum, messages } from '../../constants';
import InputForm from './InputForm';

import './Modal.css';

const Modal = ({ title, typeModal, isOpenModal, onCancel, onSubmit }) => {
  let inputValue = 'unknown';
  const getValueFromInput = value => {
    inputValue = value;
  };

  return (
    <>
      {isOpenModal && (
        <div className="modalOverlay">
          <div className="modalWindow">
            <div className="modalHeader">
              <div className="modalTitle">{title}</div>
            </div>
            <div className="modalBody">
              <InputForm typeModal={typeModal} getValueFromInput={getValueFromInput} />
            </div>
            <div className="modalFooter">
              <button onClick={onCancel} className="button is-rounded is-small cancel">
                {' '}
                Cancel{' '}
              </button>
              <button
                onClick={() => onSubmit(inputValue, getAlertText(typeModal))}
                className="button is-rounded is-small submit"
              >
                {' '}
                Submit{' '}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const getAlertText = typeModal => {
  if (typeModal === typeModalEnum.FILL_UP) {
    return messages.FILL_UP;
  }

  if (typeModal === typeModalEnum.EMAIL) {
    return messages.EMAIL_UPDATE;
  }

  if (typeModal === typeModalEnum.PHONE) {
    return messages.PHONE_UPDATE;
  }

  if (typeModal === typeModalEnum.NAME) {
    return messages.NAME_UPDATE;
  }
};

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};

Modal.defaultProps = {
  title: 'Modal title',
  isOpen: false,
  onCancel: () => {},
  onSubmit: () => {},
  children: null,
};

export default Modal;
