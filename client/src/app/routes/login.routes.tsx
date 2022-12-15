import React, { useEffect, useContext } from 'react'
import { Navigate } from 'react-router-dom'

import FormLogin from '../components/auth/formLogin'
import { UserContext } from '../server/actions/user.actions'

import { authProps } from '../types/auth.props'

const Login = ({ setIsIndex }: authProps) => {

  const { isLoggedIn } = useContext(UserContext)

  useEffect(() => {
    setIsIndex(false)
  }, [])


  return (
    <>
      {
        isLoggedIn || localStorage.getItem("is-auth-data") ? (
          <Navigate to='/main' />
        ) : (
          <div className='container-auth'>
            <FormLogin />
          </div>
        )
      }
    </>
  )
}

export default Login