const db = require('../../../database/models');

module.exports = {
    products : (req,res) => {
        
        db.Product.findAll({
             include : [ 'images','marks'
             ]
         })
         .then(productos => {
             let response = {
                meta : {
                    status : 200,
                    data : productos.length,
                    url : '/api/products' 

                },
                data : productos
             }
             res.json(response)
             
         })
    }
}