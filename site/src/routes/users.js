var express = require('express');
var router = express.Router();
const {login,register,processRegister,processlogin, logout,profile} = require('../controllers/userController')

const validaciones = require('../middlewares/registerValidation');

const loginValidator = require('../validations/loginValidator');

/* GET users listing. */
router.get('/login', login);
router.post('/login',loginValidator,processlogin);

router.get('/register',register);
router.post('/register', validaciones, processRegister);

router.get('/logout',logout);

router.get('/profile/:id',profile)

module.exports = router;
