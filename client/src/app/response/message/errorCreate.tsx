import React, { useContext } from 'react'

import { ResponseContext } from '../../server/actions/email.actions'

import Error from '../component/error'

const ErrorCreate = () => {

    const { responseCreate } = useContext(ResponseContext)

  return (
    <div>
        {
            responseCreate && <Error msg={responseCreate} />
        }
    </div>
  )
}

export default ErrorCreate