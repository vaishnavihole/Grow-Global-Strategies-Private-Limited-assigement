import responder from '../utils/resopnder.js';
import User from './../models/User.js';

export const postSignup = async (req, res) => {
    const { fullName, email, password, mobile } = req.body
    const user = new User({
        fullName: fullName,
        email: email,
        mobile: mobile,
        password: password
    })
    const savedUser = await user.save()
    responder(res, savedUser, 'signup successfully')
}
