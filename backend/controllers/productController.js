const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  const products = await Product.find({ user: req.userId });
  res.json(products);
};

exports.addProduct = async (req, res) => {
  const { name, description } = req.body;
  const product = new Product({ name, description, user: req.userId });
  await product.save();
  res.status(201).json(product);
};

exports.updateProduct = async (req, res) => {
  const { name, description } = req.body;
  const product = await Product.findOneAndUpdate(
    { _id: req.params.id, user: req.userId },
    { name, description },
    { new: true }
  );
  if (!product) return res.status(404).json({ msg: 'Not found' });
  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  await Product.findOneAndDelete({ _id: req.params.id, user: req.userId });
  res.json({ msg: 'Deleted' });
};