var express = require('express');
var router = express.Router();
const {login,register,processRegister,processlogin, logout,profile,profileEdit,profileUpdate} = require('../controllers/userController')

const validaciones = require('../middlewares/registerValidation');

const loginValidator = require('../validations/loginValidator');

const localUser = require('../middlewares/localUser')

const adminCheck = require('../middlewares/adminCheck')

/* GET users listing. */
router.get('/login', login);
router.post('/login',/* loginValidator */processlogin);

router.get('/register',register);
router.post('/register', validaciones, processRegister);

router.get('/logout',logout);

router.get('/profile/:id', localUser, profile)

router.get('/editProfile/:id',localUser, profileEdit)
router.put('/editProfile/:id',localUser,profileUpdate)


module.exports = router;
