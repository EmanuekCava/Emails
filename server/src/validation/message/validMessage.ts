import { Request, Response, NextFunction } from "express";

import User from '../../database/model/user';

const validMessage = async (req: Request, res: Response, next: NextFunction) => {

    const { subject, description, to } = req.body

    if(!subject || !description) {
        return res.status(400).json({ message: "Try to write a subject and a description" })
    }

    if(!to) {
        return res.status(400).json({ message: "Try to write an addressee" })
    }

    const user = await User.findOne({ email: to })
    
    if(!user) {
        return res.status(400).json({ message: "User with that address does nor exists" })
    }

    if(subject.length > 80) {
        return res.status(400).json({ message: "Description must have less than 80 characters" })
    }

    if(description.length > 200) {
        return res.status(400).json({ message: "Description must have less than 200 characters" })
    }

    next()

}

export default validMessage