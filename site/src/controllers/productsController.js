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

    const {nombre,marca,precio,cuotas} = req.body;     /* Esto me viene ingresado por el usuario */
    if(errors.isEmpty()){
      let producto = {                                   /* Este es el producto que se me crea */
        id : productos[productos.length - 1].id + 1,   /* me lo agrega en el array de productos */
        nombre : req.body.nombre,
        marca,
        precio : +precio,
        imagen : req.file ? req.file.filename : 'default-image.png',
        cuotas,
        oferta : true
      }
      productos.push(producto);                         /* aca pushea en el json */
      guardar(productos)                                /* y lo guarda */
      
      return res.redirect('/')
    }
    else{
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
  })
      .then(product => {
          return res.render("detalle", {
              product
          })
      })
      .catch((error) => console.log(error));

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
