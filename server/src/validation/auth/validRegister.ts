import { Request, Response, NextFunction } from "express";

import User from '../../database/model/user'

const validRegister = async (req: Request, res: Response, next: NextFunction) => {

    const { name, surname, email, birth, gender, country, password, confirm } = req.body;

    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

    if (!name || !surname || !email || !birth || !gender || !country || !password || !confirm) {
        return res.status(400).json({ message: "There are empty fields. Please complete" })
    }

    if (name.length > 25) {
        return res.status(400).json({ message: "Name must have less than 25 characters" })
    }
    if (surname.length > 35) {
        return res.status(400).json({ message: "Surname must have less than 35 characters" })
    }

    const emailValid = validateEmail(email)

    if (!emailValid) {
        return res.status(400).json({ message: "That email is not allowed" })
    }

    const user = await User.findOne({ email })

    if (user) {
        return res.status(400).json({ message: "That email already exists" })
    }

    var countBirth = 0

    for(var i = 0; i < birth.length; i++) {
        if(birth[i] == "-") {
            countBirth++;
        }
    }

    if(countBirth != 2) {
        return res.status(400).json({ message: "The date of birth is wrote wrongly" })
    }

    var dateOfBirth = birth.split("-")

    for(var i = 0; i < dateOfBirth.length; i++) {

        try {
            
            dateOfBirth[i] = parseInt(dateOfBirth[i])   
            
        } catch (error) {
            return res.status(400).json({ message: "The date of birth is wrote wrongly" })
        }
    }

    if(dateOfBirth[0] <= 0 || dateOfBirth[0] >= 32) {
        return res.status(400).json({ message: "Make sure to write your day of birth correctly" })
    }
    if(dateOfBirth[1] <= 0 || dateOfBirth[1] >= 13) {
        return res.status(400).json({ message: "Make sure to write your month of birth correctly" })
    }
    if(dateOfBirth[2] <= 1923 || dateOfBirth[2] >= 2023) {
        return res.status(400).json({ message: "Make sure to write your year of birth correctly" })
    }
    
    
    if (password.length < 8) {
        return res.status(400).json({ message: "Password must have more than 7 characters" })
    }

    if (password != confirm) {
        return res.status(400).json({ message: "Password and confirm password do not match" })
    }

    var isNumber = false

    for(var i = 0; i < numbers.length; i++) {
        for(var j = 0; j < password.length; j++) {
            if(numbers[i] == password[j]) {
                isNumber = true
                break
            }
        }
        if(isNumber) {
            break
        }
    }

    if(!isNumber) {
        return res.status(400).json({ message: "Password must be at least a number character" })
    }

    next()

}

const validateEmail = (email: string) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

export default validRegister