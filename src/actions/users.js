import {isEmpty} from 'lodash'
import {Users} from 'api'

export const SET_USERS = 'SET_USERS'
export const UPDATE_USERS = 'UPDATE_USERS'
export const DESTROY_USERS = 'DESTROY_USERS'

export const setUsers = function(users) {
  return {
    type: SET_USERS,
    users
  }
}

export const updateUsers = function(users) {
  return {
    type: UPDATE_USERS,
    users
  }
}

export const destroyUsers = function() {
  return {
    type: DESTROY_USERS
  }
}

export const checkCookies = function(usersCookie) {
  return function(dis) {
    let users = usersCookie
    if (!isEmpty(users)) dis(setUsers(users))
    else dis(destroyUsers())
  }
}
