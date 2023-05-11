import userService from "../services/userService.js"

const getAllusers = async (req,res) => {
    try {
        const users = await userService.getAllusers()
        return res.status(200).json(users); 
    } catch(err) {
        next(err);
    }
}

export default {
    getAllusers
}