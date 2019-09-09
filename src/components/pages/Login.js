import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {
  InputGroup,
  InputGroupText,
  InputGroupAddon
} from 'reactstrap'
import {ValidForm, ValidInput, ValidButton} from 'validations/Hoc'
import {required, email} from "validations/Define";

export default class Login extends Component {
  render() {
    return (
      <ValidForm className='box'>
        <div className='box-header'>
          <img src={'logo.png'} className='box-header-img'/>
        </div>
        <div className='box-body'>
          <InputGroup className='mb-3'>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <i className='fa fa-envelope fa-fw' />
              </InputGroupText>
            </InputGroupAddon>
            <ValidInput type='text' className='form-control' placeholder='Email' validations={[email, required]} />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <i className='fa fa-lock fa-fw' />
              </InputGroupText>
            </InputGroupAddon>
            <ValidInput type='password' className='form-control' placeholder='Password' validations={[required]} />
          </InputGroup>
        </div>
        <div className='btn-group d-flex'>
          <ValidButton className='btn btn-primary w-100'>
            Login
          </ValidButton>
          <Link to='/signup' className='btn btn-success w-100'>
            Sign Up
          </Link>
        </div>
      </ValidForm>
    )
  }
}
