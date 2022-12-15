import React, { useState, ChangeEvent, FormEvent, useContext } from 'react'
import { Link } from 'react-router-dom'

import ErrorLogin from '../../response/message/errorLogin'

import { UserContext } from '../../server/actions/user.actions'

const FormLogin = () => {

  const initialState = {
    email: "",
    password: ""
  }

  const { login } = useContext(UserContext)

  const [userData, setUserData] = useState(initialState)

  const { email, password } = userData

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    login(userData)
  }

  return (
    <form className='container-form' onSubmit={handleSumbit}>
      <ErrorLogin />
      <fieldset className='field-form'>
        <legend className='title-field-form letnoselect'>Log in</legend>
        <div className='separator'>
          <img src='email.png' alt='image-form' className='image-form letnoselect' />
        </div>
        <div className='separator'>
          <input type='text' name='email' placeholder='EMAIL' className='input-form' value={email} onChange={handleChange} />
        </div>
        <div className='separator'>
          <input type='password' name='password' placeholder='PASSWORD' className='input-form' value={password} onChange={handleChange} />
        </div>
        <div className='separator'>
          <button className='button-form letnoselect'>LOG IN</button>
        </div>
        <div className='separator'>
          <div className='footer-form'>
            <p className='text-footer-form letnoselect'>I don't have an account yet</p>
            <Link to='/register' relative='path' className='text-auth-header letnoselect'>Check in</Link>
          </div>
        </div>
      </fieldset>
    </form>
  )
}

export default FormLogin