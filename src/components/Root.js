import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import {CookiesProvider} from 'react-cookie'
import Routers from 'routers'

export default class Root extends Component {
  render() {
    let {store, history} = this.props
    return (
      <CookiesProvider>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Routers />
          </ConnectedRouter>
        </Provider>
      </CookiesProvider>

    )
  }
}
