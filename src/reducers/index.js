import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import modules from 'reducers/modules'

export default function (history) {
  return combineReducers({
    router: connectRouter(history),
    ...modules
  })
}
