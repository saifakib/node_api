const express = require('express');
const router = express.Router();
const UserController = require('../controller/user');
const auth = require('../middleware/authentication');

router.post('/register', UserController.registerController);
router.post('/login', UserController.loginController);

router.get('/', auth, UserController.allUser);

module.exports = router;