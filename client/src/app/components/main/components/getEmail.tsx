import React, { useContext, useEffect } from 'react'
import { BsTrash } from "react-icons/bs";

import { EmailContext } from '../../../server/actions/email.actions'
import { UserContext } from '../../../server/actions/user.actions'

const GetEmail = ({ idEmail, setIsGetEmail, setIsEmailsSent }: any) => {

    const { getEmailAction, removeEmail, message } = useContext(EmailContext)
    const { user } = useContext(UserContext)

    useEffect(() => {
        getEmailAction(idEmail)
    }, [idEmail])

    const deleteEmail = () => {
        removeEmail(idEmail, setIsEmailsSent, setIsGetEmail)
    }

    return (
        <div className='container-getmail'>
            <div className='contain-header-getemail'>
                <p className='subject-getemail'>{message.subject}</p>
                <div className='container-info-getemail'>
                    {
                        message.from?._id === user.user._id && <BsTrash className='trash-icon letnoselect' onClick={deleteEmail} />
                    }
                    <p><u>From</u>: {message.from?.email}</p>
                    <p><u>To</u>: {message.to?.email}</p>
                </div>
            </div>
            <p className='description-getemail'>{message.description}</p>
        </div>
    )
}

export default GetEmail