import React from 'react';

// Redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from 'Redux/Reducers'

const store = createStore(reducers, {})

export default (props) => {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}