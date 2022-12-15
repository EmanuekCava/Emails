import React, { useContext } from 'react'

import { ResponseContext } from '../../server/actions/user.actions'

import Error from '../component/error'

const ErrorLogin = () => {

    const { responseLogin } = useContext(ResponseContext)

  return (
    <div>
        {
            responseLogin && <Error msg={responseLogin} />
        }
    </div>
  )
}

export default ErrorLogin