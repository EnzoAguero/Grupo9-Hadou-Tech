var express = require('express');
var router = express.Router();

const {} = require('../controllers/productsController');

/* GET home page. */
router.get('/add', add) /* formulario */
router.get('/detalle/:id',detalle); /*   */
router.get('/edit/:id',edit); /* formulario  */
router.put('/edit/:id',update); /* formulario */
router.delete('/remove/:id',remove); /*  */

module.exports = router;
