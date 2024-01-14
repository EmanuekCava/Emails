import { createContext, useReducer, useContext, ReactNode } from 'react'

import { initialResponse } from '../values/response.value'
import responseReducer from '../reducers/response.reducer'
import { ERROR_CREATE } from '../constants/response.const'

import * as emailApi from '../api/email.api'
import { CREATE_MESSAGE, DELETE_MESSAGE, GET_MESSAGE, MESSAGES_OBTAINED, MESSAGES_SENT } from '../constants/email.const'
import emailReducer from '../reducers/email.reducer'
import { initialEmail } from '../values/email.value'

import { UserContext } from './user.actions'
import { IMessageData, IReducerEmail } from '../../interface/Email'
import { IAction } from '../../interface/Reducer'
import { IReducerResponse } from '../../interface/Response'

export const EmailContext = createContext<IReducerEmail>(initialEmail)
export const ResponseContext = createContext<IReducerResponse>(initialResponse)

export const EmailContextGlobal = ({ children }: { children: ReactNode }) => {

    const [state, dispatch] = useReducer<(state: IReducerEmail, action: IAction) => IReducerEmail>(emailReducer, initialEmail)
    const [stateR, dispatchR] = useReducer<(state: IReducerResponse, action: IAction) => IReducerResponse>(responseReducer, initialResponse)

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

    const createEmail = async (emailData: IMessageData, setIsNewEmail: (isNewEmail: boolean) => void, setIsEmailsSent: (isEmailsSent: boolean) => void) => {

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

    const removeEmail = async (id: string, setIsEmailsSent: (isEmailsSent: boolean) => void, setIsGetEmail: (isGetEmail: boolean) => void) => {

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
            <EmailContext.Provider value={{ ...state, emailsObtained, emailsSent, getEmailAction, createEmail, removeEmail } as any}>
                {children}
            </EmailContext.Provider>
        </ResponseContext.Provider>
    )
}