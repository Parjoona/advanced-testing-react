import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import RouterConfig from 'Router/RouterConfig'
import * as serviceWorker from './serviceWorker';

// Redux
import Store from 'Store'

ReactDOM.render(
  <Store>
    <BrowserRouter>
      <RouterConfig />
    </BrowserRouter>
  </Store>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
