import React, { useState, ChangeEvent, FormEvent, useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import Country from './components/country';
import Gender from './components/gender';
import ErrorRegister from '../../response/message/errorRegister';

import { UserContext } from '../../server/actions/user.actions';
import Error from '../../response/component/error';

const FormRegister = () => {

  const { register } = useContext(UserContext)

  const initialState = {
    name: "",
    surname: "",
    email: "",
    birth: "",
    gender: "",
    country: "",
    password: "",
    confirm: ""
  }

  const [userData, setUserData] = useState(initialState)
  const [isAccepted, setIsAccepted] = useState(false)
  const [showAccept, setShowAccept] = useState(false)
  const [showPass, setShowPass] = useState(false)

  const { name, surname, email, birth, gender, country, password, confirm } = userData

  const showPassword = () => {
    setShowPass(!showPass)
  }

  useEffect(() => {
  }, [isAccepted, showAccept])


  const acceptConditions = () => {
    setIsAccepted(!isAccepted)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isAccepted) {
      setShowAccept(false)
      register(userData)
    } else {
      setShowAccept(true)
    }
  }

  return (
    <form className='container-form' style={{ width: '52%' }} onSubmit={handleSumbit} >
      <ErrorRegister />
      {
        showAccept && <Error msg='You have to accept terms and conditions' />
      }
      <fieldset className='field-form'>
        <legend className='title-field-form letnoselect'>Check in</legend>
        <div className='separator'>
          <div className='container-horizontally'>
            <div className='separator'>
              <input type='text' name='name' placeholder='NAME' className='input-form' value={name} onChange={handleChange} />
            </div>
            <div className='separator'>
              <input type='text' name='surname' placeholder='SURNAME' className='input-form' value={surname} onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className='separator'>
          <input type='text' name='email' placeholder='EMAIL' className='input-form' value={email} onChange={handleChange} />
        </div>
        <div className='separator'>
          <input type='text' name='birth' placeholder='BIRTH: dd-mm-yyyy' className='input-form' value={birth} onChange={handleChange} />
        </div>
        <div className='separator'>
          <Gender gender={gender} handleChange={handleChange} />
        </div>
        <div className='separator'>
          <Country country={country} handleChange={handleChange} />
        </div>
        <div className='separator'>
          <div className='container-password'>
            <input type={showPass ? 'text' : 'password'} name='password' placeholder='PASSWORD' className='input-form' value={password} onChange={handleChange} />
            {
              showPass ? <AiFillEyeInvisible onClick={showPassword} className='show-pass-icon letnoselect' /> : <AiFillEye onClick={showPassword} className='show-pass-icon letnoselect' />
            }
          </div>
        </div>
        <div className='separator'>
          <input type='password' name='confirm' placeholder='CONFIRM PASSWORD' className='input-form' value={confirm} onChange={handleChange} />
        </div>
        <div className='separator'>
          <div className='container-horizontally' style={{ justifyContent: 'left' }}>
            <input type='checkbox' checked={isAccepted} onChange={acceptConditions} />
            <p style={{ marginLeft: '8px' }}>I accept terms and conditions</p>
          </div>
        </div>
        <div className='separator'>
          <button className='button-form letnoselect'>CHECK IN</button>
        </div>
        <div className='separator'>
          <div className='footer-form'>
            <p className='text-footer-form letnoselect'>I don't have an account yet</p>
            <Link to='/login' relative='path' className='text-auth-header letnoselect'>Log in</Link>
          </div>
        </div>
      </fieldset>
    </form>
  )
}

export default FormRegister