
const User = require('../module/userModule');
// singup user

const authSingup = async(req, res) => {
    try {
        const data = req.body;
        const newUser = new User(data);
        await newUser.save();
        console.log("User saved");
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'internal server error' });
      console.log(error.message);
    }
}


const authSingin = 

module.exports = { authSingup };