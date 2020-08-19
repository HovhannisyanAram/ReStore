import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store';
import App from './components/app';
import BookstoreService from './services';
import ErrorBoundry from './components/errorBoundry';
import { BookstoreServiceProvider } from './components/bookstoreServiceContext';

const bookstoreService = new BookstoreService();

ReactDom.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root'),
);