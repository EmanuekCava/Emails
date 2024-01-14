import { useContext } from 'react'

import { ResponseContext } from '../../server/actions/user.actions'

import Error from '../component/error'

import { IReducerResponse } from '../../interface/Response'

const ErrorLogin = () => {

    const { responseLogin } = useContext<IReducerResponse>(ResponseContext)

  return (
    <div>
        {
            responseLogin && <Error msg={responseLogin} />
        }
    </div>
  )
}

export default ErrorLogin