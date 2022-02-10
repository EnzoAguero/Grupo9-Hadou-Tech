const path = require('path')
const {validationResult} = require('express-validator')
const db = require('../../database/models')
const {productos} = require('../data/products_db')
const { Op  } = require('sequelize');
const product = require('../../database/models/product');

module.exports = {
   search : (req, res) => {
      db.Product.findAll( { 
         include : ['marks', 'images'],
         where : {
            [Op.or] : [
               {
                  name : {
                    [Op.substring] : req.query.search
                  }
               },
               {
                  description : {
                     [Op.substring] : req.query.search
                  }
               }
            ]
         }
      }).then(result => res.render('resultSearch',{
         result,
         productos,
         busqueda : req.query.search
      })).catch(error => console.log(error))

   },

   add : (req,res) => {
    let usuario = req.session.userLogin
    
    return res.render('productAdd',{
      usuario

    })     
  },
  save : (req,res) =>{
    let errors = validationResult(req);
    
    if(errors.isEmpty()){  
      db.Product.create({
        name: req.body.name.trim(),
        price: req.body.price,
        cuotas: req.body.cuotas,
        description: req.body.description
        
      }).then(producto => {
        db.Image.create({
          file : req.file.filename,
          productId : producto.id
          
        }).then(image => {
          db.Mark.create({
            name : req.body.mark.trim(),
            productId : producto.id
          }).then(result => res.redirect('/'))
        }
        
        )
        
      }).catch(error => console.log(error))
    
    }else{
      return res.render('productAdd',{
        errores : errors.mapped(),
        old : req.body
      })
    } 
  },
  detail : (req,res) => {
    let usuario = req.session.userLogin

    db.Product.findOne({
      where : {
          id : req.params.id
      },
      include : ['images','marks',
      ]
  }).then(producto =>{
          return res.render('detalle',{
              producto,
              usuario

          })
  }).catch(error => console.log(error))

  },
  edit : (req,res) => {
    let usuario = req.session.userLogin

    db.Product.findOne({
      where : {
          id : req.params.id
      },
      include : ['images','marks',
      ]
  }).then(producto =>{
          return res.render('productEdit',{
              producto,
              usuario

          })
  }).catch(error => console.log(error))

  },
  update: (req, res) => {

    let {nombre,precio,imagen,cuotas,description,marca} = req.body

    db.Product.update({
     name : nombre,
     price : precio,
     cuotas : cuotas,
     description,
     image : req.file ? req.file.filename : product.images
    },
    {
      where : {
        id :  req.params.id
      }
    }).then(product => 
      db.Mark.update({
        name : marca,
        productId :  req.params.id
      },
      { 
        where : {
        id :  req.params.id
      }
    })).then(() => res.redirect('/products/productos'))
      .catch(error => console.log(error))
  },

  
  remove : (req,res) => {
    db.Product.destroy({
      where: {
          id: req.params.id
      }
  }).then(() => res.redirect('/'))
      .catch(error => console.log(error))
  },

  products : (req,res) => {
    let usuario = req.session.userLogin

    db.Product.findAll({
      include : [ 'images','marks'
    ],
    }).then(productos => {
      
        res.render('productos',{
        usuario,
        producto : productos
        }
        )}) 
},
  mouse : (req,res) => {
    let usuario = req.session.userLogin

    db.Product.findAll({
      include : ['images','marks'],
      where : {
        name : 'Mouse'
      }
    })
    .then(productos => res.render('productos',{
      producto : productos,
      usuario
    }))
  },
  teclado : (req,res) => {
    let usuario = req.session.userLogin

    db.Product.findAll({
      include : ['images','marks'],
      where : {
        name : 'Teclado'
      }
    })
    .then(productos => res.render('productos',{
      producto : productos,
      usuario
    }))
  },
 auricular : (req,res) => {
  let usuario = req.session.userLogin

    db.Product.findAll({
      include : ['images','marks'],
      where : {
        name : 'Auriculares'
      }
    })
    .then(productos => res.render('productos',{
      producto : productos,
      usuario
    }))
  },
  monitor : (req,res) => {
    let usuario = req.session.userLogin

    db.Product.findAll({
      include : ['images','marks'],
      where : {
        name : 'Monitor'
      }
    })
    .then(productos => res.render('productos',{
      producto : productos,
      usuario
    }))
  }
}

