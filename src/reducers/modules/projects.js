import {
  SET_PROJECTS,
  DESTROY_PROJECTS
} from 'actions/projects'

const setProjects = function(state, proj) {
  state = proj
  return state
}

const destroyProjects = function(state) {
  state = {}
  return state
}

export default function(state = {}, actions) {
  switch (actions.type) {
    case SET_PROJECTS:
      return setProjects(state, actions.projects)
    case DESTROY_PROJECTS:
      return destroyProjects(state)
    default:
      return state
  }
}
