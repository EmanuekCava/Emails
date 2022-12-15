import React, { useEffect, useContext, useState } from 'react'

import Actions from '../components/main/actions'
import Mails from '../components/main/mails'

import { EmailContext } from '../server/actions/email.actions'

import { authProps } from '../types/auth.props'

const Main = ({ setIsIndex }: authProps) => {

  const { emailsObtained, emailsSent, messagesObtained, messagesSent } = useContext(EmailContext)

  const [isEmailReceived, setIsEmailReceived] = useState(true)
  const [isNewEmail, setIsNewEmail] = useState(false)
  const [isEmailsSent, setIsEmailsSent] = useState(false)
  const [isGetEmail, setIsGetEmail] = useState(false)

  useEffect(() => {
    setIsIndex(true)
    emailsObtained()
    emailsSent()
  }, [])


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