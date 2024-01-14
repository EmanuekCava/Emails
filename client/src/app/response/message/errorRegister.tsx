import { useContext } from 'react'

import { ResponseContext } from '../../server/actions/user.actions'

import Error from '../component/error'

import { IReducerResponse } from '../../interface/Response'

const ErrorRegister = () => {

    const { responseRegister } = useContext<IReducerResponse>(ResponseContext)

  return (
    <div>
        {
            responseRegister && <Error msg={responseRegister} />
        }
    </div>
  )
}

export default ErrorRegister