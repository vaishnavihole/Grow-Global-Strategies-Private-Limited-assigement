import responder from '../utils/resopnder.js';
import User from './../models/User.js';

export const postSignup = async (req, res) => {
    try {
      const { fullName, email, password, mobile } = req.body;
  
      const user = new User({
        fullName: fullName,
        email: email,
        mobile: mobile,
        password: password,
      });
  
      const savedUser = await user.save();
      responder(res, savedUser, 'Signup successful');
    } catch (error) {
      console.error('Error during signup:', error);
      responder(res, null, 'An error occurred during signup', 500);
    }
};
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


export const putUser = async (req, res) => {
    const { id } = req.params;
    const { fullName, email, mobile, password } = req.body;

    await User.updateOne(
        {
            _id: id,
        },
        {
            $set: {
                fullName,
                email,
                mobile,
                password
            },
        }
    );

    const updatedUser = await User.findById(id);
    responder(res, updatedUser, 'User updated successfully')
}



