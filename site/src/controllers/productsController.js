const {productos,guardar} = require('../data/products');
const fs = require('fs')
const path = require('path')
const {validationResult} = require('express-validator')
const db = require('../../database/models')


module.exports = {

  search : (req,res) => {
    let result = productos.filter(producto => producto.nombre.toLowerCase().includes (req.query.search.toLowerCase()));

    return res.render('resultSearch',{
      title: 'Hadou Tech',
      result,
      productos,
      busqueda : req.query.search
    }) 

  },

  add : (req,res) => {
    return res.render('productAdd',{
      productos,
      title : "Hadou Tech",

    })     
  },
  save : (req,res) =>{
    let errors = validationResult(req);

    
    if(errors.isEmpty()){  
      db.Product.create({
        name: req.body.name.trim(),
        mark: req.body.mark.trim(),
        price: req.body.price,
        cuotas: req.body.cuotas,
        
      }).then(producto => {
        db.Image.create({
          file : req.file.filename,
          productId : producto.id
        }).then(result => res.redirect('/')
        
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

    db.Product.findOne({
      where : {
          id : req.params.id
      },
      include : [
          {association : 'images'},
      ]
  }).then(producto =>{
          return res.render('detalle',{
              producto,

          })
  }).catch(error => console.log(error))

  },
  edit : (req,res) => {
    let producto = productos.find(producto => producto.id === +req.params.id);

    return res.render('productEdit',{
      title : "Hadou Tech",
      productos,
      producto
    }) 

  },
  update: (req, res) => {
    const {nombre,marca,precio,oferta, cuotas} = req.body;
    productos.forEach(producto => {
      if(producto.id === +req.params.id){
        producto.id = +req.params.id;
        producto.nombre = nombre;
        producto.marca = marca;
        producto.precio = precio;
        producto.imagen = req.file ? req.file.filename : producto.imagen;
        producto.oferta = !!oferta;
        producto.cuotas = parseInt(cuotas, 10);
      }
    });

    guardar(productos);
    return res.redirect('/products/detalle/' + req.params.id)
  },

  remove : (req,res) => {

  },

}
