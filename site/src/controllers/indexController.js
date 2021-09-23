const {productos} = require('../data/products');
const {usuarios} = require('../data/user')
const db = require('../../database/models')



module.exports = {
    index : (req,res) => {
        let usuario = req.session.userLogin


    
        return res.render('index',{
            title : "Inicio",
            productos,
            usuario
          
            
        })
    },
    carrito : (req,res)=>{
        return res.render('carrito',{
            title : "Carrito",
            productos,
        })
    },
   
    
}


