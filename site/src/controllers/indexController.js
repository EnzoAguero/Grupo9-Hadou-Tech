const db = require('../../database/models')



module.exports = {
    index : (req,res) => {
        let usuario = req.session.userLogin
        
       db.Product.findAll({
            include : [
                {association : 'images',}
            ],
            limit : 8
        })
        .then(productos => 
            {
            res.render('index',{
            title : "Inicio",
            usuario,
            producto : productos,
    
            })})
    
        
    },
    carrito : (req,res)=>{
        return res.render('carrito',{
            title : "Carrito",
            Product,
        })
    },
   
    
}


