import axios from 'axios'

const api = axios.create({ baseURL: 'http://localhost:4100' })

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

export const createEmailApi = async (messageData: any, token: string) => {

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