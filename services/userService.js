import userRepository from "../repositories/userRepository.js"

const getAllusers = async (req,res) => {
    try {
        const users = await userRepository.getAllusers();
        return users;
    } catch(err) {
        next(err);
    }
}

export default{
    getAllusers
}