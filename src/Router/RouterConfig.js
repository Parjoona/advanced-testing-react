import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import App from 'Components/App';
import Box from 'Components/Box/Box'
import List from 'Components/List/List'
import Header from 'Components/Header/Header'

export default class RouterConfig extends Component {

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/post" component={Box} />
          <Route path="/comments" component={List} />
        </Switch>
      </div>
    )
  }
}