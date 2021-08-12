const {productos,guardar} = require('../data/products');
const fs = require('fs')
const path = require('path')

module.exports = {

    list : (req,res) => {

    },

    add : (req,res) => {
        return res.render('productAdd',{
            productos,
            title : "Hadou Tech",
          
            })     
    },
    save : (req,res) =>{
        

            const {nombre,marca,precio,cuotas} = req.body;     /* Esto me viene ingresado por el usuario */
            let producto = {                                   /* Este es el producto que se me crea */
                id : productos[productos.length - 1].id + 1,   /* me lo agrega en el array de productos */
                nombre,
                marca,
                precio : +precio,
                imagen : req.file ? req.file.filename : 'default-image.png',
                cuotas,
            }
            
           productos.push(producto);                         /* aca pushea en el json */
           guardar(productos)                                /* y lo guarda */
        
           return res.redirect('/')

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
            let producto = productos.find(producto => producto.id === +req.params.id);
    
            return res.render('productEdit',{
                title : "Hadou Tech",
                productos,
                producto
            }) 

    },
    update : (req,res) => {
        const {nombre,marca,precio,cuotas} = req.body;

        let producto = productos.find(producto => producto.id === +req.params.id)
        let productoEditado = {
            id : +req.params.id,
            nombre : nombre,
            marca: marca,
            precio : +precio,
            imagen : req.file ? req.file.filename : producto.imagen,
            cuotas,
        }

        let productosModificados = productos.map(producto => producto.id === +req.params.id ? productoEditado : producto)

        guardar(productosModificados)
        res.redirect('/')

    },

    remove : (req,res) => {

    },
    mouse : (req,res) => {
        res.render('productList', {
            title : "Listado de Mouse",

        })

    
    }
    

    
   

    


}
