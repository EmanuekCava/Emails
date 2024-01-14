import { MailTypeProps } from "../../../types/message.props"

const Mail = ({ email, isEmailReceived, isEmailsSent, setIsGetEmail, setIsNewEmail, setIsEmailReceived, setIsEmailsSent, setIdEmail }: MailTypeProps) => {

    const getEmail = () => {
        setIsGetEmail(true)
        setIsNewEmail(false)
        setIsEmailReceived(false)
        setIsEmailsSent(false)
        setIdEmail(email._id)
    }

    return (
        <div className='container-mail' onClick={getEmail}>
            <div className='container-main-mail'>
                {
                    isEmailReceived && <p className='email-email letnoselect'>{email.from.email}</p>
                }
                {
                    isEmailsSent && <p className='email-email letnoselect'>{email.to.email}</p>
                }
                <p className='subject-email letnoselect'>{email.subject}</p>
            </div>
            <p className='description-email letnoselect'>{email.description.slice(0, 40)} ...</p>
        </div>
    )
}

export default Mail