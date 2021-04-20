const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Products-Model', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}).then (() => console.log('Connected to the DB succsessfully'))
.catch((err) => console.log(err));

// const p1 = new Product({
//     name: 'Lenovo PC',
//     category: 'computers',
//     details: {
//         description: 'A brand new Lenovo Ideal-Pad PC.',
//         price: 1500,
//         discount: 20,
//         imagesArr: ['img1.png', 'img2.png'],
//         phoneNumber: '0505505500'
//     }
// });

// const p2 = new Product({
//     name: 'Lenovo2 PC',
//     category: 'computers',
//     details: {
//         description: 'A brand new Lenovo Ideal-Pad PC.',
//         price: 1500,
//         discount: 10,
//         imagesArr: ['img1.png', 'img2.png'],
//         phoneNumber: '0544666666'
//     }
// });

// p1.save().then(() => {
//     console.log(p1);
// }).catch((err) => {
//     console.log(err);
// });

// p2.save().then(() => {
//     console.log(p2);
// }).catch((err) => {
//     console.log(err);
// });