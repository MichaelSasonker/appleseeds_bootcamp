const mongoose = require('mongoose');
const validator = require('validator');


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
                if (value.length < 2) {
                    throw new Error('Images array must contains at least two images!');
                }
            }
        },
        phoneNumber: {
            type: String,
            required: true,
            validate(value) {
                // if ((value[0] !== '0' || value[1] !== '5') && value.length !== 10) {
                if (!validator.isMobilePhone(value, "he-IL")) {
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

module.exports = Product;