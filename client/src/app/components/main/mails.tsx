import React, { useEffect, useState } from 'react'

import Create from './components/create'
import GetEmail from './components/getEmail'
import Mail from './components/mail'

const Mails = ({ messagesObtained, messagesSent, isEmailReceived, isNewEmail, isEmailsSent, isGetEmail, setIsEmailReceived, setIsNewEmail, setIsEmailsSent, setIsGetEmail }: any) => {

  const [idEmail, setIdEmail] = useState("")

  useEffect(() => {
  }, [isGetEmail, idEmail])

  return (
    <div className='container-mails'>
      {
        <>
          {
            isEmailReceived &&
            messagesObtained.map((email: any) => {
              return <Mail email={email} isEmailReceived={isEmailReceived} isEmailsSent={isEmailsSent}
                setIsGetEmail={setIsGetEmail} setIsNewEmail={setIsNewEmail} setIsEmailReceived={setIsEmailReceived} setIsEmailsSent={setIsEmailsSent} setIdEmail={setIdEmail} key={email._id} />
            })
          }
        </>
      }
      {
        <>
          {
            isEmailsSent &&
            messagesSent.map((email: any) => {
              return <Mail email={email} isEmailReceived={isEmailReceived} isEmailsSent={isEmailsSent}
                setIsGetEmail={setIsGetEmail} setIsNewEmail={setIsNewEmail} setIsEmailReceived={setIsEmailReceived} setIsEmailsSent={setIsEmailsSent} setIdEmail={setIdEmail} key={email._id} />
            })
          }
        </>
      }
      {
        isGetEmail && <GetEmail idEmail={idEmail} setIsGetEmail={setIsGetEmail} setIsEmailsSent={setIsEmailsSent} />
      }
      {
        isNewEmail && <Create setIsNewEmail={setIsNewEmail} setIsEmailsSent={setIsEmailsSent} />
      }
    </div >
  )
}

export default Mails