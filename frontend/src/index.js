import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { initFontAwesomeLibrary } from './utils';
import ErrorBoundry from './components/Error-boundry';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './store';

initFontAwesomeLibrary();

render(
  <Provider store={store}>
    <ErrorBoundry>
      <Router>
        <App />
      </Router>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('app'),
);
