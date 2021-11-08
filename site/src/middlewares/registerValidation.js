const {check, body} = require('express-validator');
const db = require('../../database/models/')
module.exports = [

    check('email').notEmpty().withMessage('Debes ingresar un email válido').bail()
    .isEmail().withMessage('Debes ingresar un mail válido'),

    body('email')
    .custom(value => {
        console.log(value)
        return db.User.findOne({
            where : {
                email : value
            }
        }).then(user => {
            if(user){
                return Promise.reject('El email ya está registrado')
            }
        })
    }),

    check('password')
    .isLength({
        min : 6,
        max : 15
    }).withMessage('La contraseña debe tener entre 6 y 15 caracteres'),

    body('confirmar')
    .custom((value,{req}) => {
        if(value !== req.body.password){
            return false
        }
        return true
    }).withMessage('Las contraseñas no coinciden'),
    
    check('name')
    .notEmpty().withMessage('El nombre es obligatorio').bail()
    .isLength({
        min : 2,
        max : 50
    }).withMessage('El nombre tiene que tener como mínimo 2 caracteres').bail()
    .isAlpha().withMessage('El nombre debe contener solo letras'),

    check('last_name').notEmpty().withMessage('El apellido es obligatorio').bail()
    .isLength({
        min : 2,
        max : 50
    }).withMessage('El apellido tiene que tener como mínimo 2 caracteres').bail()
    .isAlpha().withMessage('El apellido debe contener solo letras'),

    check('acepta')
    .isString('on').withMessage('Debes aceptar los términos y condiciones'),

  

]
