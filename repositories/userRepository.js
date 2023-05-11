import { User } from "../models/userModel.js"
const getAllusers = async (req,res) => {
    try {
        const users = User.findAll();
        return users;
    } catch(error) {

    }
}

export default {
    getAllusers
}