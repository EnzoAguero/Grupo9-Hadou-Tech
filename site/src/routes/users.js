var express = require('express');
var router = express.Router();
const {login,register,processRegister,processlogin, logout} = require('../controllers/userController')
const validaciones = require('../middlewares/registerValidation');
//const loginValidator
const loginValidator = require('../validations/loginValidator');

/* GET users listing. */
router.get('/login', login);
router.post('/login',loginValidator,processlogin);
router.get('/register',register);
router.post('/register', validaciones, processRegister);
router.get('/logout',logout);

module.exports = router;
