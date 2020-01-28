import { React, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Registration from '../scenes/Registration';
import Authorization from '../scenes/Authorization';
import Products from '../scenes/Products';
import Orders from '../scenes/Orders';
import Requests from '../scenes/Requests';
import Delivery from '../scenes/Delivery';
import ProfilePage from '../scenes/Profile';
import CartGoods from '../scenes/CartGoods';
import Navigation from './Navbar';
import './App.scss';

const App = () => {
  return (
    <Fragment>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Registration} />
        <Route path="/authorizationPage" exact component={Authorization} />
        <Route path="/productPage" component={Products} />
        <Route path="/deliveryPage" component={Delivery} />
        <Route path="/ordersPage" component={Orders} />
        <Route path="/requestsPage" component={Requests} />
        <Route path="/profilePage" component={ProfilePage} />
        <Route path="/cartPage" component={CartGoods} />
      </Switch>
    </Fragment>
  );
};

export default App;
