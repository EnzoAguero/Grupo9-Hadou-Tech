var express = require('express');
var router = express.Router();
const validaciones = require('../middlewares/addProductValidation');
const upload = require('../middlewares/multer')

const {add,detail,edit,update,remove,save,search} = require('../controllers/productsController');

const adminCheck = require('../middlewares/adminCheck')

/* GET home page. */
router.get('/add', adminCheck ,add) /* formulario */
router.post('/add', upload.single('image'),validaciones, save); 

router.get('/detalle/:id',detail); /*   */

router.get('/edit/:id',edit); 
router.put('/edit/:id',update); 

router.get('/search',search);

router.delete('/remove/:id',remove); /*  */



module.exports = router;
