const router = require('express').Router();
const productsCtrl = require('../controllers/productsCtrl');

router.route('/products')
    .get(productsCtrl.getProducts)
    .post(productsCtrl.createProduct)

router.route('/products/:id')
    .put(productsCtrl.updateProduct)
    .delete(productsCtrl.deleteProduct)

module.exports = router