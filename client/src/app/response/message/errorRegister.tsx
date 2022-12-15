import React, { useContext } from 'react'

import { ResponseContext } from '../../server/actions/user.actions'

import Error from '../component/error'

const ErrorRegister = () => {

    const { responseRegister } = useContext(ResponseContext)

  return (
    <div>
        {
            responseRegister && <Error msg={responseRegister} />
        }
    </div>
  )
}

export default ErrorRegister