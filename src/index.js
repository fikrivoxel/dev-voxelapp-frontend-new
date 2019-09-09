import React, {Fragment} from 'react'
import {render} from 'react-dom'
import configStore from 'configStore'
import Root from 'components/Root'
import * as serviceWorker from './serviceWorker'
import 'styles/app.scss'

const store = configStore.configureStore()

render(
  <Fragment>
    <Root store={store} history={configStore.history} />
  </Fragment>
  , document.getElementById('root')
)

serviceWorker.unregister()
