const bcrypt = require('bcryptjs');
const {usuarios, guardar} = require('../data/user');
const {validationResult} = require('express-validator');
const db = require('../../database/models')



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
        rol : usuario.rol,
        apellido : usuario.apellido,
        
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
    let usuario = req.session.userLogin
    let errors = validationResult(req);

    if(errors.isEmpty()){

       db.User.create({
          name : req.body.name,
          last_name : req.body.last_name,
          email : req.body.email,
          password : req.body.password,
          rol : 'usuario'

      }).then(user => res.redirect('/',
      usuario)
      
        
    )
    .catch(error => console.log(error)) 
  }else{
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
    let usuario = req.session.userLogin

    db.User.findOne({
      where : {
          id : req.params.id
      }
  }).then(user =>{
          return res.render('profile',{
            user,
            usuario
          })
  }).catch(error => console.log(error))
},
profileEdit : (req,res) => {
  let usuario = req.session.userLogin

  db.User.findOne({
    where : {
        id : req.params.id
    }
}).then(user =>{
        return res.render('editProfile',{
          usuario,
          user
        })
}).catch(error => console.log(error))

  return res.render('editProfile',{
    usuario,
    
   
  })
},
profileUpdate : (req,res) => {

}

}

