import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import App from './containers/App';
import Foo from './containers/Foo';
import Bar from './components/BarComponent';
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, browserHistory } from 'react-router'

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
  <Router history={history}>
      <Route path="/" component={App} >
       <Route path="foo" component={Foo}/>
       <Route path="bar" component={Bar}/>
      </Route>
   </Router>
  </Provider>,
  document.getElementById('app')
);
