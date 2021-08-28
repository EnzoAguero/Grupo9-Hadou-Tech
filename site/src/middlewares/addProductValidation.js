const {check, body} = require('express-validator');

module.exports = [
    check('nombre').notEmpty().withMessage('Debe seleccionar al menos un nombre'),
    check('marca').notEmpty().withMessage('Debe seleccionar al menos una marca'),
    check('precio').notEmpty().withMessage('Debe seleccionar al menos un precio'),
    check('imagen').notEmpty().withMessage('Debe seleccionar al menos una imagen'),
    check('cuotas').notEmpty().withMessage('Debe seleccionar al menos cuantas cuotas tendra el producto')
   
    
]
