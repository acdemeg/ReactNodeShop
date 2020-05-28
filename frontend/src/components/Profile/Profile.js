import React, { Fragment } from 'react';
import './Profile.css';
import { connect } from 'react-redux';
import {
  OPEN_MODAL_WINDOW,
  CANCEL_MODAL_WINDOW,
  SUBMIT_MODAL_WINDOW,
  SHOW_ALERT,
} from '../../store/actions';
import Modal from './Modal';
import Name from './profileFields/Name';
import Phone from './profileFields/Phone';
import Email from './profileFields/Email';
import Balance from './profileFields/Balance';
import RedactFields from './profileFields/RedactFields';
import { scenesEnum } from '../../constants';
import ShowNotification from '../ShowNotification';

function Profile({
  isOpenModal,
  balance,
  email,
  phone,
  name,
  titleModal,
  typeModal,
  openModal,
  handleCancel,
  handleSubmit,
  notifications,
  isLoggedIn,
})
 {
  if (isLoggedIn) {
    return (
      <>
        <div className="profile">
          <div className="profile-header">
            <b>My profile</b>
          </div>

          <div style={{ float: 'left' }}>
            <Name name={name} />
            <Phone phone={phone} />
            <Email email={email} />
            <Balance balance={balance} />
          </div>

          <RedactFields openModal={openModal} />
        </div>

        <Modal
          title={titleModal}
          typeModal={typeModal}
          isOpenModal={isOpenModal}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
        />

        <ShowNotification notifications={notifications} currentScene={scenesEnum.PROFILE} />
      </>
    );
  }

  return null;
}

const mapStateToProps = ({
  profile: { isOpenModal, balance, email, phone, name, titleModal, typeModal },
  authorization: { isLoggedIn, userId },
  notifications,
}) => ({
  isOpenModal,
  balance,
  email,
  phone,
  name,
  titleModal,
  typeModal,
  isLoggedIn,
  userId,
  notifications,
});

const mapDispatchToProps = dispatch => ({
  openModal: ({ type, title }) => dispatch(OPEN_MODAL_WINDOW(type, title)),
  handleCancel: () => dispatch(CANCEL_MODAL_WINDOW()),
  handleSubmit: (data, alertText) => {
    dispatch(SUBMIT_MODAL_WINDOW(data));
    dispatch(SHOW_ALERT(scenesEnum.PROFILE, alertText));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
