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

export const postLogin = async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    })

    if (user) {
        responder(res, user, 'User logged in successfully')
    }
    else {
        responder(res, null, 'UserName or password is incorrect ')
    }
}

export const deleteUser = async (req, res) => {
    const { email } = req.params;
    const user = await User.deleteOne({
        email: email,
    });
    responder(res, user, 'User deleted successfully')
}

