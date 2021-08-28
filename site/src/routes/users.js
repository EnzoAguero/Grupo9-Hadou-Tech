var express = require('express');
var router = express.Router();
const {login,register,processRegister} = require('../controllers/userController')
const validaciones = require('../middlewares/registerValidation');


/* GET users listing. */
router.get('/login', login)

router.get('/register',register)
router.post('/register', validaciones, processRegister)

module.exports = router;
