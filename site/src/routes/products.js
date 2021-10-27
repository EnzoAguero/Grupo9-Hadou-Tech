var express = require('express');
var router = express.Router();
const validaciones = require('../middlewares/addProductValidation');
const upload = require('../middlewares/multer')
const adminCheck = require('../middlewares/adminCheck')

const {add,detail,edit,update,remove,save,search,products} = require('../controllers/productsController');


/* GET products listening. */
router.get('/add', adminCheck ,add) /* formulario */
router.post('/add', upload.single('image'),validaciones, save); 

router.get('/detalle/:id',detail); /*   */

router.get('/edit/:id',adminCheck,edit); 
router.put('/edit/:id',update); 

router.get('/search',search);

router.delete('/remove/:id',remove); /*  */

router.get('/productos',products)



module.exports = router;
