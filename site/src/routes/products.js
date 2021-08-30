var express = require('express');
var router = express.Router();
const validaciones = require('../middlewares/addProductValidation');
const upload = require('../middlewares/multer')

const {add,detail,edit,update,remove,save,mouse,search} = require('../controllers/productsController');



/* GET home page. */
router.get('/add', add) /* formulario */
router.post('/add', upload.single('imagen'),validaciones, save); 

router.get('/detalle/:id',detail); /*   */

router.get('/edit/:id',edit); 
router.put('/edit/:id',update); 

router.get('/search',search);

router.delete('/remove/:id',remove); /*  */

router.get('/mouse',mouse)

module.exports = router;
