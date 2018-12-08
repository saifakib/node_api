const express = require('express');
const router = express.Router();
const UserController = require('../controller/user');
const auth = require('../middleware/authentication');

//Get Route
router.get('/', auth, UserController.allUser);

//Post Route
router.post('/register', UserController.registerController);
router.post('/login', UserController.loginController);



module.exports = router;