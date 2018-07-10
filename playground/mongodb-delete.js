// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // delete many
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    // db.collection('Users').deleteMany({name: 'Josef Moser'}).then((result) => {
    //     console.log(result);
    // });

    // delete one
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5b44689bb376098e4d7b9d3d')
    }).then((results) => {
        console.log(JSON.stringify(results,undefined,2));
    });

    //client.close();
});