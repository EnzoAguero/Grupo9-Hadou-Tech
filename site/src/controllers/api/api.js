const db = require('../../../database/models');

module.exports = {
    products : (req,res) => {
        
        db.Product.findAll({
             include : [
                 {association : 'images', }
             ],
         })
         .then(productos => {
             let response = {
                meta : {
                    status : 200,
                    data : productos.length,
                    url : '/products/products'

                },
                data : productos
             }
             res.json(response)
             
         })
    }
}