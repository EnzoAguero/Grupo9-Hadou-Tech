var express = require('express');
var router = express.Router();
const {login,register,processRegister,processlogin, logout,profile,profileEdit,profileUpdate} = require('../controllers/userController')

const validaciones = require('../middlewares/registerValidation');

const loginValidator = require('../validations/loginValidator');

const localUser = require('../middlewares/localUser')

const upload = require('../middlewares/userAvatar')

const adminCheck = require('../middlewares/adminCheck')


/* GET users listing. */
router.get('/login', login);
router.post('/login', /* loginValidator */ processlogin);

router.get('/register',register);
router.post('/register', validaciones, processRegister);

router.get('/logout',logout);

router.get('/profile',localUser , profile)


router.get('/editProfile',localUser, profileEdit)
router.put('/editProfile',localUser,upload.single('image'),profileUpdate)


module.exports = router;
