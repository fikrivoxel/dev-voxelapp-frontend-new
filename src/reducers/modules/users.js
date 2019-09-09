import {has, forEach} from 'lodash'
import {
  SET_USERS,
  UPDATE_USERS,
  DESTROY_USERS
} from 'actions/users'


const setProfile = function(state, user) {
  state = user
  return state
}

const updateProfile = function(state, user) {
  forEach(state, function(v, k) {
    if (has(user, k)) state[k] = user[k]
  })
  return state
}

const destroyProfile = function(state) {
  state = {
    id: '',
    name: '',
    email: '',
    role_name: '',
    token: ''
  }
  return state
}

export default function(state = {
  id: '',
  name: '',
  email: '',
  role_name: '',
  token: ''
}, actions) {
  switch (actions.type) {
    case SET_USERS:
      return setProfile(state, actions.users)
    case UPDATE_USERS:
      return updateProfile(state, actions.users)
    case DESTROY_USERS:
      return destroyProfile(state)
    default:
      return state
  }
}
