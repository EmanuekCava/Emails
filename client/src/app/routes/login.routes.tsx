import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import FormLogin from '../components/auth/formLogin'

import { isStorage } from '../helper/storage'

const Login = () => {

  const navigate = useNavigate()

  useEffect(() => {
    (() => {
      if (isStorage()) {
        navigate('/main')
      }
    })()
  }, [])

  return (
    <div className='container-auth'>
      <FormLogin />
    </div>
  )
}

export default Login