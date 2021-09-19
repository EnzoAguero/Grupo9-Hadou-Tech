const bcrypt = require('bcryptjs');
const {usuarios, guardar } = require('../data/user');
const {validationResult} = require('express-validator')



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
  //processlogin

  processlogin : (req,res) => {

    let errors = validationResult(req);
    const {email, recordar} = req.body;//volver a verlo 
    if(errors.isEmpty()){
      let usuario = usuarios.find(usuario => usuario.correo === email)
      req.session.userLogin = {
        id: usuario.id,
        nombre : usuario.nombre,
        rol : usuario.rol 
      }
      if(recordar){
        res.cookie('ver',req.session.userLogin,{maxAge: 1000 * 60})
      }
      
      return res.redirect('/')
    }
    else{
      return res.render('login',{
        errores : errors.mapped()
      })
    }
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
  logout : (req,res) =>{
    req.session.destroy()
    return res.redirect('/')
  },
  profile : (req,res) => {

    let usuario = usuarios.find(usuario => usuario.id === +req.params.id)

    return res.render('profile',{
      usuario,
      usuarios
    })
}
}

