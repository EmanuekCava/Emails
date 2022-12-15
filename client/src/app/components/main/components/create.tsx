import React, { useState, ChangeEvent, FormEvent, useContext } from 'react'

import ErrorCreate from '../../../response/message/errorCreate'

import { EmailContext } from '../../../server/actions/email.actions'

const Create = ({ setIsNewEmail, setIsEmailsSent }: any) => {

    const { createEmail } = useContext(EmailContext)

    const initialState = {
        subject: "",
        description: "",
        to: ""
    }

    const [emailData, setEmailData] = useState(initialState)

    const { subject, description, to } = emailData

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setEmailData({ ...emailData, [name]: value })
    }

    const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createEmail(emailData, setIsNewEmail, setIsEmailsSent)
    }

    return (
        <div className='container-create'>
            <form className='container-form' style={{ width: '66%' }} onSubmit={handleSumbit}>
                <ErrorCreate />
                <fieldset className='field-form'>
                    <legend className='title-field-form letnoselect'>Send email</legend>
                    <div className='separator'>
                        <input type='text' name='to' placeholder='ADDRESS' className='input-form' value={to} onChange={handleChange} />
                    </div>
                    <div className='separator'>
                        <input type='text' name='subject' placeholder='SUBJECT' className='input-form' value={subject} onChange={handleChange} />
                    </div>
                    <div className='separator'>
                        <textarea name='description' placeholder='DESCRIPTION' className='textarea-form' value={description} onChange={handleChange} />
                    </div>
                    <div className='separator'>
                        <button className='button-form letnoselect'>SEND</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default Create