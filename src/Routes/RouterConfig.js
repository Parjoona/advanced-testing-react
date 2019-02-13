import React from 'react'
import { Route, Switch } from 'react-router-dom'

import App from 'Components/App';

const RouterConfig = () => (
    <Switch>
      <Route path="/" component={App} />
    </Switch>
)

export default RouterConfig