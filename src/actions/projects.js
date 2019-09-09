export const SET_PROJECTS = 'SET_PROJECTS'
export const DESTROY_PROJECTS = 'DESTROY_PROJECTS'

export const setProjects = function(projects) {
  return {
    type: SET_PROJECTS,
    projects
  }
}

export const destroyProjects = function() {
  return {
    type: DESTROY_PROJECTS
  }
}
