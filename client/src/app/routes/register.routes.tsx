import React, { useEffect, useContext } from 'react'
import { Navigate } from 'react-router-dom'

import FormRegister from '../components/auth/formRegister'
import { UserContext } from '../server/actions/user.actions'

import { authProps } from '../types/auth.props'

const Register = ({ setIsIndex }: authProps) => {

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
            <FormRegister />
          </div>
        )
      }
    </>
  )
}

export default Register