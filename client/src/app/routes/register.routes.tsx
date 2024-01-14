import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import FormRegister from '../components/auth/formRegister'

import { isStorage } from '../helper/storage';

const Register = () => {

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
      <FormRegister />
    </div>
  )
}

export default Register