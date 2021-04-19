const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'findMyRestaurant';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    // db.collection('restaurants').insertMany([
    //     {
    //       name: "bombay",
    //       address: {
    //         city: "Holon",
    //         street: "Herzel 15",
    //         coordinates: [-77.46574, 40.6774],
    //       },
    //       cuisine: "indian",
    //       kosher: true,
    //       reviews: [
    //         {
    //           date: new Date("2016-01-01"),
    //           score: 7,
    //         },
    //         {
    //           date: new Date("2019-01-01"),
    //           score: 3,
    //         },
    //         {
    //           date: new Date("2018-01-01"),
    //           score: 8,
    //         },
    //       ],
    //     },
    //     {
    //       name: "falafel 5 shekels",
    //       address: {
    //         city: "Bat-Yam",
    //         street: "Histradrut 85",
    //         coordinates: [-70.46574, 10.6774],
    //       },
    //       cuisine: "street food",
    //       kosher: false,
    //       reviews: [
    //         {
    //           date: new Date("2019-01-01"),
    //           score: 3,
    //         },
    //         {
    //           date: new Date("2016-01-01"),
    //           score: 8,
    //         },
    //         {
    //           date: new Date("2020-01-01"),
    //           score: 4,
    //         },
    //       ],
    //     },
    //     {
    //       name: "asian delight",
    //       address: {
    //         city: "Tel Aviv",
    //         street: "Balfur 15",
    //         coordinates: [-10.46574, 30.6774],
    //       },
    //       cuisine: "asian",
    //       kosher: true,
    //       reviews: [
    //         {
    //           date: new Date("2020-01-01"),
    //           score: 3,
    //         },
    //         {
    //           date: new Date("2018-01-01"),
    //           score: 8,
    //         },
    //         {
    //           date: new Date("2016-01-01"),
    //           score: 9,
    //         },
    //       ],
    //     },
    //     {
    //       name: "coconut jam",
    //       address: {
    //         city: "Tel Aviv",
    //         street: "Stam Adress 15",
    //         coordinates: [20.46574, -40.6774],
    //       },
    //       cuisine: "african",
    //       kosher: true,
    //       reviews: [
    //         {
    //           date: new Date("2017-01-01"),
    //           score: 10,
    //         },
    //         {
    //           date: new Date("2016-01-01"),
    //           score: 8,
    //         },
    //         {
    //           date: new Date("2019-01-01"),
    //           score: 6,
    //         },
    //       ],
    //     },
    //     {
    //       name: "rice and noodles",
    //       address: {
    //         city: "Holon",
    //         street: "Bla Bla 15",
    //         coordinates: [20.46574, 10.6774],
    //       },
    //       cuisine: "asian",
    //       kosher: false,
    //       reviews: [
    //         {
    //           date: new Date("2016-01-01"),
    //           score: 1,
    //         },
    //         {
    //           date: new Date("2019-01-01"),
    //           score: 6,
    //         },
    //         {
    //           date: new Date("2019-01-01"),
    //           score: 2,
    //         },
    //       ],
    //     },
    //     {
    //       name: "thailand paradise",
    //       address: {
    //         city: "Holon",
    //         street: "Bla 13",
    //         coordinates: [-77.46574, 40.6774],
    //       },
    //       cuisine: "asian",
    //       kosher: false,
    //       reviews: [
    //         {
    //           date: new Date("2020-01-01"),
    //           score: 7,
    //         },
    //         {
    //           date: new Date("2019-01-01"),
    //           score: 6,
    //         },
    //         {
    //           date: new Date("2020-01-01"),
    //           score: 2,
    //         },
    //       ],
    //     },
    //   ], (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert documents');
    //     }

    //     console.log(result.ops);
    // })

    //1.1
    // db.collection('restaurants').find({}).toArray((err, restaurant) => {
    //     if (err) {
    //         return console.log("Can't find");
    //     }
        
    //     console.log('-------------------------------------------------------------');
    //     console.log(restaurant);
    // });

    //1.2
    // db.collection('restaurants').find({cuisine: 'asian'}).toArray((err, restaurant) => {
    //     if (err) {
    //         return console.log("Can't find");
    //     }
        
    //     console.log('-------------------------------------------------------------');
    //     console.log(restaurant);
    // });

    //1.3
    // db.collection('restaurants').find({kosher: true}).toArray((err, restaurant) => {
    //     if (err) {
    //         return console.log("Can't find");
    //     }
        
    //     console.log('-------------------------------------------------------------');
    //     console.log(restaurant);
    // });

    //1.4
    // db.collection('restaurants').find({"address.city": 'Tel Aviv'}).toArray((err, restaurant) => {
    //     if (err) {
    //         return console.log("Can't find");
    //     }
        
    //     console.log('-------------------------------------------------------------');
    //     console.log(restaurant);
    // });

    //1.5
    // db.collection('restaurants').find({"address.street": 'Balfur 15'}).toArray((err, restaurant) => {
    //     if (err) {
    //         return console.log("Can't find");
    //     }
        
    //     console.log('-------------------------------------------------------------');
    //     console.log(restaurant);
    // });

    //1.6
    // db.collection('restaurants').find({"address.coordinates": -77.46574}).toArray((err, restaurant) => {
    //     if (err) {
    //         return console.log("Can't find");
    //     }
        
    //     console.log('-------------------------------------------------------------');
    //     console.log(restaurant);
    // });

    // 1.7
    // db.collection('restaurants').find({}).sort({name : 1});

    // 1.8
    // db.collection('restaurants').find({}).sort({"address.city" : 1});

    //1.9
    // db.collection('restaurants').findOneAndUpdate({name: 'bombay'}, {$set: {name: 'new delhi'}}, (err, restaurant) => {
    //     if (err) {
    //         return console.log("Can't find");
    //     }

    //     console.log('-------------------------------------------------------------');
    //     console.log(restaurant);
    // });

    // 1.10
    // db.collection('restaurants').findOneAndUpdate({name: 'new delhi'}, 
    // {$push: {reviews: {date: new Date("2021-01-01"), score: 2}}}, (err, restaurant) => {
    //     if (err) {
    //         return console.log("Can't find");
    //     }
        
    //     console.log('-------------------------------------------------------------');
    //     console.log(restaurant);
    // });

    // 1.11
    // db.collection('restaurants').updateMany({}, 
    // {$set: {kosher: true}}, (err, restaurant) => {
    //     if (err) {
    //         return console.log("Can't find");
    //     }
        
    //     console.log('-------------------------------------------------------------');
    //     console.log(restaurant);
    // });

    // 1.12
    // db.collection('restaurants').findOneAndDelete({name: 'falafel 5 shekels'},(err, restaurant) => {
    //     if (err) {
    //         return console.log("Can't find");
    //     }
        
    //     console.log('-------------------------------------------------------------');
    //     console.log(restaurant);
    // });

    //1.13 
    // db.collection('restaurants').deleteMany({},(err, restaurant) => {
    //     if (err) {
    //         return console.log("Can't find");
    //     }
        
    //     console.log('-------------------------------------------------------------');
    //     console.log(restaurant);
    // });

    //TODO: ask about positional operator!!!
    //1.14
    // db.collection('restaurants').updateOne({name: 'asian delight'}, {$inc: {"reviews.$[].score": 2}});

    //1.15
    // db.collection('restaurants').updateOne({name: 'asian delight'}, {$inc: {"reviews.$[].score": -1}});


    //TODO: ask why print is not defined
    //2.1
    // db.collection('restaurants').find({}).forEach(restaurant => print(restaurant.name));

    //2.2
    // db.collection('restaurants').find({}).forEach(restaurant => print(restaurant.address.city));

    //2.3
    // db.collection('restaurants').find({}).forEach(restaurant => print(restaurant.address.coordinates));


    //2.4 
    //db.collection('restaurants').find({}).forEach(res => res.address.coordinates.forEach(coor => print(coor)));

    //3.1
    // db.collection('restaurants').find({name: /^b/i}).toArray((err, restaurant) => {
    //     if (err) {
    //         return console.log("Can't find");
    //     }

    //     console.log(restaurant);

    //     //On Robo3T:
    //     // db.getCollection('restaurants').find({}).forEach(restaurant => {
    //     //     if (restaurant.name.startsWith('b')) {
    //     //         print(restaurant);
    //     //     };
    //     // });
    // });

    //3.2
    // db.collection('restaurants').find().count().then(res => console.log(res));
    
    //3.3
    // db.collection('restaurants').find({"reviews.date": {$gte: new Date("2020-01-01"), $lt: new Date("2020-01-02")}}).toArray((err, res) => {
    //     if (err) {
    //         return console.log("Can't find");
    //     }

    //     console.log(res);
    // });

})