import React from 'react';
import style from './styleNavBar';
import NavigationForLogInUsers from './NavigationForLogInUsers';
import NavigationForUnLogInUsers from './NavigationForUnLogInUsers';
import { connect } from 'react-redux';

function Navigation({ userName, isLoggedIn }) {
  let navBar;

  if (isLoggedIn) {
    navBar = <NavigationForLogInUsers userName={userName} />;
  } else navBar = <NavigationForUnLogInUsers />;

  return (
    <div>
      <nav className="panel-heading" style={style.navBarStyle}>
        <div>
          <img src={`/logo.png`} alt="logo" width="50px" height="50px" />
        </div>
        <div className="tabs">{navBar}</div>
      </nav>
    </div>
  );
}

const mapStateToProps = ({ profile: { name }, authorization: { isLoggedIn } }) => {
  return { userName: name, isLoggedIn };
};

export default connect(
  mapStateToProps,
  null,
)(Navigation);
