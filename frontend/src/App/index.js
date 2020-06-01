import { React, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Registration from '../scenes/Registration';
import SignIn from '../scenes/SignIn';
import Products from '../scenes/Products';
import Orders from '../scenes/Orders';
import ProfilePage from '../scenes/Profile';
import CartGoods from '../scenes/CartGoods';
import AdminPanelUsersInfo from '../scenes/AdminPanelUsersInfo';
import Navigation from './Navbar';
import './App.scss';

const App = () => (
  <Fragment>
    <Navigation />
    <Switch>
      <Route path="/" exact component={Products} />
      <Route path="/authorizationPage" exact component={SignIn} />
      <Route path="/registration" component={Registration} />
      <Route path="/ordersPage" component={Orders} />
      <Route path="/profilePage" component={ProfilePage} />
      <Route path="/cartPage" component={CartGoods} />
      <Route path="/adminPanel" component={AdminPanelUsersInfo}/>
      <Route path="/addProduct" component={null}/>
      <Redirect from="/" to="/" />
    </Switch>
  </Fragment>
);

export default App;
