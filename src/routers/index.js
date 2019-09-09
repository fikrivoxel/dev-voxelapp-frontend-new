import React, {Component} from 'react'
import {bindActionCreators, compose} from 'redux'
import {connect} from 'react-redux'
import {Switch, Route, withRouter} from 'react-router-dom'
import {withCookies} from 'react-cookie'
import {has, isEmpty} from 'lodash'
import Content from 'components/Content'
import routes from 'routers/routes'
import {checkCookies} from 'actions/users'

const mapStateToProps = function(state) {
  return {
    users: state.users
  }
}

const mapDispatchToProps = function(dis) {
  return bindActionCreators({checkCookies}, dis)
}

class Routers extends Component {
  state = {
    layouts: 'IsntAuth'
  }
  urlNonAuth = ['/login', '/signup']
  static routesMap() {
    return routes.map(function(r, i) {
      return (<Route path={r.path} component={r.component} exact={has(r, 'exact') ? r.exact : false} key={'routes' + i} />)
    })
  }
  componentDidMount() {
    this.setStore()
    this.onRouteChange()
    this.setLayouts()
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.location !== prevProps.location) {
      this.setStore()
      this.onRouteChange()
      this.setLayouts()
    }
  }
  setStore() {
    let {checkCookies, cookies} = this.props
    let name = ''
    if (!isEmpty(cookies.get('name'))) {
      name = cookies.get('name')
      checkCookies(JSON.parse(name))
    }
  }
  onRouteChange() {
    let {users, history} = this.props
    if (!isEmpty(users.token)) {
      if (this.urlNonAuth.includes(history.location.pathname))
        return history.replace({pathname: '/'})
    } else {
      if (!this.urlNonAuth.includes(history.location.pathname))
        return history.replace({pathname: '/login'})
    }
  }
  setLayouts() {
    let {users} = this.props
    this.setState({
      layouts: isEmpty(users.token) ? 'IsntAuth' : 'IsAuth'
    })
  }
  render() {
    let {layouts} = this.state
    return (
      <Content layouts={layouts}>
        <Switch>
          {Routers.routesMap()}
        </Switch>
      </Content>
    )
  }
}

export default compose(
  withCookies,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Routers)
