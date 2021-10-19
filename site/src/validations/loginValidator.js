/* const {body} = require('express-validator');
const {usuarios} = require('../data/user');
const bcrypt = require('bcrypt');
module.exports = [
  body('email')
  .custom((value, {req}) =>{
    let usuario = usuarios.find(usuario => usuario.correo === value && bcrypt.compareSync(req.body.contrasenia, usuario.contrasenia));
    if(usuario){
      return true;
    }
    else{
      return false;
    }
  }).withMessage('credenciales incorrectas')
] */

