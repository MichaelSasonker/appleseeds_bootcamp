const Product = require('../models/product.model');

const getProducts = async (req, res) => {
    try {
        const result = await Product.find({});

        res.status(200).send(result);
    } catch (err) {

        res.status(400).send(err);
    }
}

const getProductByID = async (req, res) => {
    const _id = req.params.id;

    try {
        const result = await Product.findById(_id);

        res.status(200).send(result);
    } catch (err) {

        res.status(400).send(err);
    }
}


const getProductByName = async (req, res) => {
    const name = req.params.name;
    try {
        const result = await Product.findOne({ name });
        if (!result) {
            return res.status(404).send();
        }

        res.status(200).send(result);
    } catch (err) {

        res.status(400).send(err);
    }
}


const getActiveProducts = async (req, res) => {
    try {
        const result = await Product.find({ isActive: true });
        if (!result) {
            return res.status(404).send();
        }
        
        res.status(200).send(result);
    } catch (err) {

        res.status(400).send(err);
    }
}


const getProductsInPriceRange = async (req, res) => {
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
    try {
        const result = await Product.find({"details.price": {$gte: minPrice, $lte: maxPrice }});
        if(!result) {
            return res.status(404).send();
        }

        res.status(200).send(result);
    } catch (err) {

        res.status(400).send(err);
    }
}


const addProduct = async (req, res) => {
    const newProduct = req.body;
    const product = new Product(newProduct);

    try {
        await product.save();

        res.status(201).send(product);
    } catch (err) {

        res.status(400).send(err);
    }
}


const updateProductByID = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['details.discount', 'isActive'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        if (!product) {
            return res.status(404).send();
        }

        res.status(200).send(product);
    } catch (err) {

        res.status(400).send(err);
    }
}


const deleteOneByID = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
            res.status(404).send();
        }

        res.status(202).send(product);
    } catch (err) {
        res.status(400).send();
    }
}

const deleteAll = async (req, res) => {
    try {
        const products = await Product.deleteMany({});

        if (!products) {
            res.status(404).send();
        }

        res.status(202).send(products)
    } catch (err) {
        
        res.status(400).send();
    }
}


module.exports = {
    getProducts,
    getProductByID,
    getProductByName,
    getActiveProducts,
    getProductsInPriceRange,
    addProduct,
    updateProductByID,
    deleteOneByID,
    deleteAll,
}