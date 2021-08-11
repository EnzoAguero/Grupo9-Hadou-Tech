var express = require('express');
var router = express.Router();

const {add,detail,edit,update,remove,carrito,save} = require('../controllers/productsController');

/* GET home page. */
router.get('/add', add) /* formulario */
router.post('/add', save); 

router.get('/detalle/:id',detail); /*   */

router.get('/edit/:id',edit); /* formulario  */
router.put('/edit/:id',update); /* formulario */

router.delete('/remove/:id',remove); /*  */

router.get('/carrito',carrito)

module.exports = router;
