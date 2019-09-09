import React, {Component, Fragment} from 'react'

export default class IsntAuth extends Component {
  render() {
    let {children} = this.props
    return (
      <div className='content-login'>
        {children}
      </div>
    )
  }
}
