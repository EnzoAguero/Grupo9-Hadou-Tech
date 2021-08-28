const {check, body} = require('express-validator');

module.exports = [

    check('email').notEmpty().withMessage('Debes ingresar un email válido').bail()
    .isEmail().withMessage('Debes ingresar un mail válido'),

    check('contrasenia')
    .isLength({
        min : 6,
        max : 15
    }).withMessage('La contraseña debe tener entre 6 y 15 caracteres'),

    body('confirmar')
    .custom((value,{req}) => {
        if(value !== req.body.contrasenia){
            return false
        }
        return true
    }).withMessage('Las contraseñas no coinciden'),
    
    check('nombre')
    .notEmpty().withMessage('El nombre es obligatorio').bail()
    .isLength({
        min : 2,
        max : 50
    }).withMessage('El nombre tiene que tener como mínimo 2 caracteres').bail()
    .isAlpha().withMessage('El nombre debe contener solo letras'),

    check('apellido').notEmpty().withMessage('El apellido es obligatorio').bail()
    .isLength({
        min : 2,
        max : 50
    }).withMessage('El apellido tiene que tener como mínimo 2 caracteres').bail()
    .isAlpha().withMessage('El apellido debe contener solo letras'),

    check('pais').notEmpty().withMessage('Debe seleccionar al menos un país'),

    check('provincia').notEmpty().withMessage('Debe seleccionar al menos una provincia'),

    check('ciudad').notEmpty().withMessage('Debe poner su ciudad'),

    check('postal').notEmpty().withMessage('Debe ingresar su codigo postal').isInt({min : 4}),

    check('direccion').notEmpty().withMessage('Debe ingresar su direccion'),

    check('telefono').notEmpty().withMessage('Debe ingresar su numero de telefono').isInt(),

    check('acepta')
    .isString('on').withMessage('Debes aceptar los términos y condiciones'),

    /* check('imagen').notEmpty().withMessage('Ingrese su foto de perfil') */

]
