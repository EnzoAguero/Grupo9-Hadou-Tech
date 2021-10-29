const db = require('../../../database/models');

module.exports = {
    products : (req,res) => {
        
        db.Product.findAll({
             include : [
                 {association : 'images'}
             ],
             where : {
                 mark : req.query.mark
             }
         })
         .then(productos => {
             let response = {
                meta : {
                    status : 200,
                    data : productos.length,
                    url : '/api/products/productos'

                },
                data : productos
             }
             res.json(response)
             
         })
    }
}