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
          rol : user.rol,
         
    }

    recordar && res.cookie('craftsyForEver',req.session.userLogin,{maxAge: 1000 * 60})
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
          rol : 'usuario'

      }).then(user => {
        db.Address.create({
          city : '-',
          address : '-',
          province : '-',
          country : '-',
          phone : '1',
          cp : '1',
          userId : user.id
        }).then(result => res.redirect('/'))
        req.session.userLogin = {
            id : user.id,
            name : user.name,
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
    include : [
      {association : 'addresses',}
  ],
    where : {
        id : req.params.id
    }
}).then(user =>{
        return res.render('editProfile',{
          user,
          usuario
          
        })
}).catch(error => console.log(error))

},
profileUpdate : (req,res) => {
  let usuario = req.session.userLogin

  db.User.update({
    ...req.body,
      city : '-',
          address : '-',
          province : '-',
          country : '-',
          phone : '1',
          cp : '1',
  },
  {
    where : {id : req.params.id}
  }
  ).then(user => {
    return res.render('profile',{
      user,
      usuario
    })
  })
}

}

