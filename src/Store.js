import React from 'react';

// Redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from 'Redux/Reducers'

export default ({ children, initialState = {} }) => {
  return (
    <Provider store={createStore(reducers, initialState)}>
      {children}
    </Provider>
  )
}