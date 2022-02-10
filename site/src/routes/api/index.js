var express = require('express');
var router = express.Router();

const {products} = require('../../controllers/api/api');

/* GET api page. */
router.get('/products',products)



module.exports = router;
