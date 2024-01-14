import { Request, Response } from "express";
import jwt from 'jsonwebtoken'

import { encryptPassword } from '../helper/encrypt'

import User from '../database/model/user'

import { IUser } from "interface/User";
import { jwtKey } from "../config/config";

export const users = async (req: Request, res: Response): Promise<Response> => {

    try {

        const showUsers = await User.find()

        return res.status(200).json({
            users: showUsers,
            amount: showUsers.length
        })
        
    } catch (error) {
        throw(error)
    }

}

export const register = async (req: Request, res: Response): Promise<Response> => {

    const { name, surname, email, birth, gender, country, password } = req.body;

    try {

        const pass = await encryptPassword(password)

        const newUser: IUser = new User({
            name,
            surname,
            email,
            birth,
            gender,
            country,
            password: pass
        })

        const token = jwt.sign({ id: newUser._id }, `${jwtKey}`, {
            expiresIn: '7d'
        })

        const userSaved = await newUser.save()

        return res.status(200).json({
            user: userSaved,
            token
        })
        
    } catch (error) {
        throw(error)
    }

}

export const login = async (req: Request, res: Response): Promise<Response> => {

    const { email } = req.body

    try {

        const user = await User.findOne({ email })

        const token = jwt.sign({ id: user!._id }, `${jwtKey}`, {
            expiresIn: '7d'
        })

        return res.status(200).json({
            user,
            token
        })
        
    } catch (error) {
        throw(error)
    }

}

export const removeUser = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        await User.findByIdAndDelete(id)

        return res.status(200).json({ message: "User was removed" })
        
    } catch (error) {
        throw(error)
    }

}