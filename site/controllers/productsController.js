const productos = require('../data/products');
const fs = require('fs')
const path = require('path')

module.exports = {
    add : (req,res) => {
        return res.render('productAdd',{
            productos,
          
            })
    },
    save : (req,res) => {


    },
    detail : (req,res) => {
        let producto = productos.find(producto => producto.id === +req.params.id); /* el parametro tiene que matchear con el parametro requerido por el usuario */

        return res.render('detalle',{   
            producto,
            productos
        })
    }

}