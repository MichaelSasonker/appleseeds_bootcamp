const Product = require('../models/product.model');

const getProducts = (req, res) => {
    Product.find({}).then(result => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(400).send(err);
    });
}


const getProductByID = (req, res) => {
    const _id = req.params.id;
    Product.findById(_id).then(result => {
        res.status(200).send(result);
    }).catch(err => {
        res.status(400).send(err);
    });
}


const getProductByName = (req, res) => {
    const name = req.params.name;
    // console.log(req.query.name)
    Product.findOne({ name }).then(result => {
        if (!result) {
            return res.status(404).send();
        }
        res.status(200).send(result);
    }).catch(err => {
        res.status(400).send(err);
    });
}


const getActiveProducts = (req, res) => {
    Product.find({ isActive: true }).then(result => {
        if (!result) {
            return res.status(404).send();
        }
        res.status(200).send(result);
    }).catch(err => {
        res.status(400).send(err);
    });
}


const getProductsInPriceRange = (req, res) => {
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
    console.log(minPrice)
    console.log(typeof maxPrice)
    Product.find({"details.price": {$gte: minPrice, $lte: maxPrice }}).then(result => {
        if(!result) {
            return res.status(404).send();
        }
        res.send(result);
    }).catch(err => {
        res.status(400).send(err);
    })
}

const addProduct = (req, res) => {
    const newProduct = req.body;
    console.log(newProduct);

    const product = new Product(newProduct);

    product.save().then(() => {
        res.status(201).send(product);
    }).catch(err => {
        res.status(400).send(err);
    });
}


module.exports = {
    getProducts,
    getProductByID,
    getProductByName,
    getActiveProducts,
    getProductsInPriceRange,
    addProduct
}