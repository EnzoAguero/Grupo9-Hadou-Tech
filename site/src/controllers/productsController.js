const productos = require('../data/products');
const fs = require('fs')
const path = require('path')

module.exports = {

    list : (req,res) => {

    },

    add : (req,res) => {
        return res.render('productAdd',{
            productos,
            title : "Hadou Tech",
          
            })     /* aca trabajo yo, enzo */
    },
    save : (req,res) =>{

/* aca trabajo yo, enzo */

    },
    detail : (req,res) => {
        
        let producto = productos.find(producto => producto.id === +req.params.id); /* el parametro tiene que matchear con el parametro requerido por el usuario */

        return res.render('detalle',{   
            title : "Hadou Tech",
            producto,
            productos
        })
    },
    edit : (req,res) => {
       

    },
    update : (req,res) => {
        

    },

    remove : (req,res) => {

    },
    mouse : (req,res) => {
        res.render('productList', {
            title : "Listado de Mouse",

        })

    
    }
    

    
   

    


}
