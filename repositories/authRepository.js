import { User } from "../models/userModel.js"
const signUp = async (name,username,email,password) => {
    try {
        const newUser = User.create({
            name,
            username,
            email,
            password
        })
        return newUser;

    } catch(error) {
        next(err)
    }
}

export default {
    signUp
}