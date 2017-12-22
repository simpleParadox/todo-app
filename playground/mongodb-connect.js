// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // Using object destructuring feature of ES6.

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/todoApp',(err,db) => {
    if(err){
        return console.log("Unable to connect to MongoDB server.");
    }
    console.log("Connected to MongoDB server.");

//     const database = db.db('test')
//     // database.collection('Todos').insertOne({
//     //     text: 'Learn to let go.'
//     // }, (err, result) => {
//     //     if(err){
//     //         return console.log("Data not inserted.",err);
//     //     }
//     //     console.log(JSON.stringify(result.ops,undefined,2)); // result.ops has all the docs inserted.
//     // });
//     //
//     // db.close(); // Close the connection to the MongoDB server.
//     database.collection('Users').insertOne({
//         name: 'Rohan',
//         age:20,
//         location:'Kolkata'
//     }, (err, result) => {
//         if(err){
//             return console.log("Data not inserted.",err);
//         }
//         console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2)); // result.ops has all the docs inserted.
//     });
//
     db.close();
 });  // The first arg is the url to connect to. (In real life, it's gonna be a web server).
