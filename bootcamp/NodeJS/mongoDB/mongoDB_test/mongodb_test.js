// CRUD

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'test-mongo';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to database!');
    }

    // console.log('Connected correctly');
    const db = client.db(databaseName);

    db.collection('users').insertOne({
        name: 'Andrew',
        age: 27
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert a user!');
        }

        console.log(result.ops);
    })
})