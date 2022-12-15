import { Request, Response, NextFunction } from "express";
import bcrypt from 'bcryptjs';

import User from '../../database/model/user'

const validLogin = async (req: Request, res: Response, next: NextFunction) => {

    const { email, password } = req.body;

    if(!email || !password) {
        return res.status(400).json({ message: "There are empty fields. Please complete" })
    }

    const user = await User.findOne({ email })

    if(!user) {
        return res.status(400).json({ message: "User does not exists." })
    }

    const validation = await bcrypt.compare(password, user.password)

    if(!validation) {
        return res.status(400).json({ message: "Fields do not match" })
    }

    next()

}

export default validLogin