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

const array = [2,3,4,4];
array.forEach(elemento =>{
    return console.log(elemento)
})

