import authService from "../services/authService.js"

const signUp = async (req,res) => {
    try {
       
        const newUser = await authService.signUp(req.body)
        return res.status(200).json(newUser)
    }
    catch {

    }
}

export default {
    signUp
}