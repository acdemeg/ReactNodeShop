import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGIN } from '../../store/actions';
import { scenesEnum } from '../../constants';
import ShowNotification from '../ShowNotification';
import './css/main.css';
import './css/util.css';

function LogIn({ onLogin, notifications }) {
  return (
    <form id="LogInForm" onSubmit = {onLogin}>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-form validate-form">
              <span className="login100-form-title p-b-26">Welcome</span>
              <span className="login100-form-title p-b-48">
                <i className="zmdi zmdi-font" />
              </span>

              <div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
                <input className="input100" type="text" name="email" />
                <span className="focus-input100" data-placeholder="Email" />
              </div>

              <div className="wrap-input100 validate-input" data-validate="Enter password">
                <span className="btn-show-pass">
                  <i className="zmdi zmdi-eye" />
                </span>
                <input className="input100" type="password" name="password" autoComplete="on" />
                <span className="focus-input100" data-placeholder="Password" />
              </div>

              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn" />
                  <button type="submit" className="login100-form-btn">
                    Login
                  </button>
                </div>
              </div>

              <div className="text-center p-t-115">
                <span className="txt1">Don’t have an account?</span>

                <NavLink className="txt1" to="#">
                  &nbsp;Sign Up
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ShowNotification notifications={notifications} currentScene={scenesEnum.LOG_IN} />

      <div id="dropDownSelect1" />
    </form>
  );
}

const mapStateToProps = ({notifications }) => ({ notifications });

const mapDispatchToProps = dispatch => ({
  onLogin: (event) => {
    LOGIN(event, dispatch)
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogIn);
