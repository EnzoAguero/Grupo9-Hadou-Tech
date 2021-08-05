const productos = require('../data/products');

module.exports = {
    index : (req,res) => {
        return res.render('index',{
            title : "Hadou Tech",
            productos,
          
            
        })
    },
    carrito : (req,res)=>{
        return res.render('carrito',{
            title : "Hadou Tech",
            productos,
        })
    }
}
