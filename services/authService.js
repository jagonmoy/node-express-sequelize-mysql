import authRepository from "../repositories/authRepository.js"
const signUp = async ({name,username,email,password}) => {
    try {
        console.log(name,username,email,password)
        const newUser = await authRepository.signUp(name,username,email,password);
        return newUser;
    }
    catch {

    }
}

export default {
    signUp
}