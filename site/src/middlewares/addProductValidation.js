const {check, body} = require('express-validator');

module.exports = [
    check('name').notEmpty().withMessage('Debe seleccionar al menos un nombre'),
    check('mark').notEmpty().withMessage('Debe seleccionar al menos una marca'),
    check('price').notEmpty().withMessage('Debe seleccionar al menos un precio'),
    check('cuotas').notEmpty().withMessage('Debe seleccionar al menos cuantas cuotas tendra el producto')
   
    
]
