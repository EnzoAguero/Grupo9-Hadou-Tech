const db = require('../../database/models')



module.exports = {
    index : (req,res) => {
        let usuario = req.session.userLogin
        
       let images = db.Image.findAll();
       let marks = db.Mark.findAll();
       let productos = db.Product.findAll({
           include : ['images','marks'],
            limit : 8
        })
        Promise.all([images,marks,productos])
        .then(([images,marks,productos]) => 
            {
            res.render('index',{
            title : "Inicio",
            usuario,
            producto : productos,
            images,
            marks,
    
            })})

            if (req.session.carrito == undefined) {
                req.session.carrito = []
            }
    
        
    },
    /* carrito : (req,res)=>{
        


        return res.render('carrito',{
            title : "Carrito",
            Product,
        })
    }, */
   
    
}


