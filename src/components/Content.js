import React, {Component, Fragment} from 'react'
import IsAuth from 'components/layouts/IsAuth'
import IsntAuth from 'components/layouts/IsntAuth'

export default class Content extends Component {
  component = {
    IsAuth, IsntAuth
  }
  constructor(props) {
    super(props)
    this.layouts = this.layouts.bind(this)
  }
  layouts() {
    let {layouts, children} = this.props
    let Lay = this.component[layouts]
    return (
      <Lay>
        {children}
      </Lay>
    )
  }
  render() {
    return (
      <Fragment>
        <div className='content'>
          {this.layouts()}
        </div>
      </Fragment>
    )
  }
}
