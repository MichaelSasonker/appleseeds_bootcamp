const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'findMyRestaurant';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    db.collection('restaurants').insertMany([
        {
            name: 'Mirazur',
            address: {
                city: 'Menton', 
                street: '30 Avenue Aristide Briand',
                coordinates: [-77,564, 40.677]
            },
            cuisine: 'French',
            isKosher: false,
            reviews: [
                {
                    date: '01-01-2020',
                    score: 5
                },
                {
                    date: '01-01-2021',
                    score: 3
                },
                {
                    date: '05-04-2021',
                    score: 4
                }
            ]
        },
        {
            name: 'Arpege',
            address: {
                city: 'Paris', 
                street: '84 Rue de Varenne',
                coordinates: [-72,564, 43.677]
            },
            cuisine: 'French',
            isKosher: false,
            reviews: [
                {
                    date: '04-04-2020',
                    score: 2
                },
                {
                    date: '20-03-2021',
                    score: 4
                },
                {
                    date: '18-04-2021',
                    score: 5
                }
            ]
        },
        {
            name: 'Cosme',
            address: {
                city: 'New York', 
                street: '35 E 21st',
                coordinates: [-42,564, 70.677]
            },
            cuisine: 'Mexican',
            isKosher: true,
            reviews: [
                {
                    date: '14-04-2020',
                    score: 5
                },
                {
                    date: '05-01-2021',
                    score: 2
                },
                {
                    date: '06-04-2021',
                    score: 5
                }
            ]
        },
        {
            name: 'Le Bernardin',
            address: {
                city: 'New York', 
                street: '155 West 51st St',
                coordinates: [-22,564, 10.677]
            },
            cuisine: 'Fish',
            isKosher: false,
            reviews: [
                {
                    date: '10-02-2020',
                    score: 2
                },
                {
                    date: '06-08-2021',
                    score: 4
                },
                {
                    date: '16-03-2021',
                    score: 5
                }
            ]
        },
        {
            name: 'Septime',
            address: {
                city: 'Paris', 
                street: '80 Rue de Charonne',
                coordinates: [-42,564, 70.677]
            },
            cuisine: 'Fish',
            isKosher: true,
            reviews: [
                {
                    date: '15-06-2020',
                    score: 5
                },
                {
                    date: '26-09-2021',
                    score: 3
                },
                {
                    date: '02-02-2021',
                    score: 4
                }
            ]
        }
    ], (err, result) => {
        if (err) {
            return console.log('Unable to insert documents');
        }

        console.log(result.ops);
    })
})