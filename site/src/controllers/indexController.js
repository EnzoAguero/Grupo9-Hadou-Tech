const {productos} = require('../data/products');




module.exports = {
    index : (req,res) => {
        return res.render('index',{
            title : "Inicio",
            productos,
          
            
        })
    },
    carrito : (req,res)=>{
        return res.render('carrito',{
            title : "Carrito",
            productos,
        })
    },
   
    
}


