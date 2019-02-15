import React from 'react';

// Redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from 'Redux/Reducers'

// Middleware
import async from 'Middlewares/async'

export default ({ children, initialState = {} }) => {
  const store = createStore(reducers, initialState, applyMiddleware(async))
  
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}