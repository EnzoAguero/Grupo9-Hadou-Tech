
const {usuarios,guardar} = require('../data/user');
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');

module.exports = {
    register : (req,res) => {
        return res.render('register',{
            title : "Hadou Tech",
           
        })
    },
    login : (req,res) => {
        return res.render('login',{
            title : "Hadou Tech",
            
        })
    },
    processRegister : (req,res) => {
        let errors = validationResult(req);
        let {correo,nombre,apellido,email,contrasenia,pais,provincias,ciudad,postal,direccion,telefono,acepta} = req.body;
    
        if(errors.isEmpty()){ /* si no hay errores  */
            let usuario = {  /* me crea el usuario */
                id : usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1,
                correo,
                nombre,
                apellido,
                email,
                provincias,
                ciudad,
                postal,
                direccion,
                telefono,
                acepta,
                contrasenia : bcrypt.hashSync(contrasenia,10),/* encriptacion de contraseña */
                pais,
              
                
            }
            
            usuarios.push(usuario);
            guardar(usuarios);
            
            return res.redirect('/')
        }else{
            console.log(errors);
            return res.render('register',{
                old : req.body,
                errores : errors.mapped()
            })
        }
        
    },
}
   