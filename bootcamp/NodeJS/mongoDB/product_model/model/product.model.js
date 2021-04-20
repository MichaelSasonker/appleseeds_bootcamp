const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/Products-Model', {
    useNewUrlParser: true,
    useCreateIndex: true
});

const Product = mongoose.model('Product', {
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    }, 
    isActive: {
        type: Boolean,
        required: false,
        default: true
    },
    details: {
        type: Object,
        required: true,
        description: {
            type: String,
            required: true,
            trim: true,
            validate(value) {
                if (value.length <= 10) {
                    throw new Error('Description is need to be at least 10 letters!');
                }
            }
        },
        price: {
            type: Number,
            required: true,
            validate(value) {
                if (value < 0) {
                    throw new Error('Price is need to be a positive number!');
                }
            }
        },
        discount: {
            type: Number,
            required: false,
            default: 0
        },
        imagesArr: {
            type: Array,
            required: true,
            validate(value) {
                if (value.length <= 2) {
                    throw new Error('Images array must contains at least two images!');
                }
            }
        },
        phoneNumber: {
            type: String,
            required: true,
            validate(value) {
                console.log(value);
                // if (!validator.isMobilePhone(value, "he-IL")) {
                if ((value[0] !== '0' || value[1] !== '5') && value.length !== 10) {
                    throw new Error('Invalid phone number!');
                }
            }
        },
        dateAdded: {
            type: Date,
            required: false,
            default: Date.now()
        }
    }
});

const p1 = new Product({
    name: 'Lenovo PC',
    category: 'computers',
    details: {
        description: 'A brand new Lenovo Ideal-Pad PC.',
        price: 1500,
        discount: 20,
        imagesArr: ['img1.png', 'img2.png'],
        phoneNumber: '0505505500'
    }
});

const p2 = new Product({
    name: 'Lenovo2 PC',
    category: 'computers',
    details: {
        description: 'A brand new Lenovo Ideal-Pad PC.',
        price: 1500,
        discount: 10,
        imagesArr: ['img1.png', 'img2.png'],
        phoneNumber: '44'
    }
});

p1.save().then(() => {
    console.log(p1);
}).catch((err) => {
    console.log(err);
});

p2.save().then(() => {
    console.log(p2);
}).catch((err) => {
    console.log(err);
});