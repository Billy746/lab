const express = require('express');
const router = express.Router();
const { getProducts, addProduct, deleteProduct, updateProduct } = require('../controllers/productController');
const auth = require('../middleware/authMiddleware');

router.get('/', auth, getProducts);
router.post('/', auth, addProduct);
router.put('/:id', auth, updateProduct);
router.delete('/:id', auth, deleteProduct);

module.exports = router;
