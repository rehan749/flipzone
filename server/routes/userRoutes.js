const express = require('express');
const router = express.Router();

const UserController = require('../controller/userController');
// const User = require('../module/userModule');



// post mesthod
router.post('/singup', UserController.authSingup);

// get method 
// router.get('/')

module.exports = router;