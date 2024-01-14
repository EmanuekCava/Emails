import { useContext } from 'react'

import { ResponseContext } from '../../server/actions/email.actions'

import Error from '../component/error'

import { IReducerResponse } from '../../interface/Response'

const ErrorCreate = () => {

    const { responseCreate } = useContext<IReducerResponse>(ResponseContext)

  return (
    <div>
        {
            responseCreate && <Error msg={responseCreate} />
        }
    </div>
  )
}

export default ErrorCreate