var express = require('express');
var router = express.Router();

const {list, add,save,detail,edit,remove,carrito} = require('../controllers/productsController');

/* GET home page. */
router.get('/add', add) /* formulario */
router.get('/list', list)
router.get('/detalle/:id',detail); /*   */
router.get('/edit/:id',edit); /* formulario  */
router.put('/edit/:id',save); /* formulario */
router.delete('/remove/:id',remove); /*  */
router.get('/carrito',carrito)

module.exports = router;
