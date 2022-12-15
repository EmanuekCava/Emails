import React, { useEffect } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { MdOutlineAddBox } from "react-icons/md";
import { RiSendPlane2Line } from "react-icons/ri";

const Actions = ({ setIsEmailReceived, setIsNewEmail, setIsEmailsSent, setIsGetEmail, isEmailReceived, isNewEmail, isEmailsSent }: any) => {

    useEffect(() => {
    }, [isEmailReceived, isNewEmail, isEmailsSent])

    const showEmailsReceived = () => {
        setIsEmailReceived(true)
        setIsNewEmail(false)
        setIsEmailsSent(false)
        setIsGetEmail(false)
    }
    const showNewEmail = () => {
        setIsEmailReceived(false)
        setIsNewEmail(true)
        setIsEmailsSent(false)
        setIsGetEmail(false)
    }
    const showEmailsSent = () => {
        setIsEmailReceived(false)
        setIsNewEmail(false)
        setIsEmailsSent(true)
        setIsGetEmail(false)
    }

    return (
        <div className='container-actions'>
            <div className='contain-action' style={isNewEmail ? { background: '#ddd' } : {}} onClick={showNewEmail}>
                <MdOutlineAddBox className='icon-action letnoselect' />
                <p className='text-action letnoselect'>New email</p>
            </div>
            <div className='contain-action' style={isEmailReceived ? { background: '#ddd' } : {}} onClick={showEmailsReceived}>
                <AiOutlineMail className='icon-action letnoselect' />
                <p className='text-action letnoselect'>Emails received</p>
            </div>
            <div className='contain-action' style={isEmailsSent ? { background: '#ddd' } : {}} onClick={showEmailsSent}>
                <RiSendPlane2Line className='icon-action letnoselect' />
                <p className='text-action letnoselect'>Emails sent</p>
            </div>
        </div>
    )
}

export default Actions