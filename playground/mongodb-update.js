// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // Using object destructuring feature of ES6.

MongoClient.connect('mongodb://localhost:27017/',(err,db) => {
    if(err){
        return console.log("Unable to connect to MongoDB server.");
    }
    console.log("Connected to MongoDB server.");
    const database = db.db('test');
    database.collection('Users').findOneAndUpdate({name:'Rohan'},
    {
        $inc:{
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
     //db.close();
 });  // The first arg is the url to connect to. (In real life, it's gonna be a web server).
