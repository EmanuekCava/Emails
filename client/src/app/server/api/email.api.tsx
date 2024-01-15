import axios from 'axios'

import { IMessageData } from '../../interface/Email'

import { host_dev, host_prod } from '../../config/config'

const api = axios.create({ baseURL: !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? `${host_dev}` : `${host_prod}` })

export const emailsObtainedApi = async (token: string) => {

    return await api.get('/messagesobtained', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

}

export const emailsSentApi = async (token: string) => {

    return await api.get('/messages', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

}

export const getEmailApi = async (id: string, token: string) => {

    return await api.get(`/messages/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

}

export const createEmailApi = async (messageData: IMessageData, token: string) => {

    return await api.post('/createmessage', messageData, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })

}

export const removeEmailApi = async (id: string, token: string) => {

    return await api.delete(`/messages/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

}