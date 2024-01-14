import { useEffect, useContext, useState } from 'react'

import Actions from '../components/main/actions'
import Mails from '../components/main/mails'

import { EmailContext } from '../server/actions/email.actions'
import { UserContext } from '../server/actions/user.actions'

import { IReducerEmail } from '../interface/Email'
import { IReducerUser } from '../interface/User'

const Main = () => {

  const { emailsObtained, emailsSent, messagesObtained, messagesSent } = useContext<IReducerEmail>(EmailContext)
  const { isLoggedIn } = useContext<IReducerUser>(UserContext)

  const [isEmailReceived, setIsEmailReceived] = useState<boolean>(true)
  const [isNewEmail, setIsNewEmail] = useState<boolean>(false)
  const [isEmailsSent, setIsEmailsSent] = useState<boolean>(false)
  const [isGetEmail, setIsGetEmail] = useState<boolean>(false)

  useEffect(() => {
    if (isLoggedIn) {
      emailsObtained!()
      emailsSent!()
    }
  }, [isLoggedIn])

  return (
    <div className='container-main'>
      <Actions setIsEmailReceived={setIsEmailReceived} setIsNewEmail={setIsNewEmail} setIsEmailsSent={setIsEmailsSent} setIsGetEmail={setIsGetEmail}
        isEmailReceived={isEmailReceived} isNewEmail={isNewEmail} isEmailsSent={isEmailsSent} />
      <Mails messagesObtained={messagesObtained} messagesSent={messagesSent}
        isEmailReceived={isEmailReceived} isNewEmail={isNewEmail} isEmailsSent={isEmailsSent} isGetEmail={isGetEmail}
        setIsEmailReceived={setIsEmailReceived} setIsNewEmail={setIsNewEmail} setIsEmailsSent={setIsEmailsSent} setIsGetEmail={setIsGetEmail} />
    </div>
  )
}

export default Main