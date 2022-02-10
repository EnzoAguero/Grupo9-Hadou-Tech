const {validationResult} = require('express-validator');
const db = require('../../database/models')
const bcrypt = require('bcryptjs')



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

  processlogin : (req,res) => {

    let errors = validationResult(req);
    const {email, recordar} = req.body;
    if(errors.isEmpty()){
      db.User.findOne({
        where : {
            email
        }
    }).then(user => {
      console.log(user);
      req.session.userLogin = {
          id : user.id,
          name : user.name,
          image : user.image,
          rol : user.rol,
         
    }

    recordar && res.cookie('HadouTechForEver',req.session.userLogin,{maxAge: 10000 * 60})
    return res.redirect('/')
    })
  }else{
      return res.render('login',{
          errores : errors.mapped()
      })
  }
     
  },

  processRegister : (req,res) => {
    
    const {name,last_name,email,password} = req.body
    let errors = validationResult(req);

    if(errors.isEmpty()){
          db.User.create({
          name : name.trim(),
          last_name : last_name.trim(),
          email : email.trim(),
          password : bcrypt.hashSync(password,10),
          image : 'default-avatar.jpg',
          rol : 'usuario'

      }).then(user => {
        db.Address.create({
          city : '-',
          address : '-',
          province : '-',
          country : '-',
          phone : 1,
          cp : 1,
          userId : user.id
        }).then(result => res.redirect('/'))
        req.session.userLogin = {
            id : user.id,
            name : user.name,
            image : user.image,
            rol : user.rol
        }
  
      
})
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
      include : [
        {association : 'addresses',}
    ],
      where : {
          id : usuario.id
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
    include : [
      {association : 'addresses',}
  ],
    where : {
        id : usuario.id
    }
}).then(user =>{
        return res.render('editProfile',{
          user,
          usuario
          
        })
}).catch(error => console.log(error))

},
profileUpdate : (req,res) => {
 /*  return res.send(req.file) */
  let usuario = req.session.userLogin

  let {city,address,country,province,cp,phone} = req.body
  var {name,last_name,password} = req.body
  
db.User.update({
    name,
    last_name,
    password: password != " " && bcrypt.hashSync(password,10),
    image : req.file ? req.file.filename : usuario.image
  },
  {
    where : {id : usuario.id}
  }
  ).then(() =>
    db.Address.update({
      city:city,
      address:address,
      province:province,
      country:country,
      phone:+phone,
      cp:+cp,
      },
    {
      where : {userId : usuario.id}
    }).then(() => {
      req.session.userLogin = {
        id : usuario.id,
        name : name,
        image : req.file ? req.file.filename : usuario.image,
        rol : usuario.rol

       
  } 

    res.redirect('/users/profile')
  })


    .catch(error => console.log(error)) 
    
  )
  
}
}

