import React, { createContext, useReducer, useContext } from 'react'

import { initialResponse } from '../values/response.value'
import responseReducer from '../reducers/response.reducer'
import { ERROR_CREATE } from '../constants/response.const'

import * as emailApi from '../api/email.api'
import { CREATE_MESSAGE, DELETE_MESSAGE, GET_MESSAGE, MESSAGES_OBTAINED, MESSAGES_SENT } from '../constants/email.const'
import emailReducer from '../reducers/email.reducer'
import { initialEmail } from '../values/email.value'

import { UserContext } from './user.actions'

export const EmailContext = createContext(initialEmail)
export const ResponseContext = createContext(initialResponse)

export const EmailContextGlobal = ({ children }: any) => {

    const [state, dispatch] = useReducer(emailReducer, initialEmail)
    const [stateR, dispatchR] = useReducer(responseReducer, initialResponse)

    const { user } = useContext(UserContext)

    const emailsObtained = async () => {

        try {

            const { data } = await emailApi.emailsObtainedApi(user.token)

            dispatch({
                type: MESSAGES_OBTAINED,
                payload: data
            })

        } catch (error) {
            throw error
        }

    }

    const emailsSent = async () => {

        try {

            const { data } = await emailApi.emailsSentApi(user.token)

            dispatch({
                type: MESSAGES_SENT,
                payload: data
            })

        } catch (error) {
            throw error
        }

    }

    const getEmailAction = async (id: string) => {

        try {

            const { data } = await emailApi.getEmailApi(id, user.token)

            dispatch({
                type: GET_MESSAGE,
                payload: data
            })

        } catch (error) {
            throw error
        }

    }

    const createEmail = async (emailData: any, setIsNewEmail: any, setIsEmailsSent: any) => {

        try {

            const { data } = await emailApi.createEmailApi(emailData, user.token)

            dispatch({
                type: CREATE_MESSAGE,
                payload: data
            })

            setIsNewEmail(false)
            emailsSent()
            setIsEmailsSent(true)

        } catch (error: any) {
            dispatchR({
                type: ERROR_CREATE,
                payload: error.response.data.message
            })
        }

    }

    const removeEmail = async (id: string, setIsEmailsSent: any, setIsGetEmail: any) => {

        try {

            await emailApi.removeEmailApi(id, user.token)

            dispatch({
                type: DELETE_MESSAGE,
                payload: id
            })

            setIsEmailsSent(true)
            setIsGetEmail(false)

        } catch (error) {
            throw error
        }

    }

    return (
        <ResponseContext.Provider value={stateR}>
            <EmailContext.Provider value={{ ...state, emailsObtained, emailsSent, getEmailAction, createEmail, removeEmail }}>
                {children}
            </EmailContext.Provider>
        </ResponseContext.Provider>
    )
}