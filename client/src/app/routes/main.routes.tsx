import { useEffect, useContext, useState } from 'react'

import Actions from '../components/main/actions'
import Mails from '../components/main/mails'

import { EmailContext } from '../server/actions/email.actions'
import { UserContext } from '../server/actions/user.actions'

import { IMessage, IReducerEmail } from '../interface/Email'
import { IReducerUser } from '../interface/User'
import { socket } from '../server/socket/socket'

const Main = () => {

  const { emailsObtained, emailsSent, messagesObtained, messagesSent, receiveEmail } = useContext<IReducerEmail>(EmailContext)
  const { isLoggedIn, user } = useContext<IReducerUser>(UserContext)

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

  useEffect(() => {
    socket.on("messages", (data: IMessage) => {
      if (data.to?._id === user.user?._id) {
        receiveEmail!(data)
      }
    })
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