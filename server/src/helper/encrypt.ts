import bcrypt from 'bcryptjs'

export const encryptPassword = async (password: string): Promise<string> => {

    const salt = await bcrypt.genSalt(8)
    return await bcrypt.hash(password, salt)
    
}