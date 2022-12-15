import { Request, Response } from "express";
import { IMessage } from "interface/Message";

import Message from '../database/model/message'
import user from "../database/model/user";

export const messages = async (req: Request, res: Response): Promise<Response> => {

    try {

        const messages = await Message.find({ from: req.user }).populate("to", "email")

        return res.status(200).json(messages)
        
    } catch (error) {
        throw error
    }

}

export const messagesObtained = async (req: Request, res: Response): Promise<Response> => {

    try {

        const messages = await Message.find({ to: req.user }).populate("from", "email")

        return res.status(200).json(messages)
        
    } catch (error) {
        throw error
    }

}


export const message = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const message = await Message.findById(id).populate("to", "email").populate("from", "email")

        return res.status(200).json(message)
        
    } catch (error) {
        throw error
    }

}

export const createMessage = async (req: Request, res: Response): Promise<Response> => {

    const { subject, description, to } = req.body

    try {

        const addressUser: IMessage | any = await user.findOne({ email: to })

        const newMessage = new Message({
            subject,
            description,
            to: addressUser?._id,
            from: req.user
        })

        const messageSaved = await newMessage.save()

        return res.status(200).json(messageSaved)
        
    } catch (error) {
        throw error
    }

}

export const removeMessage = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const message = await Message.findById(id)

        if(req.user != message?.from) {
            return res.status(400).json({ message: "You cannot delete this" })
        }

        await Message.findByIdAndDelete(id)

        return res.status(200).json({ message: "Message was removed" })
        
    } catch (error) {
        throw error
    }

}