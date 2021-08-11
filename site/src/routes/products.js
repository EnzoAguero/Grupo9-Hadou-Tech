var express = require('express');
var router = express.Router();
const multer = require('multer');

const {add,detail,edit,update,remove,save,mouse} = require('../controllers/productsController');


const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/images'); 
    },
    filename: function (req,file,cb){
        cb(null, file.fieldname + '-' + Date.now())
    }
})
    

  const upload = multer({
    storage,
})

/* GET home page. */
router.get('/add', add) /* formulario */
router.post('/add', upload.single('imagen'), save); 

router.get('/detalle/:id',detail); /*   */

router.get('/edit/:id',edit); /* formulario  */
router.put('/edit/:id',update); /* formulario */

router.delete('/remove/:id',remove); /*  */

router.get('/mouse',mouse)

module.exports = router;
