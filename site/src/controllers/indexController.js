const {productos} = require('../data/products');
const {usuarios} = require('../data/user')
const db = require('../../database/models')



module.exports = {
    index : (req,res) => {
        let usuario = req.session.userLogin
          
        let allProductos = db.Product.findAll({
            include : [
                {
                    association : 'Images',
                    
                }
            ]
        })
        .then(productos => res.render('index',{
            title : "Inicio",
            productos,
            allProductos,
            usuario
          
            
        }))
    
        
    },
    carrito : (req,res)=>{
        return res.render('carrito',{
            title : "Carrito",
            productos,
        })
    },
   
    
}


