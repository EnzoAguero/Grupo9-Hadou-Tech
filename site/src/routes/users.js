var express = require('express');
var router = express.Router();
const {login,register, processRegister} = require('../controllers/userController')


/* GET users listing. */
router.get('/login', login)
router.get('/register',register)
router.post('/register',processRegister)

module.exports = router;
