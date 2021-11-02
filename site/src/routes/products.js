var express = require('express');
var router = express.Router();
const validaciones = require('../middlewares/addProductValidation');
const upload = require('../middlewares/multer')
const adminCheck = require('../middlewares/adminCheck')
const localUser = require('../middlewares/localUser')

const {add,detail,edit,update,remove,save,search,products,mouse,auricular,teclado,monitor} = require('../controllers/productsController');


/* GET products listening. */
router.get('/add', adminCheck ,add) /* formulario */
router.post('/add', upload.single('image'),validaciones, save); 

router.get('/detalle/:id',detail); /*   */

router.get('/edit/:id',adminCheck,edit); 
router.put('/edit/:id',update); 

router.get('/search',search);

router.delete('/remove/:id',remove); /*  */

router.get('/productos',products)

router.get('/productos/mouse',mouse)
router.get('/productos/auricular',auricular)
router.get('/productos/teclado',teclado)
router.get('/productos/monitor',monitor)



module.exports = router;
